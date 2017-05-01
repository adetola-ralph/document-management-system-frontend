import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NewDocument } from './../home/documents/newDocument';

@Injectable()
/**
 * document service class that abstracts actions taken on the documents
 * @param  {Http}   privatehttp for making http requests
 * @return {null}
 */
export class DocumentService {
  token: string;
  constructor(private http: Http) {
    this.token = localStorage.getItem('token');
    this.getDocuments = this.getDocuments.bind(this);
  }

  /**
   * get all user owned document
   * @return {Observable<any>} Observable containing the response object
   */
  getDocuments(userId: any): Observable<any> {
    this.token = localStorage.getItem('token');
    const link = `http://localhost:8080/api/users/${userId}/documents/`;
    const headers = new Headers();
    headers.append('x-access-token', this.token);
    return this.http.get(link, { headers }).map(response => response.json());
  }
/**
 * get document with the specified document id
 * @param  {number}          docId id of document to be retrieved
 * @return {Observable<any>}       Observable containing the response object
 */
  getDocument(docId: number): Observable<any> {
    this.token = localStorage.getItem('token');
    const link = `http://localhost:8080/api/documents/${docId}`;
    const headers = new Headers();
    headers.append('x-access-token', this.token);
    return this.http.get(link, { headers }).map(response => response.json());
  }

  deleteDocument(docId: number): Observable<Object> {
    this.token = localStorage.getItem('token');
    const link = `http://localhost:8080/api/documents/${docId}`;
    const headers = new Headers();
    headers.append('x-access-token', this.token);
    return this.http.delete(link, { headers }).map(response => response.json());
  }

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

  createDocument(newDoc: NewDocument): Observable<any> {
    this.token = localStorage.getItem('token');
    const link = `http://localhost:8080/api/documents/`;
    const headers = new Headers();
    headers.append('x-access-token', this.token);
    return this.http.post(link, newDoc, { headers }).map(response => response.json());
  }
}
