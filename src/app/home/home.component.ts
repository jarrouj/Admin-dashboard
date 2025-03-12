import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Import IonicModule to access all Ionic components

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true, 
  imports: [IonicModule],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
