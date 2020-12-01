const express = require('express');
const router = express.Router();

var controller = require('../controllers/user.controller')
var validate = require('../validate/user.validate')
var authMiddleware = require('../middlewares/auth.middleware');

router.get('/', controller.index );



router.get('/search', controller.search);
  
router.get('/create', controller.create);
  
router.post('/create',validate.postCreate, controller.postCreate);
  
router.get('/:id', controller.get);


// Important
module.exports = router;
