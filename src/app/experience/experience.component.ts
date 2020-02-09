import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences=[];
  
  constructor() { 
    this.experiences=[
      { 
        Title: "Software Developer", 
        Company: "Digital Infuzion", 
        Date: "Dec 2019", 
        Address:"Gaithersburg, MD", 
        Description: ""
      },
      { 
        Title: "Software Developer", 
        Company: "Financial Software Solutions, LLC", 
        Address: "Houston, TX", 
        Date: "Feb 2016 - Jan 2019", 
        Description: ""
      },
      { 
        Title: "Research Assistant", 
        Company: "University of Houston - Clear Lake", 
        Date: "Aug 2015 - Dec 2015", 
        Address: "Houston, TX", 
        Description: ""
      },
      { 
        Title: "Software Engineer", 
        Company: "Deerwalk", 
        Date: "Aug 2012 - July 2014", 
        Address: "Kathmandu, Nepal", 
        Description: ""
      },
      { 
        Title: "Intern", 
        Company: "Deerwalk", 
        Date: "May 2012 - July 2012", 
        Address: "Kathmandu, Nepal", 
        Description: ""
      },
      { 
        Title: "Founder Member", 
        Company: "Nepabyte", 
        Date: "June 2011 - July 2014", 
        Address: "Kathmandu, Nepal", 
        Description: ""
      }
    ];
  }

  ngOnInit() {
  }

}
