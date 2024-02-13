import mongoose from "mongoose";

const LabelSchema = new mongoose.Schema({
    color: { type: String, required: true }
});

const LabelModel = mongoose.model('Label', LabelSchema);

export const getAllLabels = async () => await LabelModel.find({}).lean();

export const addNewLabel = async (values: {color: string}) => await new LabelModel(values).save().then((label) => label.toObject());

export const removeLabelById = async (id: string)=> {
    const labelData = await LabelModel.findByIdAndDelete(id);

    return labelData;
};

export const editLabelById = async (id: string, values: {color: string}) => await LabelModel.findByIdAndUpdate(id, values, {returnDocument: 'after'});
