const mongoose = require('mongoose')

const { Schema } = mongoose

const propertySchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  pets: {
    type: Boolean,
    required: true,
  },
  dateListed: {
    type: Date,
    default: Date.now,
  },
  propertyType: {
    type: Schema.Types.ObjectId,
    ref: 'PropertyType',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Image',
      required: true,
    },
  ],
})

const Property = mongoose.model('Property', propertySchema)

module.exports = Property
