import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DocumentService } from './../../services/documents.service';

@Component({
    templateUrl: './viewDocument.component.html',
    styleUrls: [
    './documents.component.css'
  ]
})
export class ViewDocumentComponent implements OnInit {
  documentId: number;
  constructor(
    private route: ActivatedRoute,
    private docService: DocumentService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       console.log(params['id']);
       this.documentId = +params['id'];
    });
  }
}
