import express from "express";
import {addNew, edit, getForMonth, remove} from "../../controllers/tasks";

const tasksPrefix = '/tasks';

export default (router: express.Router) => {
    router.post(`${tasksPrefix}/for-month`, getForMonth);
    router.put(`${tasksPrefix}/add`, addNew);
    router.patch(`${tasksPrefix}/edit`, edit);
    router.delete(`${tasksPrefix}/remove`, remove);
}