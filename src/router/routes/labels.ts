import express from "express";
import {addNew, edit, getAll, remove} from "../../controllers/labels";

const labelsPrefix = '/labels';

export default (router: express.Router) => {
    router.get(`${labelsPrefix}/all`, getAll);
    router.post(`${labelsPrefix}/add`, addNew);
    router.patch(`${labelsPrefix}/edit`, edit);
    router.delete(`${labelsPrefix}/remove`, remove);
}