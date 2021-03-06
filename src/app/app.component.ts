import { User } from './user';
import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue']
  topicHasError=true;
  userModel=new User ("Rob","Rob@gmail.com",4543266567,"default","morning",true);
  submitted=false;
  errorMsg='';
constructor(private _enrollmentService:EnrollmentService) {
 

} 
  validateTopic(value)
  {
   if(value=="default")
   {
      this.topicHasError=true;
   } else
   {
       this.topicHasError=false;
   }
  }
  onSubmit(){
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(data=>console.log('Success',data),
               error=>this.errorMsg=error.statusText
               
   );
    
    
  }
 
  }
