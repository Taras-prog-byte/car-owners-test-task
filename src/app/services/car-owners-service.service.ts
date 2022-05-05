import { Injectable } from '@angular/core';
import {CarEntity, ICarOwnersService, OwnerEntity, SERVER_API_URL} from "../app-constanst";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarOwnersService implements ICarOwnersService{

  constructor(
    private httpClient: HttpClient,
  ) { }

  getOwners(): Observable<OwnerEntity[]> {
    return this.httpClient.get<OwnerEntity[]>(SERVER_API_URL + 'carOwners');
  }

  getOwnerById(aId: number): Observable<OwnerEntity>{
    return this.httpClient.get<OwnerEntity>(`${SERVER_API_URL + 'carOwners'}/${aId}`);
  }

  deleteOwner(aOwnerId: number): Observable<OwnerEntity[]> {
    return this.httpClient.delete<OwnerEntity[]>(`${SERVER_API_URL + 'carOwners'}/${aOwnerId}`);
  }

  createOwner(aLastName: string, aFirstName: string, aMiddleName: string, aCars: CarEntity[]): Observable<OwnerEntity> {
    const params = {
      firstName: aFirstName,
      middleName: aMiddleName,
      lastName: aLastName,
      cars: aCars
    }
    return this.httpClient.post<OwnerEntity>(`${SERVER_API_URL + 'carOwners'}`, params);
  }

  editOwner(aOwner: OwnerEntity): Observable<OwnerEntity> {
    return this.httpClient.put<OwnerEntity>(`${SERVER_API_URL + 'carOwners'}/${aOwner.id}`, aOwner)
  }

}
