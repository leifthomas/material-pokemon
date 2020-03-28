import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { FromResourceNamePipe } from './pipes/from-resource-name.pipe';
import { MapTextPipe } from './pipes/map-text.pipe';

@NgModule({
  declarations: [FromResourceNamePipe, MapTextPipe],
  exports: [FromResourceNamePipe, MapTextPipe],
  imports: [
    AngularCommonModule
  ]
})
export class CommonModule { }
