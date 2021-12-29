import { ICity }  from "../shared/City";
import { Subject } from 'rxjs/Subject';

export class DataService {
    cities: ICity[] = [];

    private selectedCitySource = new Subject();
    selectedProductChanges$ = this.selectedCitySource.asObservable();


    changeSelectedCity(selectedCity: ICity | null): void {
        this.selectedCitySource.next(selectedCity);
    }
}