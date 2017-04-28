import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './NewDocument.component.html',
  styleUrls: [
    './documents.component.css',
    './NewDocument.component.css'
  ]
})
export class NewDocumentComponent implements OnInit {
  create: boolean;
  document: Document;
  constructor(private router: Router) {
    this.document = {
      title: '',
      content: '',
      access: 'public'
    };
  }

  ngOnInit() {
    const url = this.router.url;
    console.log(url);
    this.create = (url === '/home/new');
  }
}

interface Document {
  title: string;
  content: string;
  access?: string;
}
