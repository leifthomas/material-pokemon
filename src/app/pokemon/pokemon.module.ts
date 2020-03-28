import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { CommonModule as PokemonCommonModule } from '../common/common.module';
import { NamedApiResourceService } from '../common/services/named-api-resource.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonComponent } from './pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonDetailDialogComponent } from './pokemon-detail-dialog/pokemon-detail-dialog.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonFiltersComponent } from './pokemon-filters/pokemon-filters.component';
import { PokemonSpeciesService } from './services/pokemon-species.service';
import { TypeService } from './services/type.service';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonComponent,
    PokemonDetailComponent,
    PokemonDetailDialogComponent,
    PokemonFiltersComponent
  ],
  entryComponents: [PokemonDetailDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    PokemonCommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [
    NamedApiResourceService,
    PokemonSpeciesService,
    TypeService
  ]
})
export class PokemonModule { }
