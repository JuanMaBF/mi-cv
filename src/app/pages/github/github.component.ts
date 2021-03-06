import { Component } from "@angular/core";
import { GithubService } from '../../services/github.service';

@Component({
    selector: 'github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.scss']
})
export class GithubComponent {
    
    public repos: any[];
    public spinnerHidden = false;

    constructor(private ghService: GithubService) {
        this.ghService
            .getRepos()
            .subscribe(rta => {
                this.repos = rta; 
                this.spinnerHidden = true;
            });
    }

}