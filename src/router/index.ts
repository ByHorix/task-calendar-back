import express from "express";
import labels from "./routes/labels";
import tasks from "./routes/tasks";

const router = express.Router();

export default (): express.Router => {
    labels(router);
    tasks(router);

    return router;
};
