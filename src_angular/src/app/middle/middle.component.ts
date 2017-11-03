import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this._httpService.getContacts()
      .subscribe(
        (response) => {          
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      )
  }

}
