var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/items';
var db = pgp(connectionString);

// add query functions

function getAllItems(req, res, next) {
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


function getSingleItem(req, res, next) {
  var goodsID = parseInt(req.params.id);
  db.one('select * from goods where id = $1', goodsID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE good'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createItem(req, res, next) {
  req.body.price = parseInt(req.body.price);
  db.none('insert into goods(seller, seller_rating, category, item_name, price, condition, description, quantity, comments, likes)' +
      'values(${seller}, ${seller_rating}, ${category}, ${item_name}, ${price}, ${condition}, ${description}, ${quantity}, ${comments}, ${likes})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one item'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {};
function removeItem(req, res, next) {};

module.exports = {
  getAllItems: getAllItems,
  getSingleItem: getSingleItem,
  createItem: createItem,
  updateItem: updateItem,
  removeItem: removeItem
};
