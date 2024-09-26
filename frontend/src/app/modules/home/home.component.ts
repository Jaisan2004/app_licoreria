import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  LogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }
}
