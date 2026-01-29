import { IDataGraph } from "../Types/Graph/DataGraph";
import dataGraphDBModel from "../Types/ModelsDB/GraphDBModel";

export const createNewGraphDB = async (dataGraph:IDataGraph) => {
    try {
        const newDataGraph = new dataGraphDBModel(dataGraph);
        const savedGraph = await newDataGraph.save();
        return savedGraph;
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
};

export const getGraphByUserId = async (userId: string)=> {
    try {
        const graphByUser = await dataGraphDBModel.find({userId});
        return graphByUser||[];
    }
    catch (err) {
        throw new Error((err as Error).message);
    }}