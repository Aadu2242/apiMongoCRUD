module.exports = function(app, db){
    app.post('/aws', (req, res) => {
    const note = { aws_topic: req.body.title, date: req.body.date, done: req.body.flag };
		db.collection('aws').insert(note, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(result.ops[0]);
			}
		});
    });
};