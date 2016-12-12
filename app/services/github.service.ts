import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '57331c631a0649ee1478';
    private client_secret = '98ed078d15f0f3a7e625cda4c08a96ef58a5c827';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'simmco';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(user:string) {
        this.username = user;
    }
}