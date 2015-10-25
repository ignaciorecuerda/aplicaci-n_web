var _ = require('underscore');

// TODO: This shoul be read from a database
var heroes = [
  { 
    name: 'Fidesol', 
    facts: [
      'Nacho',
      'Ángela', 
      'Jorge',
      'Alejandro',
      'Alberto',
      'Fran'] 
  },
  {
    name: 'Axesor',
    facts: [
      'Álvaro',
      'Jose', 
      'Marta',
      'Vicente']
  },
  {
    name: 'Alhambra',
    facts: [
      'Daniel',
      'Carlos', 
      'Pablo',
      'Juan']
  },
  {
    name: 'Virtual Informática',
    facts: [
      'Jose Maria',
      'Enrique', 
      'Pablo',
      'Ángela']
  }
];

//carga los facts que hay añadidos
exports.index = function(req, res) {
  var names = heroes.map(function(p) { return p.name; });
  res.render('index', { heroes: names })
};

//para que devuelva los facts que corresponden
exports.hero = function(req, res) {
  var facts = _(heroes).detect(function (p) { 
    return p.name == req.params.name;
  }).facts;
  res.json(facts);
}

//funcion para manejar la ruta de añadir un alumno
exports.addFact = function(req, res) {
  var hero = _(heroes).detect(function(p) {
    return p.name == req.body.name;
  });
  hero.facts.push(req.body.fact);
  res.json({status: 'ok' });
}
