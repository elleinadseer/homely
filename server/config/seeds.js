const db = require('./connection');
const { User, Property, PropertyType, Image } = require('../models');

db.once('open', async () => {
  await PropertyType.deleteMany();

  const propertyTypes = await PropertyType.insertMany([
    {name: "Detached"},
    {name: "Semi-Detached"},
    {name: "Bungalow"},
    {name: "Flat"},
    {name: "Terraced"}
  ]);

  await Image.deleteMany();

  const images = await Image.insertMany()


  await Property.deleteMany();

  const properties = await Property.insertMany([
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    },
    {
      address: 'Tin of Cookies',
      city:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      county: 'cookie-tin.jpg',
      postcode: categories[0]._id,
      lat: 2.99,
      lng: 500,
      price: 10000,
      beds: 5,
      baths: 2,
      pets: true,
      propertyType: "Detached",
      description: "there is one",
      images: "indeed"
    }
  ]);

  console.log('Propertys seeded');

  await User.deleteMany();

  await User.create({
    firstaddress: 'Pamela',
    lastaddress: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        Propertys: [Propertys[0]._id, Propertys[0]._id, Propertys[1]._id]
      }
    ]
  });

  await User.create({
    firstaddress: 'Elijah',
    lastaddress: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
