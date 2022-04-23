import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaimentPageRoutingModule } from './paiment-routing.module';

import { PaimentPage } from './paiment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaimentPageRoutingModule
  ],
  declarations: [PaimentPage]
})
export class PaimentPageModule {}
