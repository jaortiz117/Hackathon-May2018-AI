import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatIconModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule
  ],
})
export class MaterialModule { }
