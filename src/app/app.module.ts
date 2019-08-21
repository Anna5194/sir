import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from '../card-component/card-component.component';
import { AllBrandsComponent } from '../all-brands/all-brands.component';
import { BonfestoComponent } from '../bonfesto/bonfesto.component';
import { CookingComponent } from '../cooking/cooking.component';
import { VillmonteComponent } from '../villmonte/villmonte.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'prise', component: AllBrandsComponent},
  {path: 'bonfesto', component: BonfestoComponent},
  {path: 'cooking', component: CookingComponent},
  {path: 'villmonte', component: VillmonteComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    AllBrandsComponent,
    BonfestoComponent,
    CookingComponent,
    VillmonteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
