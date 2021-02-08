import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        console.log('can active');
        if (localStorage.getItem('accessToken')) {
            return true;
        }
        this.router.navigate(['/auth/login']);
        return false;
    }
}
