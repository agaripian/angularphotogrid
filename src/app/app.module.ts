import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {DragulaModule} from 'ng2-dragula/ng2-dragula';
import {SortablejsModule} from 'angular-sortablejs';
import { AppComponent } from './app.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { PhotoComponent } from './photo/photo.component';
import { GridContainerSortableComponent } from './grid-container-sortable/grid-container-sortable.component';

@NgModule({
  declarations: [
    AppComponent,
    GridContainerComponent,
    PhotoComponent,
    GridContainerSortableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    SortablejsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
