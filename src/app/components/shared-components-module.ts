import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DatetimeComponent } from './datetime/datetime.component';
import { BrMaskerModule } from 'br-mask';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
@NgModule({
  declarations: [
    DatetimeComponent,
    DateComponent,
    TimeComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    BrMaskerModule
  ],
  exports: [
    DatetimeComponent,
    DateComponent,
    TimeComponent
    
  ]
})
export class SharedComponentsModule { }
