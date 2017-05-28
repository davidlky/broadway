var router = require('express').Router();
var schedule = require('../models/index.js').Schedule;

/************* schedules *************/
router.get('/', function(req, res){
	schedule.findAll().then(schedules => {
		res.send(schedules);
	})
});

router.get('/:id', function(req, res){
	schedule.findOne({
		where: {
			id: req.params.id
		}
	}).then(schedule => {
		res.send(schedule);
	})
});

router.post('/', function(req, res){
	start_date = req.body.start_date ? new Date(req.body.start_date) : null
	end_date = req.body.end_date ? new Date(req.body.end_date) : null

	console.log(req.body.monday);
	schedule.create({
		monday: req.body.monday,
		tuesday: req.body.tuesday,
		wednesday: req.body.wednesday,
		thursday: req.body.thursday,
		friday: req.body.friday,
		saturday: req.body.saturday,
		sunday: req.body.sunday,
		start_date: start_date,
		end_date: end_date,
		showId: req.body.showId,
	}).then(schedule => {
		res.send(schedule);
	})
});

router.put('/:id', function(req, res){
	schedule.update(req.body, {
		where: {
			id: req.params.id
		},
		returning: true
	}).then(schedule => {
		res.send(schedule);
	})
});

router.delete('/:id', function(req, res){
	schedule.destroy({
		where: {
			id: req.params.id
		}
	}).then(() => {
		res.send("Success");
	})
});

module.exports = router