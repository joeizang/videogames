import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    DeleteComponent,
    EditComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class VideogamesModule {}
