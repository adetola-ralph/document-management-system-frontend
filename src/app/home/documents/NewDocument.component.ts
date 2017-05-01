import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { NewDocument } from './newDocument';
import { DocumentService } from './../../services/documents.service';
import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: './NewDocument.component.html',
  styleUrls: [
    './documents.component.css',
    './NewDocument.component.css'
  ]
})
export class NewDocumentComponent implements OnInit {
  create: boolean;
  document: NewDocument;
  loading: boolean;
  ifError: boolean;
  errorMessage: string;
  documentId: number;
  userId: number;

  constructor(
    private router: Router,
    private docService: DocumentService,
    private snackbar: MdSnackBar,
    private route: ActivatedRoute
  ) {
    this.loading = false;
    this.ifError = false;
    this.document = {
      title: '',
      content: '',
      access: 'public'
    };
    this.createDocument = this.createDocument.bind(this);
    this.documentId = 0;
  }

  ngOnInit() {
    this.userId = parseInt(localStorage.getItem('id'), 10);
    const url = this.router.url;
    console.log(url);
    this.create = (url === '/home/new');
    if (!this.create) {
      this.route.params.subscribe(params => {
        this.documentId = +params['id'];
        console.log(this.documentId);
        this.docService.getDocument(this.documentId).toPromise()
            .then((result) => {
              console.log(this.userId === parseInt(result.data.ownerId, 10));
              if (this.userId === parseInt(result.data.ownerId, 10)) {
                this.document.title = result.data.title;
                this.document.content = result.data.content;
                this.document.access = result.data.access;
              } else {
                this.ifError = true;
                this.errorMessage = 'You cannot edit this document';
              }
            }).catch((err) => {
              const error = err.json();
              this.ifError = true;
              this.errorMessage = error.message;
            });
      });
    }
  }

  createDocument(): void {
    this.loading = true;
    this.docService.createDocument(this.document).toPromise().then((result) => {
      this.loading = false;
      console.log(result);
      this.snackbar.open('Document Created', '', {
        duration: 3000
      });
      this.document = {
        title: '',
        content: '',
        access: 'public'
      };
    }).catch((err) => {
      this.loading = false;
      const error = err.json();
      this.errorMessage = error.message;
      this.ifError = true;
      setTimeout(() => {
        this.errorMessage = '';
        this.ifError = false;
      }, 5000);
    });
  }

  editDocument(): void {

  }
}
