import { ICity }  from "../shared/City";
import { IPointsOfInterest } from "../shared/PointsOfInterest";

export class DataService {
    cities: ICity[] = [];
    selectedData: any[] = [];
    pointsofinterest: IPointsOfInterest[] = [];
}