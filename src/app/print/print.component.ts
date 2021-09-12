import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  
@Input() dataFromParent:any;

  ngOnInit(): void {
 
  }

}
