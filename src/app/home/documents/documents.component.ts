  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { DocumentService } from './../../services/documents.service';
import { Document } from './document';
import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentComponent implements OnInit {
  loading: boolean;
  noDocument: boolean;
  documents: Array<Document>;

  constructor(
    private docService: DocumentService,
    private router: Router,
    private snackbar: MdSnackBar
  ) {
    this.loading = false;
    this.noDocument = false;
    this.documents = [];
    this.getDocument = this.getDocument.bind(this);
  }

  ngOnInit() {
    this.loading = true;
    this.getDocument();
  }

  newDocument(): void {
    this.router.navigate(['/home/new']);
  }

  viewDocument(id: number): void {
    this.router.navigate([`/home/view`, id]);
  }

  getDocument(): void {
    const userId = localStorage.getItem('id');
    this.docService.getDocuments(userId).toPromise().then((result) => {
      this.documents = result.data.map((item) => {
        item.isPublic = () => {
          return item.access === 'public';
        };
        item.isOwner = (userId) => {
          return parseInt(userId, 10) === parseInt(item.ownerId, 10);
        };
        item.documentId = item.id;
        return item;
      });
      this.noDocument = false;
      this.loading = false;
    }).catch((err) => {
      console.log(err.json());
      this.noDocument = true;
      this.loading = false;
    });
  }

  deleteDocument(id: number): void {
    this.docService.deleteDocument(id).toPromise().then((result) => {
      this.snackbar.open('Document Deleted', '', {
        duration: 3000
      });
      this.getDocument();
    }).catch((err) => {
      const error = err.json();
      this.snackbar.open(error.message, '', {
        duration: 3000
      });
    });
  }
}
