var router = require('express').Router();
var ticket = require('../models/index.js').Ticket;

/************* tickets *************/
router.get('/', function(req, res){
	ticket.findAll().then(tickets => {
		res.send(tickets);
	})
});

router.get('/:id', function(req, res){
	ticket.findOne({
		where: {
			id: req.params.id
		}
	}).then(ticket => {
		res.send(ticket);
	})
});

router.post('/', function(req, res){
	ticket.create({
		name: req.body.name,
		amount: req.body.amount,
		payment_method: req.body.payment_method,
		description: req.body.description,
		showId: req.body.showId
	}).then(ticket => {
		res.send(ticket);
	})
});

router.put('/:id', function(req, res){
	ticket.update(req.body, {
		where: {
			id: req.params.id
		},
		returning: true
	}).then(ticket => {
		res.send(ticket);
	})
});

router.delete('/:id', function(req, res){
	ticket.destroy({
		where: {
			id: req.params.id
		}
	}).then(() => {
		res.send("Success");
	})
});

module.exports = router