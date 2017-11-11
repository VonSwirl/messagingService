var config = {}

config.databaseURL = 'mongodb://messageapp:mapp1@ds137435.mlab.com:37435/message-service';
config.orderServiceURLtoUpdateWithPurchase = "http://localhost:3001/purchasing/test"; //"http://localhost:3004/PurchasingUpdate";
config.testDatabaseURL = "mongodb://localhost:27017/MyDb";
config.AdminServicePurchaseURL = "http://localhost:3001/purchasing/test";
config.stockServiceUpdaterURL= "http://localhost:3001/purchasing/test";
module.exports = config;