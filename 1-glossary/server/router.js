const express = require('express');
const controllers = require('./controllers.js');

// initialize router

const router = express.Router();

// define routes

router.get('/glossary', controllers.glossary.get);

router.post('/glossary', controllers.glossary.post);

router.patch('/glossary', controllers.glossary.patch);

router.delete('/glossary', controllers.glossary.delete);

router.options('/glossary', controllers.glossary.options);

// export router

module.exports = router;