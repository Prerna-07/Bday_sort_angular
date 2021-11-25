import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

import { Ng2OrderModule } from 'ng2-order-pipe';


@Component({
  selector: 'app-btable',
  templateUrl: './btable.component.html',
  styleUrls: ['./btable.component.css']
})
export class BtableComponent implements OnInit {

  bday : any;
  

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {

    let response = this.http.get("http://localhost:8080/get");
    response.subscribe((data)=> this.bday = data);
  }
  
   key: string = 'bday.id';
   reverse:boolean = false;
  sort(key :string)
  {
     this.key = key;
     this.reverse = !this.reverse;
  }
 


}




