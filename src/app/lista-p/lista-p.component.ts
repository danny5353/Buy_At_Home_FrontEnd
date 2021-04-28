import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-p',
  templateUrl: './lista-p.component.html',
  styleUrls: ['./lista-p.component.css']
})
  export class ListaPComponent implements OnInit {

    product: any[] = [];
    category: any[] = [];
    constructor(private http: HttpClient) {
      this.http.get('http://localhost:8080/products')
      .subscribe((data: any) => {
        this.product = data;
        console.log(this.product);
        }
      )
  
      this.http.get('http://localhost:8080/products/category')
        .subscribe((data: any) => {
          
        this.category = data;
        console.log(this.category);
        }
      )
  
     }
  ngOnInit(): void {
  }

}
