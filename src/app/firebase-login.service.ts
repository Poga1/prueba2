import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService {

  constructor(private nashi:AngularFireAuth, private router:Router ) { }

  login(email:string, password:string){
    return this.nashi.signInWithEmailAndPassword(email,password);
  }

  logout(){
    return this.nashi.signOut().then(()=>{
      this.router.navigate(['/login']);
    })

  }

}
