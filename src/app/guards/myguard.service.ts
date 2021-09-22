import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';
import { MydataService } from '../mydata.service'

@Injectable()

export class myGuard implements CanActivate {
    constructor(private ds: MydataService, private route: Router) {

    }
    canActivate(rc: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        let isuserLogin = this.ds.isAuthonticate()

        if(isuserLogin) {this
            return true;
        }
        else {
            this.route.navigate['/']
        }
    }

}
