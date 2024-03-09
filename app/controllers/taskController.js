const taskService = require("../services/taskService")  ;

// add new task methods
const addNewTask = async (req, res) => {
    try {
        const {body} = req;
        const {user_id} = req.auth;
        body.user_id = user_id;
        const newTask = await taskService.addTask(body);
        res.status(201).json({
            message: "Task added successfully",
            task: newTask,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
// Edit a task
const editTask = async (req, res) => {
    const { taskId } = req.params;
    const {body} = req
    try {
      const editedTask = await taskService.editTask(taskId, body);
      res.status(200).json(editedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
  // Fetch user tasks
const fetchUserTasks = async (req, res) => {
    try {
      const {user_id} = req.auth;
      const userTasks = await taskService.fetchUsersTask(user_id);
      res.status(200).json({
        message: "Fetched User Tasks Successfully",
        tasks: userTasks 
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete a task
  const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
      await taskService.deleteTask(taskId);
      res.status(204).json({
         message: "Deleted Task Successfully"
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = {
    addNewTask,
    editTask,
    fetchUserTasks,
    deleteTask
  };