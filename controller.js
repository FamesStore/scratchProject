const Sequelize = require('sequelize');

const sequelize = new Sequelize('itemsList', 'famesStore', 'Seth', {
  host: 'localhost',
  dialect: 'postgres'
});

const Item = sequelize.define('item', {
  itemId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  sellerId: Sequelize.INTEGER,
  sellerRating: Sequelize.INTEGER,
  category: Sequelize.STRING,
  itemName: Sequelize.STRING,
  price: Sequelize.INTEGER,
  condition: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
});

const User = sequelize.define('user', {
  userId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  userName: Sequelize.STRING,
  password: Sequelize.STRING,
  sellerRating: Sequelize.INTEGER,
  itemsBought: Sequelize.STRING,
  itemsToSell: Sequelize.STRING,
  description: Sequelize.STRING,
});

//User.hasMany(Item, {foreignKey: "itemId"});
//Item.hasOne(User, {foreignKey: "userId"});

sequelize.sync({force: true});

let dbController = {

	createUser: (req, res, next) => {
		console.log(req.body)
		User
		  .build({
			  userName: req.body.userName,
			  password: req.body.userPassword,
			  description: req.body.userDescription,
			})
		  .save()
		  //.then(anotherTask => {
		    // you can now access the currently saved task with the variable anotherTask... nice!
		  //})
		  .catch(error => {
		    console.log(error)
		  })
		  next();
	},

	createItem: (req, res, next) => {
		console.log(req.body)
		Item
		  .build({	 
			  category: req.body.itemCategory,
			  itemName: req.body.itemName,
			  price: req.body.itemPrice,
			  condition: req.body.itemCondition,
			  quantity: req.body.itemQuantity,
			  description: req.body.itemDescription
			})
		  .save()
		  //.then(anotherTask => {
		    // you can now access the currently saved task with the variable anotherTask... nice!
		  //})
		  .catch(error => {
		    console.log(error)
		  })
		  next();
	}
}


module.exports = dbController;
  // what does the sync method do?
      // const itemRecord = Item.build('item');
      // await itemRecord.save();
      // const userRecord = User.build('user');
      // await userRecord.save();
  //   });
  // });







