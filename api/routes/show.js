var router = require('express').Router();
var show = require('../models/index.js').Show;

/************* shows *************/
router.get('/', function(req, res){
	show.findAll().then(shows => {
		res.send(shows);
	})
});

router.get('/:id', function(req, res){
	show.findOne({
		where: {
			id: req.params.id
		}
	}).then(show => {
		res.send(show);
	})
});

router.post('/', function(req, res){
	start_date = req.body.start_date ? new Date(req.body.start_date) : null
	close_date = req.body.close_date ? new Date(req.body.close_date) : null
	show.create({
		image: req.body.image,
		name: req.body.name,
		theater: req.body.theater,
		url: req.body.url,
		showId: req.body.show,
		start_date: start_date,
		close_date: close_date,
	}).then(show => {
		res.send(show);
	})
});

router.put('/:id', function(req, res){
	show.update(req.body, {
		where: {
			id: req.params.id
		},
		returning: true
	}).then(show => {
		res.send(show);
	})
});

router.delete('/:id', function(req, res){
	show.destroy({
		where: {
			id: req.params.id
		}
	}).then(() => {
		res.send("Success");
	})
});

module.exports = router