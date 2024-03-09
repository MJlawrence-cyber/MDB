const Task = require ("../models/taskModel");

//  add new task service
const addTask = async (taskData) => {
    try {
        taskData.status = "pending";
        const newTask = new Task(taskData);
        await newTask.save();
        return newTask;
    } catch (error) {
        throw new Error ("Error adding new task")
    }
};

// 
const editTask = async (task_id) => {
    try {
        return await Task.findByIdAndUpdate(task_id, taskData, {new: true});
    } catch (error) {
        throw new Error (`Error editing task ${task_id}`)
    }
};

// fetch users tasks
const fetchUsersTask = async (user_id) => {
    try {
        return await Task.find({user_id: user_id});
    } catch (error) {
        throw new Error ("Error fetching tasks ${user_id}")
    }
};

// delete task
const deleteTask = async (task_id) => {
    try {
        return await Task.findByIdAndDelete(task_id);
    } catch (error) {
        throw new Error ("Error deleting task ${task_id}")
    }
};

module.exports = { addTask, editTask, fetchUsersTask, deleteTask};