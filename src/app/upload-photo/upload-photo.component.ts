import {Component, EventEmitter} from '@angular/core';
import {SemenapiService} from "../semenapi.service";
import {RequestParameter} from "@angular/cli/src/analytics/analytics-parameters";
import {HttpParams, HttpRequest} from "@angular/common/http";
import {Event} from "@angular/router";

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {

  constructor(private imageService: SemenapiService) {
  }
  sendImage(event: any){
    console.log('------');
    console.log('------');

    let file = event.target.files[0];
    console.log(file);
    let data = new FormData();
    data.append("file", file);

    this.imageService.uploadImage(data).subscribe((object) =>{
      console.log(object.filename);
      console.log(object.percent);
    })
  }
}
