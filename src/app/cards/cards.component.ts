import { Component } from '@angular/core';
import { Books } from '../models/books';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  book:Books[]=[];
  constructor(private service:BooksService){}
  ngOnInit(){
    this.service.onsubmit().subscribe(data=>this.book=data);

  }
}

