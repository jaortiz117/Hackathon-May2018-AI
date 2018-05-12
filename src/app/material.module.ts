import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatDividerModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
