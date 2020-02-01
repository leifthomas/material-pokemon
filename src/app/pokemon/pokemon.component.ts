import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  combineLatest,
  forkJoin,
  Observable
} from 'rxjs';
import {
  map,
  shareReplay,
  startWith,
  switchMap
} from 'rxjs/operators';

import { NamedApiResourceService } from '../common/services/named-api-resource.service';
import { Pokemon } from './models/pokemon.model';
import { PokemonSpeciesVariety } from './models/pokemon-species-variety.model';
import { PokemonType } from './models/pokemon-type.model';
import { Type } from './models/type.model';
import { PokemonFiltersComponent } from './pokemon-filters/pokemon-filters.component';
import { PokemonSpeciesService } from './services/pokemon-species.service';
import { TypeService } from './services/type.service';
import { PokemonSpecies } from './models/pokemon-species.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @ViewChild(PokemonFiltersComponent, { static: true })
  filtersComponent: PokemonFiltersComponent;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  pokemonSpeciesList: Observable<Array<PokemonSpecies>>;

  types: Observable<Array<Type>>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private namedApiResourceService: NamedApiResourceService,
    private pokemonSpeciesService: PokemonSpeciesService,
    private typeService: TypeService
  ) { }

  ngOnInit() {
    this.pokemonSpeciesList = combineLatest(
      this.pokemonSpeciesService
        .pokemonSpecies,
      this.filtersComponent
        .form
        .valueChanges
        .pipe(startWith(null))
    )
    .pipe(
      map((data: Array<any>) => ({ pokemonSpeciesList: data[0], filters: data[1]})),
      map((results: { pokemonSpeciesList: Array<PokemonSpecies>, filters: { type: Type }}) => {
        if(results.filters && results.filters.type) {
          return results.pokemonSpeciesList
            .filter((pokemonSpecies: PokemonSpecies) => pokemonSpecies.defaultPokemon
              .types
              .map((pokemonType: PokemonType) => pokemonType.type.name)
              .includes(results.filters
                .type
                .name));
          } else {
            return results.pokemonSpeciesList;
          }
      })
    );

    this.types = this.typeService
      .types
      .pipe(
        map((types: Array<Type>) => types.sort((a: Type, b: Type) => (a.name > b.name) ? 1 : -1))
      );
  }

}
