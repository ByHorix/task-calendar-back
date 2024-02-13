import express from "express";
import {addNewLabel, editLabelById, getAllLabels, removeLabelById} from "../db/Label";

export const getAll = async (req: express.Request, res: express.Response) => {
    try {
        const labelsList = await getAllLabels();

        return res.status(200).json({
            data: labelsList
        });
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

export const addNew = async (req: express.Request, res: express.Response) => {
    try {
        const {labelData} = req.body;

        const newLabel = await addNewLabel(labelData);

        return res.status(200).json(newLabel);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

export const edit = async (req: express.Request, res: express.Response) => {
    try {
        const {id, labelData} = req.body;

        const editedLabel = await editLabelById(id, labelData);
        console.log(editedLabel)

        return res.status(200).json(editedLabel);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

export const remove = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.body

        const removedLabel = await removeLabelById(id);

        return res.status(200).json(removedLabel);
    } catch (e) {
        return res.status(500).send(e.message);
    }
};
