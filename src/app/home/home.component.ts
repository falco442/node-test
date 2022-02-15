import {Component, OnInit} from '@angular/core';
import {faAddressBook, faBriefcase, faBuilding} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: HomeLink[] = [
    {text: 'Area candidato', route: '/candidate', icon: faAddressBook},
    {text: 'Area azienda', route: '/company', icon: faBuilding},
    {text: 'Area backoffice', route: '/back-office', icon: faBriefcase},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

class HomeLink {
  icon?: any;
  text?: string;
  route?: string;
}
