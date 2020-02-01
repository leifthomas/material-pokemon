import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { FromResourceNamePipe } from './pipes/from-resource-name.pipe';

@NgModule({
  declarations: [FromResourceNamePipe],
  exports: [FromResourceNamePipe],
  imports: [
    AngularCommonModule
  ]
})
export class CommonModule { }
