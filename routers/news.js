const express = require('express');
const router = express.Router();
const uploads = require('../middleware/multer');
const {
  createNews,
  getAllNews,
  getSingleNews,
  getNewsByCategory,
  searchPosts,
} = require('../controllers/news');
const { validator, result, validateFile } = require('../middleware/validator');

router.post(
  '/create',
  uploads.single('thumbnail'),
  validator,
  result,
  validateFile,
  createNews
);

router.get('/news', getAllNews);
router.get('/news/single/:id', getSingleNews);
router.get('/news/:category/:qty?', getNewsByCategory);
router.post('/news/search/:query', searchPosts);

module.exports = router;
