import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PokemonDetailDialogComponent } from '../pokemon-detail-dialog/pokemon-detail-dialog.component';

@Component({
  template: ''
})
export class PokemonDetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.dialog
      .open(
        PokemonDetailDialogComponent,
        { 
          autoFocus: false,
          data: {
            id: Number(this.route.snapshot.params.id)
          },
          width: '300px'
        })
      .afterClosed()
      .subscribe(() => {
        this.router
          .navigate(['../'], { relativeTo: this.route });
      });
  }

}
