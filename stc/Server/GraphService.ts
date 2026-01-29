import { createNewGraphDB, getGraphByUserId } from "../DataLayer/GraphDBLayer";
import { IDataGraphDTO } from "../Types/DTO/DataGraphDTO";
import { IDataGraph } from "../Types/GraphModel";

export default class GraphService {
  public static createGraph = async (dataGraph: IDataGraphDTO, userId: string) => {
    try {
      const newDataGraph = { 
        ...dataGraph, 
        userId: userId,
        entryTime: new Date()
       };
      return await createNewGraphDB(newDataGraph);
    } catch (err) {
      throw (err as Error).message;
    }
  };

  public static getGraphByUserId = async (userId: string) => {
    try {
      return await getGraphByUserId(userId);
    } catch (err) {
      throw (err as Error).message;
    }
  };
}
