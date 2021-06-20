import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  jobCategories=[
    {
      id:1,
      title:'IT'
    },
    {
      id:2,
      title:'Marketing'
    },
    {
      id:1,
      title:'Animation'
    },
    {
      id:1,
      title:'Banking'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
