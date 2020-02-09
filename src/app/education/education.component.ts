import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations=[];
  
  constructor() { 
    this.educations=[
      { Title: "Graduate Certificate Data science", University: "University of Maryland - Baltimore County", Date: "Dec 2019", GPA: "3.85"},
      { Title: "MS Software Engineering", University: "University of Houston - Clear Lake", Date: "Dec 2015", GPA: "3.65"},
      { Title: "BE Computer Engineering", University: "Kathmandu University, Nepal", Date: "Aug 2012", GPA: "3.65"}
    ];
  }

  ngOnInit() {
  }

}
