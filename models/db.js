var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var mongodb = new Db(settings.db, new Server(settings.host, settings.port), { safe: true });
mongodb.authenticate('user', 'lgylgy')

module.exports = mongodb;