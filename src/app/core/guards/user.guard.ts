import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  let role = inject (AuthService)
  let redirect = inject(Router)
  if(localStorage.getItem('tokenOfUser')!== null && role.role =="SystemUser")
    {
    return true
  }
  else{
    redirect.navigate(['/auth/login'])
    return false
  }
};
