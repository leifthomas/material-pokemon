import { Component, Input, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Type } from '../models/type.model';

@Component({
  selector: 'app-pokemon-filters',
  templateUrl: './pokemon-filters.component.html',
  styleUrls: ['./pokemon-filters.component.scss']
})
export class PokemonFiltersComponent {

  @Input()
  types: Array<Type>;

  form: FormGroup = this.formBuilder
    .group({ type: this.formBuilder.control([]) });

  constructor(private formBuilder: FormBuilder) { }

}
