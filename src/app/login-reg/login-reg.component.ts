import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-reg.component.html',
  styleUrl: './login-reg.component.css'
})
export class LoginRegComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
  }
  adityaURl="./assets/img/aditya.jpeg";
  vishveshURL="./assets/img/vishvesh1.jpg";
  satyamURL="./assets/img/satyam.jpg";
  krushnatURL="./assets/img/krushnat.jpg";

}
