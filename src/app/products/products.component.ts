import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  fruits:any[]=[];
  vegetables:any[]=[];

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/fruits.json').subscribe((Fruitdata:any)=>{
      this.fruits=Fruitdata;
    });
    this.http.get('assets/json/vegetables.json').subscribe((Vegetabledata:any)=> {
      this.vegetables= Vegetabledata;
    })
  }
}
