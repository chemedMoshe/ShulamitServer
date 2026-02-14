export interface IDataGraphDTO {
  userId?: string;
  emotionScore: number;
  desireToStay_score: number;
  tensionLevel: number;
  entryOrder: number;
  entryTime?: Date;
}