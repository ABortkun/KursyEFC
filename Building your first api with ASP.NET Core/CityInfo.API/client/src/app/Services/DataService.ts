import { ICity }  from "../shared/City";
import { Subject } from 'rxjs/Subject';
import { IPointsOfInterest } from "../shared/PointsOfInterest";

export class DataService {
    cities: ICity[] = [];
    selectedData: any;
    pointsofinterest: IPointsOfInterest[] = [];
}