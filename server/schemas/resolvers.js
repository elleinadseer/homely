const { AuthenticationError } = require('apollo-server-express')
const { User, Property, PropertyType, Image } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (user) {
        // If a user is authenticated, return their profile
        const userData = await User.findOne({ _id: user._id })
          .select('-__v -password')
          .populate({
            path: 'savedProperties',
            populate: {
              path: 'propertyType images',
            },
          })

        return userData
      }
      throw new AuthenticationError('Not logged in')
    },

    users: async () => {
      return User.find().populate('savedProperties')
    },

    user: async (_, { username }) => {
      const user = await User.findOne({ username }).populate('savedProperties')
      if (!user) {
        throw new Error('User not found')
      }
      return user
    },

    properties: async (_, { filter }) => {
      const params = {}

      if (filter) {
        if (filter.rent !== undefined) {
          params.rent = filter.rent
        }

        if (filter.priceMax) {
          params.price = { $lte: filter.priceMax }
        }

        if (filter.beds) {
          params.beds = filter.beds
        }

        if (filter.baths) {
          params.baths = filter.baths
        }

        if (filter.pets !== undefined) {
          params.pets = filter.pets
        }

        if (filter.propertyType) {
          params.propertyType = filter.propertyType
        }
      }

      return Property.find(params).populate('propertyType').populate('images')
    },

    property: async (_, { _id }) => {
      try {
        const property = await Property.findById(_id)
          .populate('propertyType')
          .populate('images')

        if (!property) {
          throw new Error('Property not found')
        }

        return property
      } catch (error) {
        throw new Error(`Error fetching property: ${error.message}`)
      }
    },

    propertyTypes: async () => {
      return PropertyType.find()
    },

    propertyType: async (_, { _id }) => {
      const propertyType = await PropertyType.findById(_id)
      if (!propertyType) {
        throw new Error('PropertyType not found')
      }
      return propertyType
    },

    images: async () => {
      return Image.find()
    },

    image: async (_, { _id }) => {
      const image = await Image.findById(_id)
      if (!image) {
        throw new Error('Image not found')
      }
      return image
    },
  },

  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('Incorrect email or password')
      }

      const correctPassword = await user.isCorrectPassword(password)

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect email or password')
      }

      const token = signToken(user)

      return { token, user }
    },

    addUser: async (_, args) => {
      const user = await User.create(args)
      const token = signToken(user)

      return { token, user }
    },

    addProperty: async (_, args) => {
      const property = await Property.create(args.input)

      return property
    },

    updateProperty: async (_, { propertyId, input }) => {
      const property = await Property.findByIdAndUpdate(
        propertyId,
        { ...input },
        { new: true }
      )

      return property
    },

    removeProperty: async (_, { propertyId }) => {
      const property = await Property.findByIdAndRemove(propertyId)
      return property
    },

    savePropertyToUser: async (_, { propertyId }, { user }) => {
      if (user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: user._id },
          { $addToSet: { savedProperties: propertyId } },
          { new: true, runValidators: true }
        ).populate({
          path: 'savedProperties',
          populate: {
            path: 'propertyType images',
          },
        })

        return updatedUser
      }
      throw new AuthenticationError('You need to be logged in!')
    },

    removePropertyFromUser: async (_, { propertyId }, { user }) => {
      if (user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: user._id },
          { $pull: { savedProperties: propertyId } },
          { new: true }
        ).populate({
          path: 'savedProperties',
          populate: {
            path: 'propertyType images',
          },
        })

        return updatedUser
      }
      throw new AuthenticationError('You need to be logged in!')
    },

    addPropertyType: async (_, { name }) => {
      // Create a new property type
      const propertyType = await PropertyType.create({ name })
      return propertyType
    },

    removePropertyType: async (_, { propertyTypeId }) => {
      // Remove a property type
      const propertyType = await PropertyType.findByIdAndRemove(propertyTypeId)
      return propertyType
    },

    addImage: async (_, url) => {
      // Create a new image
      const image = await Image.create(url)
      return image
    },

    removeImage: async (_, { imageId }) => {
      // Remove an image
      const image = await Image.findByIdAndRemove(imageId)
      return image
    },
  },

  User: {
    savedProperties: async (user, { filter }) => {
      if (!user) {
        throw new AuthenticationError('You need to be logged in!')
      }

      const params = { _id: { $in: user.savedProperties } }

      if (filter) {
        if (filter.rent !== undefined) {
          params.rent = filter.rent
        }

        if (filter.priceMax) {
          params.price = { $lte: filter.priceMax }
        }

        if (filter.beds) {
          params.beds = filter.beds
        }

        if (filter.baths) {
          params.baths = filter.baths
        }

        if (filter.pets !== undefined) {
          params.pets = filter.pets
        }

        if (filter.propertyType) {
          params.propertyType = filter.propertyType
        }
      }

      return Property.find(params).populate('propertyType').populate('images')
    },
  },
}

module.exports = resolvers
