import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {OwnerSettingsComponent} from "./pages/owner-settings/owner-settings.component";
import {OwnerTableComponent} from "./pages/owner-table/owner-table.component";
const routes: Routes = [
  {
    path: 'home',
    component: OwnerTableComponent,
  },
  {
    path: 'settings',
    component: OwnerSettingsComponent,
  },
  {path: '**', redirectTo: 'home'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LazyLoadingModule { }
