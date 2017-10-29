import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { AddBookService } from '../../services/add-book.service';
import { UploadImagesService } from '../../services/upload-images.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  private newBook: Book = new Book();
  private bookAdded: boolean;
  constructor(private addBookService: AddBookService,
    private uploadImagesService: UploadImagesService
  ) { }

  onSubmit(){
    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        this.uploadImagesService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);// upload a book id from database
        this.bookAdded = true;
        this.newBook = new Book();
        this.bookAdded = false;
        this.newBook.active = true;
        this.newBook.category = "Management";
        this.newBook.language = "English";
        this.newBook.format = "paperback";

      },
      error => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.bookAdded = false;
    this.newBook.active = true;
    this.newBook.category = "Management";
    this.newBook.language = "English";
    this.newBook.format = "paperback"
  }

}
