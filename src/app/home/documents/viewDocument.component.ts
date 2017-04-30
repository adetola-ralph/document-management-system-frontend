import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DocumentService } from './../../services/documents.service';
import { Document } from './document';

import 'rxjs/add/operator/toPromise';

@Component({
    templateUrl: './viewDocument.component.html',
    styleUrls: [
    './documents.component.css',
    './viewDocument.component.css'
  ]
})
export class ViewDocumentComponent implements OnInit {
  documentId: number;
  document: Document;
  userId: number;
  ifError: boolean;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private docService: DocumentService
  ) {
    this.userId = 0;
    this.ifError = false;
    this.errorMessage = '';
    this.document = {
      documentId: '',
      access: '',
      content: '',
      createdAt: '',
      updatedAt: '',
      ownerId: '',
      title: '',
      isPublic: () => { return false; },
      isOwner: (userId: string) => { return false; }
    };
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       console.log(params['id']);
       this.documentId = +params['id'];
       this.userId = parseInt(localStorage.getItem('id'), 10);
       this.docService.getDocument(this.documentId)
           .toPromise().then((result) => {
             console.log(result);
             this.document = {
               documentId: result.data.id,
               access: result.data.access,
               content: result.data.content,
               createdAt: result.data.createdAt,
               updatedAt: result.data.updatedAt,
               ownerId: result.data.ownerId,
               title: result.data.title,
               isPublic: () => { return true; },
               isOwner: (userId) => { return true; }
             };
             this.document.isPublic = function() {
               return this.document.access === 'public';
             }.bind(this);
             this.document.isOwner = function(userId) {
               return parseInt(userId, 10) === parseInt(this.document.ownerId, 10);
             }.bind(this);
           }).catch((err) => {
             const error = err.json();
             this.ifError = true;
             this.errorMessage = error.message;
           });
    });
  }
}
