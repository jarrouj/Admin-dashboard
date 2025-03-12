import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar , IonButton],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
