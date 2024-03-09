const express = require('express')
const router = express.Router();


//importing of controllers
const authController = require('../controllers/authController');
const { authChecher } = require('../middlewares/authMiddleWare');
const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');
//
/**
 * 
 * 
 * UNAUTHENTICATED ROUTES
 * 
 */

router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);






/**
 * 
 * 
 * AUTHENTICATED ROUTES
 * 
 */
router.use(authChecher);

//route to fetch user data
router.get("/getProfile", userController.getUserProfile);

// routes to update user data
router.put("/updateUser", userController.updateUserProfile);

/**
 * TASK ROUTES
 */

router.get("/tasks", taskController.fetchUserTasks);
router.post('/tasks/add', taskController.addNewTask);
router.put('/tasks/edit/:taskId', taskController.editTask);
router.delete('/tasks/delete/:taskId', taskController.deleteTask);




module.exports = router;
