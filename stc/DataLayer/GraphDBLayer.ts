import { IDataGraphDTO } from "../Types/DTO/Graph/DataGraphDTO";
import { IDataGraph } from "../Types/GraphModel";
import dataGraphDBModel from "../Types/ModelsDB/GraphDBModel";

export const createNewGraphDB = async (dataGraph:IDataGraphDTO) => {
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
        const graphByUser = await dataGraphDBModel.find({userId,}).limit(200).sort({entryTime: -1});
        return graphByUser||[];
    }
    catch (err) {
        throw new Error((err as Error).message);
    }}