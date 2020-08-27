module.exports = function(app, db) {
	app.get('/find/:str', (req, res) => {
		const searchStr = req.params.str;
		console.log(searchStr);
		db.collection('notes').find({ "text": { $regex: searchStr } }).toArray(function (err, result){
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
			    console.log(result);
				res.send(result);
			}
		});
	});
};