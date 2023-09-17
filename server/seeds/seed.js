const db = require('../config/connection')
const { User, Property, PropertyType, Image } = require('../models')

const propertySeeds = require('./propertySeeds.json')
const imageSeeds = require('./imageSeeds.json')
const userSeeds = require('./userSeeds.json')
const propertyTypeSeeds = require('./propertyTypeSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({})
    await Property.deleteMany({})
    await PropertyType.deleteMany({})
    await Image.deleteMany({})

    await User.create(userSeeds)
    // await Property.create(propertySeeds)
    // await PropertyType.create(propertyTypeSeeds)
    // await Image.create(imageSeeds)

    const propertyTypes = await PropertyType.create(propertyTypeSeeds)
    const images = await Image.create(imageSeeds)

    for (const property of propertySeeds) {
      // Assign a random property type
      const randomPropertyType =
        propertyTypes[Math.floor(Math.random() * propertyTypes.length)]._id;

      // Randomly select an image and remove it from the available images
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImage = images.splice(randomIndex, 1)[0]._id;

      await Property.create({
        ...property,
        propertyType: randomPropertyType,
        images: [randomImage],
      });
    }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('all done!')
  process.exit(0)
})

/*
db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Property.deleteMany({});
  await Image.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const properties = await Property.insertMany(propertyData);
  const images = await Image.insertMany(imageData);

  for (newProperty of properties) {
    // randomly add each property to a user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.properties.push(newProperty._id);
    await tempUser.save();

    // randomly add a image to each property
    const tempImage = images[Math.floor(Math.random() * images.length)];
    newProperty.image = tempImage._id;
    await newProperty.save();

    // reference property on image model, too
    tempImage.properties.push(newProperty._id);
    await tempImage.save();
  }

  console.log('all done!');
  process.exit(0);
}); */
