import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pageContent = {
    header : {
      title : 'About Loc8r',
      strapline : ''
    },
    content : 'Loc8r was created to help people find places to sit down and get a bit of work done. \n\n Cupidatat aute tempor non veniam laborum irure ea pariatur ut aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat consectetur ad aliquip excepteur. Ipsum ex adipisicing sunt laborum sint ea veniam velit commodo. Dolore pariatur tempor laborum pariatur labore enim ullamco in deserunt quis nisi culpa aute voluptate. Ut adipisicing veniam est enim laborum Lorem sunt velit nulla enim sit et sit. \n\n Sunt voluptate do duis do non commodo. Occaecat enim cupidatat do laboris ullamco do enim dolore ipsum aliqua qui. Consequat enim Lorem occaecat ea laborum sunt.\n\n'
  };
}
