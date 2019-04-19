import { Component } from "@angular/core";
import { GithubService } from '../../services/github.service';

@Component({
    selector: 'github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss']
})
export class GithubComponent {
    
    constructor(private ghService: GithubService) {
        
    }

}