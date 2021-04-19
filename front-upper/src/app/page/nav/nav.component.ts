import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private navItems = [
    { "id": "home", "title": "Home", "status": true },
    { "id": "servicos", "title": "Serviços", "status": false },
    { "id": "nos", "title": "Nós", "status": false },
    { "id": "contato", "title": "Contato", "status": false },
  ]
  constructor() { }

  ngOnInit() {
  }
  getStatus(item) {
    return item.value.status;
  }
  changeStatus(item) {
    for (let key in this.navItems) {
      if (item.value.id == this.navItems[key].id) {
        this.navItems[key].status = true;
      } else {
        this.navItems[key].status = false
      }
    }
  }
}
