import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private postCustomer;
  ngOnInit() {
    this.postCustomer =
    {
      "name": "Zé",
      "company": "Zé",
      "phoneNumber": 123,
      "cpf": 123,
      "cep": 123,
      "email": "ze@gmail.com",
      "password": "1234"
    }
  }

  onCreateCustomer(postCustomer: { name: string, company: string, phoneNumber: string, cpf: number, cep: number, email: number, password: string }) {
    console.log(postCustomer)
    this.http.post('http://localhost:3000/api/v1/customers', this.postCustomer)
      .subscribe(responseData => {
        console.log(responseData);
      })

  }

}
