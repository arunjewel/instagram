import { Component, OnInit } from '@angular/core';
import { SecondService } from 'src/app/services/second.service';
@Component({
  selector: 'app-load',
  
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  cmnt:any={};
  constructor( private SecondService: SecondService ) { }

  ngOnInit() {
    this.SecondService.getCmnt()
.subscribe(cmnt => {
  console.log(cmnt);
  this.cmnt=cmnt;
})
  }

}
