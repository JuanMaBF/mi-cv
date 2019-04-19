import { Component } from "@angular/core";
import { GithubService } from '../../services/github.service';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {
    
    constructor(ghs: GithubService){
        ghs.getRepos();
    }

}