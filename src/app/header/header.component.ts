import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar , RouterModule  , CommonModule],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
