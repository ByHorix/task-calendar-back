import express from "express";
import {addNewTask, editTaskById, getTasksForMonth, removeTaskById} from "../db/Task";

export const getForMonth = async (req: express.Request, res: express.Response) => {
    try {
        const {date} = req.body.data;

        const taskList = await getTasksForMonth(date);

        return res.status(200).json(taskList);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

export const addNew = async (req: express.Request, res: express.Response) => {
    try {
        const {data} = req.body;

        const newTask = await addNewTask(data);

        return res.status(200).json(newTask);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

export const edit = async (req: express.Request, res: express.Response) => {
    try {
        const {id, values} = req.body.data;

        const editedTask = await editTaskById(id, values);

        return res.status(200).json(editedTask);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

export const remove = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.body.data;

        const removedTask = await removeTaskById(id);

        return res.status(200).json(removedTask);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};
