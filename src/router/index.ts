import express from "express";
import labels from "./routes/labels";

const router = express.Router();

export default (): express.Router => {
    labels(router);

    return router;
};
