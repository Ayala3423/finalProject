const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);

// הגשת בקשה להיות מורה
router.post('/apply-teacher', controller.uploadMiddleware, controller.applyTeacher);

// צור קשר
router.post('/contact', controller.sendContactForm);

// שיעורים ציבוריים
router.get('/lessons', controller.getAllGeneric);
router.get('/lessons/:id', controller.getGenericById);

router.get('/teachers', controller.getAllGeneric);

// כל השאר מוגנים
router.use(verifyToken);

// נתיבי גישה כלליים לפי משתמש
const userBasePath = '/users/:userId/:type';

router.route(userBasePath)
    .get(controller.getAll)
    .post(controller.create);

router.route(`${userBasePath}/:id`)
    .get(controller.getAll)
    .put(controller.update)
    .delete(controller.delete);

// תתי ישויות
const subItemPath = `${userBasePath}/:id/:subtype`;

router.route(subItemPath)
    .get(controller.getSubItems)
    .post(controller.create);

router.route(`${subItemPath}/:subId`)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;