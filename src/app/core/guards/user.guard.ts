import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  let role = inject (AuthService)
  if(localStorage.getItem('tokenOfUser')!== null && role.role =="SystemUser")
    {
    return true
  }
  else{
    return false
  }
};
