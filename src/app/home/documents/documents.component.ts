  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private docService: DocumentService, private router: Router) {
    this.loading = false;
    this.noDocument = false;
    this.documents = [];
  }

  ngOnInit() {
    const userId = localStorage.getItem('id');
    this.loading = true;
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

  newDocument(): void {
    this.router.navigate(['/home/new']);
  }

  viewDocument(id: number): void {
    this.router.navigate([`/home/view`, id]);
  }
}
