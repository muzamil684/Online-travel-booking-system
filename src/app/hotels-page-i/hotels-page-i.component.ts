import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DdataService } from '../ddata.service';
import { m_hotels } from '../MODELS/hotels.model';

@Component({
  selector: 'app-hotels-page-i',
  templateUrl: './hotels-page-i.component.html',
  styleUrls: ['./hotels-page-i.component.css']
})
export class HotelsPageIComponent implements OnInit {

hotelsPageObj:m_hotels;

//to read id from url we use activated route 
  constructor(private ar:ActivatedRoute,private dds:DdataService) { }

  ngOnInit(): void {
   let id=this.ar.snapshot.params.id;
console.log(id);

   //get data from m_hotels using id
   this.dds.getHotelsById(id).subscribe(
     obj=>{
      
      this.hotelsPageObj=obj;
     },
     err=>{
       console.log("error in reading hotelsPage",err);
     }
   )

  }

}
