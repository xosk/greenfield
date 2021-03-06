var Sequelize = require('sequelize');
var sequelize = new Sequelize('heroku_6a89e82b691972a', 'b0509710d39880', '29b2ff6e', {
  host: 'us-cdbr-iron-east-03.cleardb.net',
  port: 3306,
  dialect: 'mysql'
  // pool: { idle: 120000, max: 5, min: 0}
  });

var itineraries = sequelize.define('itineraries', {
  name: Sequelize.TEXT,
  start: Sequelize.TEXT,
  end: Sequelize.TEXT,
  userId: Sequelize.TEXT
})

var locations = sequelize.define('locations', {
  location: Sequelize.STRING,
  visitDate: Sequelize.TEXT,
  time: Sequelize.TEXT,
  longitude: Sequelize.DOUBLE,
  latitude: Sequelize.DOUBLE
});

var events = sequelize.define('events', {
  location: Sequelize.STRING,
  time: Sequelize.TEXT,
  description: Sequelize.TEXT
});


itineraries.hasMany(locations, {foreignKey: 'id_itineraries'});
locations.hasMany(events, {foreignKey: 'id_locations'})

itineraries.sync();
locations.sync();
events.sync();

module.exports.itineraries = itineraries;
module.exports.locations = locations;
module.exports.events = events;

