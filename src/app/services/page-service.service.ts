import { Injectable } from '@angular/core';
import {CarEntity, CarStorage, OwnerEntity} from "../app-constanst";
import {take} from "rxjs";
import {CarOwnersService} from "./car-owners-service.service";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private ownersWithCars: CarStorage[];

  constructor(
    private readonly carOwnersService: CarOwnersService
  ) { }

  saveUserWithCars(data: OwnerEntity[]): void {
    this.ownersWithCars = data.map((owner)=>{
      return {userId: owner.id, carNumbers: owner.cars.map((data)=>{return data.carNumber})}
    })
  }
  loadOwnersArr(): void {
    this.carOwnersService.getOwners()
      .pipe(take(1))
      .subscribe((data)=>{
        this.saveUserWithCars(data);
      })
  }
  removeCar(carNumber: string): void {
    if(!this.ownersWithCars){
      this.loadOwnersArr();
    }
    this.ownersWithCars.forEach((item)=> {
      for (let i = 0; i < item.carNumbers.length; ++i) {
        if (item.carNumbers[i] === carNumber){
          item.carNumbers.splice(i, 1);
          i--;
        }
      }
    })
  }
  findCarsDuplicates(carNumber: string): boolean {
    let duplicateState = false;
    this.ownersWithCars.forEach((item)=> {
      for (let i = 0; i < item.carNumbers.length; ++i){
        if (item.carNumbers[i] === carNumber){
          duplicateState = true;
        }
      }
    })
    return duplicateState
  }
  addCarToUser(userId: number, aCar: CarEntity): void {
    this.ownersWithCars.forEach((user)=>{
      if (user.userId === userId) {
        user.carNumbers.push(aCar.carNumber)
      }
    })
  }
}
