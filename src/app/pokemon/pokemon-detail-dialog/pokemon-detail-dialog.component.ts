import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { PokemonSpecies } from '../models/pokemon-species.model';
import { PokemonSpeciesService } from '../services/pokemon-species.service';

export interface PokemonDetailDialogData {
  id: number;
}

@Component({
  selector: 'app-pokemon-detail-dialog',
  templateUrl: './pokemon-detail-dialog.component.html',
  styleUrls: ['./pokemon-detail-dialog.component.scss']
})
export class PokemonDetailDialogComponent implements OnInit {

  pokemon: Observable<PokemonSpecies>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PokemonDetailDialogData,
    public dialogRef: MatDialogRef<PokemonDetailDialogComponent>,
    private pokemonSpeciesService: PokemonSpeciesService
  ) {}

  ngOnInit() {
    this.pokemon = this.pokemonSpeciesService
      .pokemonSpecies
      .pipe(
        map((pokemonSpeciesList: Array<PokemonSpecies>) => {
          return pokemonSpeciesList.find((pokemon: PokemonSpecies) => pokemon.id === this.data.id);
        }),
        tap((pokemonSpecies: PokemonSpecies) => this.dialogRef
          .addPanelClass([`pokemon-detail-dialog-panel--${pokemonSpecies.color.name}`]))
        );
  }

}
