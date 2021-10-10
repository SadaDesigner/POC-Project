import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';
import { MydataService } from '../mydata.service'
import { AuthserviceService } from '../authonticate/authservice.service';
import { map, tap } from 'rxjs/operators';

@Injectable()

export class myGuard implements CanActivate {
    constructor(private ds: MydataService, private route: Router, private authservice:AuthserviceService) {

    }
    canActivate(rc: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        // let isuserLogin = this.ds.isAuthonticate()

        // if(isuserLogin) {this
        //     return true;
        // }
        // else {
        //     this.route.navigate['/']
        // }

        return this.authservice.sendUserSub.pipe(
            map(user => {
                return user ? true : false;
            }), tap(user => {
                if (!user) {
                  
                    this.route.navigate(['/authonticate'])
                }
            })
        )
    }

}
