import {Component, OnInit} from '@angular/core';
import {PageService} from "../../services/page-service.service";
import {take} from "rxjs";
import {CarOwnersService} from "../../services/car-owners-service.service";
import {carNumberPattern, icons, OwnerEntity} from "../../app-constanst";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-owner-settings',
  templateUrl: './owner-settings.component.html',
  styleUrls: ['./owner-settings.component.scss']
})
export class OwnerSettingsComponent implements OnInit {
  ownerInfo: OwnerEntity;
  icons = icons;
  changeState = false;
  userSettingsForm: FormGroup;
  carSettingsForm: FormGroup;
  isCarDuplicates: boolean;
  private createNewUser = false;

  constructor(
    private readonly pageService: PageService,
    private readonly carOwnersService: CarOwnersService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,

  ) { }

  ngOnInit(): void {
    this.userSettingsForm = new FormGroup({
      userFirstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      userMiddleName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      userLastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
    })
    this.carSettingsForm = new FormGroup({
      carNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(carNumberPattern)
      ]),
      carModel: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      modelName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.min(1990),
        Validators.max(new Date().getFullYear())
      ]),
    })
    this.getQueryParams();
    this.loadOwnersArr();
  }
  deleteCar(carNumber: string): void {
    for (let i = 0; i < this.ownerInfo.cars.length; ++i){
      if(this.ownerInfo.cars[i].carNumber === carNumber){
        this.ownerInfo.cars.splice(i, 1);
        i--;
      }
    }
    this.pageService.removeCar(carNumber);
  }

  addNewCar(event: Event): void {
    event.preventDefault();
    if(this.findCarsDuplicates(this.carSettingsForm.get('carNumber')?.value)){
      this.isCarDuplicates = true;
      return;
    } else {
      this.isCarDuplicates = false;
      this.ownerInfo.cars.push({
          carNumber: this.carSettingsForm.get('carNumber')?.value,
          carModel: this.carSettingsForm.get('carModel')?.value,
          modelName: this.carSettingsForm.get('modelName')?.value,
          year: this.carSettingsForm.get('year')?.value,
        });
      this.pageService.addCarToUser(this.ownerInfo.id,{
        carNumber: this.carSettingsForm.get('carNumber')?.value,
        carModel: this.carSettingsForm.get('carModel')?.value,
        modelName: this.carSettingsForm.get('modelName')?.value,
        year: this.carSettingsForm.get('year')?.value,
      });
    }
  }

  saveUserInfo(event: Event): void {
    event.preventDefault();
    this.ownerInfo.firstName = this.userSettingsForm.get('userFirstName')?.value;
    this.ownerInfo.middleName = this.userSettingsForm.get('userMiddleName')?.value;
    this.ownerInfo.lastName = this.userSettingsForm.get('userLastName')?.value;
    if(!this.createNewUser){
      this.carOwnersService.editOwner(this.ownerInfo)
        .pipe(take(1))
        .subscribe(()=>{
          console.warn('User was updated');
          this.returnToHomePage();
        });
    } else {
      this.carOwnersService.createOwner(
        this.ownerInfo.lastName,
        this.ownerInfo.firstName,
        this.ownerInfo.middleName,
        this.ownerInfo.cars
      ) .pipe(take(1))
        .subscribe(()=>{
          console.warn('User was created');
          this.returnToHomePage();
        });
    }
  }

  returnToHomePage(): void {
    this.router.navigate(['']);
  }

  private loadUserInfo(id: number): void {
    this.carOwnersService.getOwnerById(id).subscribe((owner)=>{
      this.ownerInfo = owner;
      this.userSettingsForm.controls['userFirstName'].setValue(owner.firstName);
      this.userSettingsForm.controls['userMiddleName'].setValue(owner.middleName);
      this.userSettingsForm.controls['userLastName'].setValue(owner.lastName);
    })
  }

  private findCarsDuplicates(carNumber: string): boolean {
    return this.pageService.findCarsDuplicates(carNumber);
  }

  private getQueryParams(): void {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((params)=>{
      this.changeState = params['changeState'] === 'true';
      if(!this.changeState){
        this.userSettingsForm.get('userFirstName')?.disable();
        this.userSettingsForm.get('userMiddleName')?.disable();
        this.userSettingsForm.get('userLastName')?.disable();
        this.carSettingsForm.get('carNumber')?.disable();
        this.carSettingsForm.get('carModel')?.disable();
        this.carSettingsForm.get('modelName')?.disable();
        this.carSettingsForm.get('year')?.disable();
      }
      if(params['ownerId']){
        this.loadUserInfo(params['ownerId']);
        this.createNewUser = false;
      } else {
        this.ownerInfo = {
          id: Math.floor(Math.random()*100000),
          firstName: '',
          middleName: '',
          lastName: '',
          cars: []
        }
        this.createNewUser = true;
      }
    })
  }

  private loadOwnersArr(): void {
    this.pageService.loadOwnersArr();
  }
}
