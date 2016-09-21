import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RESTClient, BaseUrl, GET } from "angular2-rest";

@Injectable()
@BaseUrl("https://api.github.com/")
export class ReposService extends RESTClient{
  apiUrl: string = "https://api.github.com/";

  constructor(private _http: Http){
    super(_http)
  }

  @GET("orgs/angular/repos")
  list(){
    return null;
  }
}
