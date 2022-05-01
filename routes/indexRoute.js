const express = require('express');
const router = express.Router();

let data = [
  'Action',
	'Adventure',
	'Cooking',
	'Comedy',
	'Drama',
	'Ecchi',
	'Fantasy',
	'Gaming',
	'Gore',
	'Harem',
	'Historic',
	'Horror',
	'Idol',
	'Kids',
	'Magic',
	'Martial Arts',			
	'Mecha',
	'Militar',
	'Mistery',
	'Parody',
	'Post-Apocaliptic',
	'Psychological',
	'Romance',
	'Samurai',
	'School',
	'Sci-Fi',
	'Seinen',
	'Shoujo',
	'Shounen',
	'Slice of Life',
	'Specials',
	'Sports',
	'Supernatural',
	'Suspense',
	'Terror',
	'Vampires',
	'Yuri'
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { genre: data });
});

//router.post('/', function(req, res, next) {
// 
//});

//router.put('/', function(req, res, next) {
// 
//});

//router.delete('/', function(req, res, next) {
// 
//});

module.exports = router;
