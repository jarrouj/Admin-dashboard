import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
