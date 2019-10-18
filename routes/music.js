const express = require('express'),
    router = express.Router(),
    musicModel = require('../models/musicModel.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
    const musicData = await musicModel.getAll();
    console.log(musicData);
    res.render('template',
        {locals:{title:"MUSIC MOTHERFUCKER!",data: musicData},
        partials:{partial:"partial-music"}});
});

module.exports = router;
