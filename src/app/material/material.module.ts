import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../data-table/data-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

const MaterialComponents=[MatPaginatorModule]

@NgModule({
  imports: [
    MaterialComponents,
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
