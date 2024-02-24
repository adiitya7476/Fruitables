import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,LoginRegComponent,
    HomeComponent,FooterComponent,AboutComponent,ProductsComponent,
    CartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fruitables';

}
