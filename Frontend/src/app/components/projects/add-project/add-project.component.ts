import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConnectableObservable, first } from 'rxjs';
import { ToasterService } from 'src/app/services/toaster.service';
import { customValidatorRequired } from 'src/app/utils/validators';
import { ModalAddCommentComponent } from '../add-comment/modal-add-comment.component';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})

// export class DatepickerCustomHeaderExample {
//   exampleHeader = ExampleHeader;
// }

export class AddProjectComponent implements OnInit {
  statusList = ['Active', 'Not Active'];
  modalOpen:boolean=false;
  flag:boolean=true;
  projectForm = new FormGroup({
    name: new FormControl('', [customValidatorRequired]),
    site_name: new FormControl('', [customValidatorRequired]),
    status: new FormControl('', [customValidatorRequired]),
    end_date: new FormControl('', [customValidatorRequired]),
    comment: new FormControl('', [customValidatorRequired]),
    img_url: new FormControl('', [customValidatorRequired]),
  });
  constructor(private store: Store, private matDialog: MatDialog) {}

  ngOnInit(): void {}

  checkValidation() {
    return false;
  }

  addComment() {
    this.modalOpen=true;
    this.matDialog
      .open(ModalAddCommentComponent, {
      })
      .afterClosed()
      .pipe(first())
      .subscribe((data) => {
        if (data) {
          console.log('comment ', data.value);
          const {name,site_name,status,img_url,comment,end_date}=this.projectForm.value;
        }
      });
  }

  submit() {
    const {name,site_name,img_url,comment,end_date,status} = this.projectForm.value;
    console.log("date ",end_date);
    // if (!this.isEdit) {
    //   this.textData = this.textService.getTexts();
    // } else {
    //   const {isActive, labels, name, text, language, type} = this.textsDialogForm.value;
    //   const data: {[key: string]: number | boolean} = {
    //     labels: (labels || []).map((item) => ({
    //       id: item.id,
    //     })),
    //     name,
    //     text,
    //     typeId: type,
    //     languageId: language,
    //     isActive,
    //   };
    //   this.textData = data;
    // // }
    // this.dialogRef.close(this.textData);
  }
}
