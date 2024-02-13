import mongoose from "mongoose";

export interface LabelDB {
    color: string,
    _id: mongoose.Schema.Types.ObjectId
}

export type LabelIncoming = Omit<LabelDB, '_id'>

export interface TaskDB {
    _id: mongoose.Schema.Types.ObjectId,
    description: string,
    date: string,
    labels: LabelDB['_id'][],
    order: number
}

export type TaskIncoming = Omit<TaskDB, '_id'>
