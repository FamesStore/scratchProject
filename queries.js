var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/items';
var db = pgp(connectionString);

// add query functions

function getAllItem(req, res, next) {
  db.any('select * from goods')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL goods'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleItem(req, res, next) {};
function createItem(req, res, next){};
function updateItem(req, res, next) {};
function removeItem(req, res, next) {};

module.exports = {
  getAllItems: getAllItems,
  getSingleItem: getSingleItem,
  createItem: createItem,
  updateItem: updateItem,
  removeItem: removeItem
};
