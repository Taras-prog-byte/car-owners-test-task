import { Component, OnInit } from '@angular/core';
import { icons, OwnerEntity, STATES} from "../../app-constanst";
import {CarOwnersService} from "../../services/car-owners-service.service";
import {take} from "rxjs";
import {Router} from "@angular/router"
import {PageService} from "../../services/page-service.service";

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.scss']
})
export class OwnerTableComponent implements OnInit {
  userArr: OwnerEntity[];
  selectedId: number;
  icons = icons;


  constructor(
    private readonly carOwnersService: CarOwnersService,
    private readonly router: Router,
    private readonly pageService: PageService,
  ) { }

  ngOnInit(): void {
    this.carOwnersService.getOwners()
      .pipe(take(1))
      .subscribe((data)=>{
        this.userArr = data;
        this.pageService.saveUserWithCars(data);
      })
    this.loadOwnersArr();
  }

  choseOwner(id:number): void {
    this.selectedId = id;
  }
  createNewOwner(): void {
    this.router.navigate(['settings'], { queryParams: {changeState: this.setChangeState(STATES.createNew)}});
  }
  watchDetails(): void {
    this.router.navigate(['settings'], { queryParams: {ownerId: this.selectedId, changeState: this.setChangeState(STATES.open)}});
  }
  changeParams(): void {
    this.router.navigate(['settings'], { queryParams: {ownerId: this.selectedId, changeState: this.setChangeState(STATES.change)}});
  }
  deleteItem(): void {
    for (let i = 0; i < this.userArr.length; ++i){
      if(this.selectedId === this.userArr[i].id){
        this.userArr.splice(i, 1);
        i--;
      }
    }
    this.carOwnersService.deleteOwner(this.selectedId).subscribe(()=> {
      this.loadOwnersArr();
    })
  }

  private loadOwnersArr(): void {
    this.pageService.loadOwnersArr();
  }
  private setChangeState(state: string): boolean {
    return state === STATES.change || state === STATES.createNew;
  }
}
