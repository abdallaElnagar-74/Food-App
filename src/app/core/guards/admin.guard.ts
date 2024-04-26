import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  let role = inject(AuthService)
  if( localStorage.getItem('tokenOfUser') !== null && role.role == "SuperAdmin"){
    return true
  }
  else{
    return false
  }
};
