import mongoose from "mongoose";
import {TaskIncoming} from "../types";

const TaskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    labels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Label" }],
    date: { type: Date, required: true },
    order: { type: Number, required: true }
});

const TaskModel = mongoose.model('Task', TaskSchema);

export const getTasksForMonth = async (date: string) => {
    const typedDate = new Date(date);

    const year = typedDate.getFullYear();
    const month = typedDate.getMonth();

    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 1);
    console.log(startOfMonth)
    console.log(endOfMonth)

    const result = await TaskModel
        .find({
            date: {
                $gte: startOfMonth,
                $lt: endOfMonth}
        })
        .populate('labels');

    return result;
}

export const addNewTask = async (values: TaskIncoming) => await new TaskModel(values).save().then((data) => data.toObject());

export const editTaskById = async (id: string, values: Partial<TaskIncoming>) => await TaskModel.findByIdAndUpdate(id, values, {returnDocument: 'after'});

export const removeTaskById = async (id: string) => {
    const removedTask = await TaskModel.findByIdAndDelete(id);

    return removedTask;
};
