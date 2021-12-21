import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { Article } from '../../../../shared/article';
import { webURL} from '../../../../shared/baseURL'
import { ArticleService } from '../../../../services/article.service';
import response from '../../../../shared/response';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  public message!: string;
  public articleForm!: FormGroup;
  public loading = false;
  public success = false; 
  public error = false;
  public show = false;
  public imagePath : any;
  imgURL: any ;

  id : any ;
  
  constructor( private fb : FormBuilder , public dialogRef: MatDialogRef<EditDialogComponent>,private articleservice: ArticleService ,  @Inject(MAT_DIALOG_DATA) public data: Article) {
    this.imgURL = webURL + this.data.image;
    this.id = this.data.id ;
  }


  ngOnInit(): void {
    this.articleForm = this.fb.group({
      'title' : this.data.title,
      'date': this.data.date,
      'article': this.data.article,
      'author' : this.data.author,
      'image': '',
    });
  }

  public imageChange(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.articleForm.patchValue({
      image: file
    });
    this.articleForm.get('image').updateValueAndValidity();

    // bch image tetbadel ki ta5tar image jdida
    if (event.target.files.length > 0){
      const file = event.target.files[0];
     // this.f['profile'].setValue(file);
 
 
       var reader = new FileReader();
    
       this.imagePath = file;
       reader.readAsDataURL(file); 
       reader.onload = (_event) => { 
         this.imgURL = reader.result; 
      }
    }
  }

  add(){
    this.loading = true;
    var formData = new FormData();
    formData.append("title", this.articleForm.get('title').value);
    formData.append("article", this.articleForm.get('article').value);
    formData.append("date", this.articleForm.get('date').value);
    formData.append("author", this.articleForm.get('author').value);
    formData.append("image", this.articleForm.get('image').value);

    console.log(this.articleForm.getRawValue());
    this.articleservice.updateArticle(formData , this.id).subscribe((response : any) => {
      this.loading = false;
     // console.log(response);
      if ( response.message == "success" ){
        this.success = true; 
        this.error = false; 
        this.dialogRef.close();
      }else{
        this.success = false; 
        this.error = true; 
      }
    } , 
    (error : any) => {
      this.success = false; 
      this.loading = false;
      this.error = true; 
    }) ; 
  }

}
