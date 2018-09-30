// var core = require.main.exports,
//     {express} = core.scriptiveModule(),
//     Definition = require('./classDefinition');
//
// var core = require.main.exports,
//   {express} = core(),
//   Definition = require('./classDefinition');


var app = require('../'),
    Definition = require('./classDefinition');

// NOTE: posible
// var {express} = require.main.exports(),
//     app = require('../'),
//     {score} = require('../score');

// var router = express.Router();

let router = app.router();
router.get('/', (req, res, next) => new Definition(req.query).search(raw => res.send(raw)));
module.exports = router;
