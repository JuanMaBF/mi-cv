import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import  'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    private username = 'JuanMaBF';
    
    constructor(private httpService: HttpClient) {
    }

    public getRepos(): Observable<any> {
        return this.httpService
            .get('https://api.github.com/users/JuanMaBF/repos');
    }

}