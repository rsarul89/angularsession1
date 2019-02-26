import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { Domain } from "./domain";
import { CONSTANTS } from "./app.constants";
import { HttpRequestOptions } from "./request.options";
import { GenericService } from "./service.interface";

@Injectable()
export class ApiService<T extends Domain> implements GenericService<T> {
    private httpOptions: HttpRequestOptions = {};
    private apiBaseUrl = '';
    constructor( @Inject(CONSTANTS.appBaseURLInjectorKey) private API_BASE_URL: string, private httpClient: HttpClient) {
        this.apiBaseUrl = API_BASE_URL;
    }
    public get(serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.get(`${this.apiBaseUrl}/${serviceMethod}`, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public getById(id: number, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.get(`${this.apiBaseUrl}/${serviceMethod}/${id}`, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public getByObject(data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.post(`${this.apiBaseUrl}/${serviceMethod}`, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public getAny(serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.get(`${this.apiBaseUrl}/${serviceMethod}`, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public getAnyById(id: number, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.get(`${this.apiBaseUrl}/${serviceMethod}/${id}`, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public getAnyByObject(data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.post(`${this.apiBaseUrl}/${serviceMethod}`, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public getAll(serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T[]> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.get(`${this.apiBaseUrl}/${serviceMethod}`, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public getAnyAll(serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any[]> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.get(`${this.apiBaseUrl}/${serviceMethod}`, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public post(data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.post(`${this.apiBaseUrl}/${serviceMethod}`, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public postAny(data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.post(`${this.apiBaseUrl}/${serviceMethod}`, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public put(id: number, data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.put(`${this.apiBaseUrl}/${serviceMethod}/${id}`, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public putAny(id: number, data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.put(`${this.apiBaseUrl}/${serviceMethod}/${id}`, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public patch(data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.patch(`${this.apiBaseUrl}/${serviceMethod}`, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public patchAny(data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.patch(`${this.apiBaseUrl}/${serviceMethod}`, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }
    public delete(id: number, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.delete(`${this.apiBaseUrl}/${serviceMethod}/${id}`, this.httpOptions).pipe(
            catchError(this.handleError));
    }
    public deleteByObject(data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.post(`${this.apiBaseUrl}/${serviceMethod}}`, data, this.httpOptions).pipe(
            catchError(this.handleError));
    }
    public deleteAnyByObject(data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any> {
        this.setHttpRequestOptions(requestOptions);
        return this.httpClient.post(`${this.apiBaseUrl}/${serviceMethod}}`, data, this.httpOptions).pipe(
            catchError(this.handleError));
    }
    private setHttpRequestOptions(requestOptions: HttpRequestOptions): void {
        if (requestOptions == undefined) {
            this.httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': CONSTANTS.httpHeadersValue.contentType, 'Accept': CONSTANTS.httpHeadersValue.accept }),
                responseType: 'json'
            };
        }
        else {
            requestOptions.headers = requestOptions.headers.append(CONSTANTS.httpHeadersKey.contentType, CONSTANTS.httpHeadersValue.contentType);
            requestOptions.headers = requestOptions.headers.append(CONSTANTS.httpHeadersKey.accept, CONSTANTS.httpHeadersValue.accept);
            this.httpOptions = requestOptions;
        }
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }

    private extractData(res: any) {
        let body = res;
        return body || {};
    }
}