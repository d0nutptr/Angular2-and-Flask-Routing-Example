import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() service = "N/A";

  constructor(private router: Router) {}

  ngOnInit() { } 

  navigate() {
    this.router.navigate(['/detail', this.service]);
  }
}
