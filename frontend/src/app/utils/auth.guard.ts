import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const ruta = route.url[0].path;
  let token;
  if (typeof window !== 'undefined' && window.localStorage) {
    token = localStorage.getItem('token');
  }else{
    router.navigate(['/Login']);
    return false;
  }
  if(token==undefined){
    router.navigate(['/Login']);
    return false;
  }

  return true;

};
