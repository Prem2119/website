import { Component } from '@angular/core';
import Swiper from 'swiper';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuVariable: boolean = false;
  menu_icon_varable:boolean =false;

  toggleNav() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_varable = !this.menu_icon_varable;
  }
  
  
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 5000, // 5 seconds between slides
        disableOnInteraction: false // Continue autoplay even when user interacts with swiper
      },
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }

}
