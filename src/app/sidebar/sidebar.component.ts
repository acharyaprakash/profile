import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  skills=[];
  constructor() { 
    this.skills=[
      { Skill: "ASP.NET", Rating: 9 },
      { Skill: "MS SQL", Rating: 9 },
      { Skill: "Python", Rating: 9 },
      { Skill: "Angular", Rating: 9 }
    ];
  }

  ngOnInit() {
  }

}
