import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatInputModule, MatSlideToggleModule,MatSelectModule, MatDialogModule,MatFormFieldModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { BookListComponent, DialogResultExampleDialog } from './components/book-list/book-list.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

import { LoginService } from './services/login.service';
import { DataService } from './services/data.service';
import { AddBookService } from './services/add-book.service';
import { UploadImagesService } from './services/upload-images.service';
import { GetBookListService } from './services/get-book-list.service';
import { GetBookService } from './services/get-book.service';
import { EditBookService } from './services/edit-book.service';
import { RemoveBookService } from './services/remove-book.service';


@NgModule({
  declarations: [ //components
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
    DialogResultExampleDialog
  ],
  entryComponents: [DialogResultExampleDialog],
  imports: [ //3rd party
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpModule,
    routing,
    RouterModule
  ],
  providers: [ //services
    LoginService,
    DataService,
    AddBookService,
    UploadImagesService,
    GetBookListService,
    GetBookService,
    EditBookService,
    RemoveBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
