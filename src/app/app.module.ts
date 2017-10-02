import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskListHeaderComponent } from './components/task-list-header/task-list-header.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { TaskListFooterComponent } from './components/task-list-footer/task-list-footer.component';
import {TaskDataService} from './services/task-data.service';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TaskListHeaderComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskListFooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    // BrowserAnimationsModule,
    // MdButtonModule,
    // MdMenuModule,
    // MdCardModule,
    // MdToolbarModule,
    // MdIconModule
    NgbModule.forRoot()
  ],
  providers: [TaskDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
