import { HttpEvent, HttpEventType } from '@angular/common/http';
import { UserService } from './../../services/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { ApiService } from 'src/app/services/apiService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm! : FormGroup;
  file! : File ;
  previewImg! : string | any;
  percentualUpload : number | any = 0;

  constructor(private formBuilder : FormBuilder,
              private apiService : ApiService,
              private router : Router,
              private alertService : AlertService,
              private userService : UserService
              ) { }

  ngOnInit() {
      this.photoForm = this.formBuilder.group({
        file: ['', Validators.required],
        description: ['', Validators.maxLength(300)],
        allow : [true]
      })
  }

  upload(){
      const description = this.photoForm.get('description')?.value;
      const allow = this.photoForm.get('allow')?.value;
      console.log(description);
      console.log(allow);
      console.log(this.file)


      this.apiService
      .upload(description, allow, this.file)
      .pipe(finalize(() => {
        this.router.navigate(['/user', this.userService.getUserName()]);
      }))
      .subscribe((event : HttpEvent<any>  | any) => {
        if (event.type == HttpEventType.UploadProgress){
            this.percentualUpload = Math.round(100 * event.loaded / event.total);
        }else if(event.type == HttpEventType.Response){
          this.alertService.success('Foto publicada com sucesso!', false);
        }
      }, (error) => {
        console.log(error);
        this.alertService.danger('Problema ao publicar a foto, tente novamente.')
      });

  }

  pload(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.file = files[0];

    const reader = new FileReader();

    reader.readAsDataURL(this.file);

    reader.onload = () => {
      this.previewImg = reader.result;
    }


}




}
