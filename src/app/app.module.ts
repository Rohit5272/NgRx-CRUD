import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './Material/app.module';
import { AddassociateComponent } from './component/addassociate/addassociate.component';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';
import { StoreModule } from '@ngrx/store';
import { AssociateReducer } from './Store/Associate/Associate.Reducer';
import { EffectsModule } from '@ngrx/effects';
import { AssociateEffects } from './Store/Associate/Associate.Effects';

@NgModule({
  declarations: [
    AppComponent,
    AddassociateComponent,
    AssociatelistingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({associate:AssociateReducer}),
    EffectsModule.forRoot([AssociateEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
