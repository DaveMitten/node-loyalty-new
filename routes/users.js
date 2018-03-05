var express = require('express');
var router = express.Router();
var Index = require('../models/index');
 
/* GET user listing. */
router.get('/', function (req, res, next) {
	Index
	.User
	.findAll({})
    .then(users => res.json({
            error: false,
            data: todos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

module.exports = router;



 
 
// /* POST todo. */
// router.post('/', function(req, res, next) {
 
// });
 
 
// /* update todo. */
// router.put('/:id', function(req, res, next) {
 
// });


//  /* GET todo listing. */
//  router.delete('/:id', function(req, res, next) {
 
// });
 
