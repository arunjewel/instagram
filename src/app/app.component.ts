import { Component } from '@angular/core';
import { MyservService } from 'src/app/services/myserv.service';
// import { SecondService } from 'src/app/services/second.service';
// import { Http,Response } from '@angular/http';
// import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insta';
  data:any={};
  // cmnt:any={};
constructor(
private MyservService: MyservService,
// private SecondService: SecondService,
) {
}
ngOnInit() {
this.MyservService.getData()
.subscribe(data => {
console.log(data);
this.data=data;
})

// this.SecondService.getCmnt()
// .subscribe(cmnt => {
//   console.log(cmnt);
//   this.cmnt=cmnt;
// })
}

}
