import { Component} from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router,
    private authService: AuthService,) { 
    
  }



  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', {replaceUrl:true});}

  adoptar(){
    let navigationExtras: NavigationExtras={
     }
  this.router.navigate(['/form'], navigationExtras);
}
    


  perdido(){
    let navigationExtras: NavigationExtras={
    
    }
    this.router.navigate(['/home2'], navigationExtras);
  }

  aaaa(){
    let navigationExtras: NavigationExtras={
     }
  this.router.navigate(['/form'], navigationExtras);
}
    

}
