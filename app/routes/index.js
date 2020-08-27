const noteRoutes = require('./note_routes');
const findRoutes = require('./find_routes');
const awsRoutes = require('./aws_notes');

module.exports = function(app, db) {
	noteRoutes(app,db);
	findRoutes(app,db);
	awsRoutes(app,db);
}

//module.exports = function(app, db) {
//	findRoutes(app,db);
//}
//
//module.exports = function(app, db) {
//	awsRoutes(app,db);
//}