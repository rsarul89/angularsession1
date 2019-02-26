import { Observable } from "rxjs";
import { Domain } from "./domain";
import { HttpRequestOptions } from "./request.options";

export interface GenericService<T extends Domain> {
    /**
    * Method to fetch single record with specified type.
    */
    get(serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T>,
    /**
    * Method to fetch single record with specified type using it's identifier.
    */
    getById(id: number, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T>,
    /**
    * Method to fetch single record with specified type by passing entire object with specified type.
    */
    getByObject(data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T>,
    /**
    * Method to fetch record(s) with any type.
    */
    getAny(serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>,
    /**
    * Method to fetch record(s) with any type using it's identifier.
    */
    getAnyById(id: number, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>,
    /**
    * Method to fetch single record with any type by passing entire object with any type.
    */
    getAnyByObject(data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>,
    /**
    * Method to fetch list of records with specified type.
    */
    getAll(serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T[]>,
    /**
    * Method to fetch list of records with any type.
    */
    getAnyAll(serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any[]>,
    /**
    * Method to post a record with specified type.
    */
    post(data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T>,
    /**
    * Method to post a record with any type.
    */
    postAny(data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>,
    /**
    * Method to update a record with specified type using it's identifier.
    */
    put(id: number, data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T>,
    /**
    * Method to update a record with any type using it's identifier.
    */
    putAny(id: number, data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>,
    /**
    * Method to partial update a record with specified type.
    */
    patch(data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<T>,
    /**
    * Method to  partial update a record with any type.
    */
    patchAny(data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>,
    /**
    * Method to delete a record with any type.
    */
    delete(id: number, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>,
    /**
    * Method to delete a record with specified type by passing entire object with specified type.
    */
    deleteByObject(data: T, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>,
    /**
    * Method to delete a record with any type by passing entire object with any type.
    */
    deleteAnyByObject(data: any, serviceMethod: string, requestOptions?: HttpRequestOptions): Observable<any>
}