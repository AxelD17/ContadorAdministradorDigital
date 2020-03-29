import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Clases/User';
import { FileService } from './services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'AdministradorDigital';
  user: User;
  public myfile: File;

  constructor(
    private http: HttpClient,
    private fileservice: FileService,
  ) { }

  ngOnInit() {
    /* this.http.get<User>('http://localhost:8000/auth').subscribe(data => {
      console.log(data);
      this.user = data;
    }); */
    // this.http.get('http://localhost:8000/auth').subscribe(data => {
    //   console.log(data);
      // this.user = data;
    //});
  }

  subirarchivos(event) {
    // this.myfile = event.target.files[0];
    const archivo = event.target.files[0];
    console.log('myfile :', archivo);
    this.fileservice.subirarchivos( archivo).toPromise()
    .then((respuesta: any) => {
      console.log('respuesta : ', respuesta);
    }).catch( error => {
      console.log('ERROR : ', error);
    });
  }

  importexcel(ruta, event) {
    // this.myfile = event.target.files[0];
    const archivo = event.target.files[0];
    console.log('myfile :', archivo);
    this.fileservice.importexcel(ruta, archivo).toPromise()
    .then((respuesta: any) => {
      console.log('respuesta : ', respuesta);
    }).catch( error => {
      console.log('ERROR : ', error);
    });
  }

}
