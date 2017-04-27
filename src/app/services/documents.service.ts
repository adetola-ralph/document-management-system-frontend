import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
/**
 * document service class that abstracts actions taken on the documents
 * @param  {Http}   privatehttp for making http requests
 * @return {null}
 */
export class DocumentService {
  userId: string;
  token: string;
  constructor(private http: Http) {
    this.userId = localStorage.getItem('id');
    this.token = localStorage.getItem('token');
    this.getDocuments = this.getDocuments.bind(this);
  }

  /**
   * get all user owned document
   * @return {Observable<Object>} Observable containing the response object
   */
  getDocuments(): Observable<any> {
    const link = `http://localhost:8080/api/users/${this.userId}/documents/`;
    const headers = new Headers();
    headers.append('x-access-token', this.token);
    return this.http.get(link, { headers }).map(response => response.json());
  }

  // getDocument(docId: number): Observable<Object> {
  //
  // }
  //
  // deleteDocument(docId: number): Observable<Object> {
  //
  // }

  /**
   * get all documents accessible to the user, this includes
   * public documents of other users
   * @return {Observable<Object>} Observable containing the response object
   */
  // getAllDocuments(): Observable<Object> {
  //
  // }

  // editDocument(): Observable<Object> {
  //
  // }
}
