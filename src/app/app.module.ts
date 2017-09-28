import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskListHeaderComponent } from './task-list-header/task-list-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskListFooterComponent } from './task-list-footer/task-list-footer.component';
import {TaskDataService} from './task-data.service';
import { ApiService } from './api.service';
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal-basic';

@NgModule({
  declarations: [
    AppComponent,
    TaskListHeaderComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskListFooterComponent,
    NgbdModalBasic
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
    // MdIconModule,
    
    NgbModule.forRoot(),
  ],
  providers: [TaskDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
