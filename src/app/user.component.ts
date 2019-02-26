import { Component, OnInit, Inject } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { GenericService } from "./shared/service.interface";
import { CONSTANTS } from "./shared/app.constants";
import { HttpRequestOptions } from "./shared/request.options";
import { User } from "./user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = null;
  requestOpt: HttpRequestOptions = {};
  constructor( @Inject(CONSTANTS.appGenericServiceInjectorKey) private service: GenericService<User>) {
    this.requestOpt = {
      headers: new HttpHeaders(),
      params: new HttpParams()
    }
  }
  ngOnInit() {
    this.requestOpt.headers = this.requestOpt.headers.append('test3', 'test3');
    this.service.getAll('api/user/getAll', this.requestOpt).subscribe(data => {
      this.users = data;
    });
  }
  Post(user: User) {
    this.service.post(user, 'api/user/post').subscribe(data => {
      console.log('Posted user');
      console.log(data);
    });
  }
}
