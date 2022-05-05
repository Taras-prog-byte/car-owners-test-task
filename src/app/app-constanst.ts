import {Observable} from "rxjs";
import {faEye, faPenToSquare, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";

export interface OwnerEntity {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  cars: CarEntity[];
}

export interface CarEntity {
  carNumber: string;
  carModel: string;
  modelName: string;
  year: number;
}

export const carNumberPattern = '^[A-Z]{2}\\d{4}(?<!0{4})[A-Z]{2}$'
export const SERVER_API_URL: string = "http://localhost:4200/api/";
export interface ICarOwnersService {
  getOwners(): Observable<OwnerEntity[]>;
  getOwnerById(aId: number): Observable<OwnerEntity>;
  createOwner(
    aLastName: string,
    aFirstName: string,
    aMiddleName: string,
    aCars: CarEntity[]
  ): Observable<OwnerEntity>;
  editOwner(aOwner: OwnerEntity): Observable<OwnerEntity>;
  deleteOwner(aOwnerId: number): Observable<OwnerEntity[]>;
}

export enum STATES {
  createNew = 'createNew',
  open = 'open',
  change = 'change',
  delete = 'delete'
}

export const icons = {
  faTrashCan,
  faPlus,
  faEye,
  faPenToSquare
}

export interface CarStorage {
  userId: number;
  carNumbers: string[];
}
