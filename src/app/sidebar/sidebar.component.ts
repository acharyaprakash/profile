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
      { Skill: "ASP.NET (Web Forms, MVC)", Rating: "95%" },
      { Skill: "JavaScript", Rating: "90%" },
      { Skill: "MS SQL", Rating: "90%" },
      { Skill: "Python", Rating: "70%" },
      { Skill: "Angular", Rating: "60%" }
    ];
  }

  ngOnInit() {
  }

}
