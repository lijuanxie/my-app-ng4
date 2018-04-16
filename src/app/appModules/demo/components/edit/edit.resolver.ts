import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ListService } from '../../services/list.service';

@Injectable()
export class EditResolver implements Resolve<any> {
    constructor(
        private router: Router,
        private service: ListService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = route.paramMap.get('id');
        if (!id || !id.length) {
            this.router.navigate(['/demo/list']);
            return Observable.of(null);
        }
        return this.service.getEditDetail(id).catch(err => {
            this.router.navigate(['/demo/list']);
            return Observable.of(null);
        })
    }
} 