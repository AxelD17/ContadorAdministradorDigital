import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url_base } from '../config/config';
import { Observable } from 'rxjs';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { equal } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public url = url_base;
  constructor(private http: HttpClient) { }

  subirarchivos(file: File): Observable<any> {
    let archivo = new FormData();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    archivo.append('myfile', file);
    return this.http.post(this.url + 'Modulo1Store', archivo);
  }

  importexcel(ruta ,file: File): Observable<any> {
    let archivo = new FormData();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    archivo.append('myfile', file);
    let plug = ""
    if (ruta===1){
      plug = 'ImportExcelCompra'
    } 
    if (ruta===2) {
      plug = 'ImportExcelVenta'
    }
    if (ruta===3) {
      plug = 'ImportExcelGasto'
    }
    if (ruta===4) {
      plug = 'ImportExcelActivo'
    }
    return this.http.post(this.url + plug, archivo);
  }
}
