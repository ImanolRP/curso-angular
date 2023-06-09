import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzMainPageComponent } from './pages/dbz-main-page/dbz-main-page.component';

import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { DbzAddCharacterComponent } from './components/dbz-add-character/dbz-add-character.component';

@NgModule({
  declarations: [
    DbzMainPageComponent,
    DbzListComponent,
    DbzAddCharacterComponent,
  ],
  exports: [
    DbzMainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
