import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private url: string = "api/data/";
  private service: string;

  status: string = "Loading...";

  
  constructor(private route: ActivatedRoute, private http: Http) {}

  ngOnInit() {
    this.route.params.subscribe((queryParams: Params) => {
      this.service = queryParams["service"];

      this.fetchData();
    });
  }

  fetchData() {
    this.http.get(this.url + this.service).subscribe((response) => {
      let jsonBody = response.json();

      if(jsonBody["status"]){
        this.status = jsonBody["status"];
      }
      else
      {
        this.status = "Not found!";
      }
    });
  }
}