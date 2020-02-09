import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects=[];
  constructor() { 
    this.projects = [
      { 
        title: "Auto Insurance Fraud Detection", 
        description: "Detect insurance fraud from the data. The data was cleaned using pandas. The incoming data was accessed using spark streaming and passed to decision tree model to detect fraudulent claims. The data was then stored in MongoDB." 
      },
      {
        title: "Twitter Data Analysis",
        description: "Analyzing Twitter feed using spark streaming to find trends and hashtags."
      },
      {
        title: "Data Visualization: Traffic Incident in City of Austin",
        description: " Used the traffic incident data from City of Austin to create a data visualization for various traffic incidents using Tableau. The data was cleaned in python and then fed to Tableau."
      },
      {
        title: "Data visualization: Bankruptcy Cases filed and assets trends",
        description: "Created visualization to see from which state a greater number of cases are being filed. Finding the trends in assets which helped in developing a Research Website tool. Based on the data visualization the tools for Zillow, Nada were developed using selenium."
      },
      {
        title: "Virtual Tour of University of Houston - Clear Lake",
        description: "This project depicts virtual environment of the University of Houston-Clear Lake using Unity 3D."
      }
    ];
  }

  ngOnInit() {
  }

}
