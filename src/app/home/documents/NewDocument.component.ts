import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private docService: DocumentService,
              private snackbar: MdSnackBar) {
    this.loading = false;
    this.ifError = false;
    this.document = {
      title: '',
      content: '',
      access: 'public'
    };
    this.createDocument = this.createDocument.bind(this);
  }

  ngOnInit() {
    const url = this.router.url;
    console.log(url);
    this.create = (url === '/home/new');
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
}
