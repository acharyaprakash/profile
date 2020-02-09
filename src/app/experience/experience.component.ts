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
        Responsibilities: [
          { Title: "Web Application using ASP.NET MVC, EntityFramework, KnockoutJS, Angular" }
        ]
      },
      { 
        Title: "Software Developer", 
        Company: "Financial Software Solutions, LLC", 
        Address: "Houston, TX", 
        Date: "Feb 2016 - Jan 2019", 
        Responsibilities: [
          { Title: "Software Development using .NET technologies, JavaScript and jQuery" },
          { Title: "Third party API integration and migration of data from other clients to the system" },
          { Title: "Data Extraction from website and documents using regular expression" },
          { Title: "Financial reports using Crystal Reports and XSLT Transformation" },
          { Title: "Create stored procedures, user-defined functions, views and complex SQL queries" }
        ]
      },
      { 
        Title: "Research Assistant", 
        Company: "University of Houston - Clear Lake", 
        Date: "Aug 2015 - Dec 2015", 
        Address: "Houston, TX", 
        Responsibilities: [
          { Title: "Text Mining (Split the words from the corpus)" },
          { Title: "Automation using KNIME" }
        ]
      },
      { 
        Title: "Software Engineer", 
        Company: "Deerwalk", 
        Date: "Aug 2012 - July 2014", 
        Address: "Kathmandu, Nepal", 
        Responsibilities: [
          { Title: "Team member in application architecture and database design" },
          { Title: "Developed a custom Object Relation Mapping that was used throughout the product of client" },
          { Title: "Developed applications using .NET frameworks and MS-SQL server" },
          { Title: "Technical Documentation of software" },
          { Title: "Unit Test (NUnit), Integration Test" },
          { Title: "Mentored a student at Deerwalk Institute of Technology for final project" }
        ]
      },
      { 
        Title: "Intern", 
        Company: "Deerwalk", 
        Date: "May 2012 - July 2012", 
        Address: "Kathmandu, Nepal", 
        Responsibilities: [
          { Title: "Developed application using .NET web forms" },
          { Title: "Created store procedures in MS SQL" }
        ]
      },
      { 
        Title: "Founder Member", 
        Company: "Nepabyte", 
        Date: "June 2011 - July 2014", 
        Address: "Kathmandu, Nepal", 
        Responsibilities: [
          { Title: "Created content management system according to the need of clients using .NET related technologies" },
          { Title: "Number of clients supported: 5" }
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
