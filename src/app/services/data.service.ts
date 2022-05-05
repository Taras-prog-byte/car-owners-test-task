import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    return {
      carOwners: [
        {
          id: 1,
          firstName: 'firstName1',
          middleName: 'middleName1',
          lastName: 'lastName1',
          cars: [
            {
              carNumber: 'AX1234BC',
              carModel: 'Tesla',
              modelName: 'ModelS',
              year: '2019',
            },
            {
              carNumber: 'AX2234BC',
              carModel: 'Tesla',
              modelName: 'ModelS',
              year: '2019',
            },
            {
              carNumber: 'AX3234BC',
              carModel: 'Tesla',
              modelName: 'ModelS',
              year: '2019',
            },
            {
              carNumber: 'AX4234BC',
              carModel: 'Tesla',
              modelName: 'ModelS',
              year: '2019',
            },
            {
              carNumber: 'AX5234BC',
              carModel: 'Tesla',
              modelName: 'ModelS',
              year: '2019',
            },
          ],
        },
        {
          id: 2,
          firstName: 'firstName2',
          middleName: 'middleName2',
          lastName: 'lastName2',
          cars: [],
        },
        {
          id: 3,
          firstName: 'firstName3',
          middleName: 'middleName3',
          lastName: 'lastName3',
          cars: [],
        },
        {
          id: 4,
          firstName: 'firstName4',
          middleName: 'middleName4',
          lastName: 'lastName4',
          cars: [],
        },
        {
          id: 5,
          firstName: 'firstName5',
          middleName: 'middleName5',
          lastName: 'lastName5',
          cars: [],
        },
      ]
    };
  }
}
