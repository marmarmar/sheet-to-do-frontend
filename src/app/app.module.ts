import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksComponent,
         TaskListHeaderComponent,
         TaskListComponent,
         TaskListItemComponent,
         TaskListFooterComponent} from './components/tasks';
import {TaskDataService} from './services/task-data.service';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';
import { AppBootstrapModule } from './app-bootstrap.module';
import { TaskCategoryListComponent } from './components/task-category-list/task-category-list.component';
import { TaskCategoryComponent } from './components/task-category/task-category.component';
import {TaskCategoryService} from './services/task-category.service';
import { TaskCategoryFooterComponent } from './components/task-category-footer/task-category-footer.component';
import {CurrentTaskCategoryService} from './services/current-task-category.service';
import { OrderTasksByDatePipe } from './pipes/order-tasks-by-date.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksTitleFilterPipe } from './pipes/tasks-title-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TaskListHeaderComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskListFooterComponent,
    TaskCategoryListComponent,
    TaskCategoryComponent,
    TasksComponent,
    TaskCategoryFooterComponent,
    OrderTasksByDatePipe,
    NavbarComponent,
    TasksTitleFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppBootstrapModule
  ],
  providers: [TaskDataService, ApiService, TaskCategoryService, CurrentTaskCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
