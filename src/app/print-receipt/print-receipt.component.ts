import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-receipt',
  templateUrl: './print-receipt.component.html',
  styleUrls: ['./print-receipt.component.css']
})
export class PrintReceiptComponent implements OnInit {

  @Input() dataFromParent:any;
  constructor() { }

  ngOnInit(): void {
  }
  


}
