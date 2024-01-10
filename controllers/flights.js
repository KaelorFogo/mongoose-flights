const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  create,
  new: newFlight
};

function newFlight(req, res){
  res.render('flights/new', { errorMsg: '' })
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Detail', flight });
}

async function create(req, res){
  try{
    await Flight.create(req.body);
    res.redirect('/flights/new');
  }catch(err){
    console.log(err);
    res.render('flights/new', {errorMsg: err.message });
  }
}

async function index(req, res){
  const flights = await Flight.find({});
  res.render('flights/index', { flights });
}