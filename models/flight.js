const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
  airport: { 
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: { 
    type: Date, 
    require: true 
  }
}, {
  timestamps: true
});

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 1000
  },
  departs: {
    type: Date,
    default: function() {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    }
  },
  destinations: [destinationSchema]
}, {
  timestamps: true
});


module.exports = mongoose.model('Flights', flightSchema);