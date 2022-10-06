import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConnectableObservable, first } from 'rxjs';
import { ToasterService } from 'src/app/services/toaster.service';
import { customValidatorRequired } from 'src/app/utils/validators';
import { ModalAddCommentComponent } from '../add-comment/modal-add-comment.component';
import { FileUploader } from 'ng2-file-upload';
import { AddProject } from 'src/app/actions/projects.actions';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})

// export class DatepickerCustomHeaderExample {
//   exampleHeader = ExampleHeader;
// }
export class AddProjectComponent implements OnInit {
  modalOpen: boolean = false;
  status = new FormControl(true);
  // projectForm: FormGroup;
  imageFile: any;
  previewImage: any;
  projectForm = new FormGroup({
    name: new FormControl('', [customValidatorRequired]),
    site_name: new FormControl('', [customValidatorRequired]),
    status: new FormControl(true, [customValidatorRequired]),
    end_date: new FormControl('', [customValidatorRequired]),
    comment: new FormControl('', [customValidatorRequired]),
    img_url: new FormControl(null, [customValidatorRequired]),
  });
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
  ) {
    // this.projectForm = this.initControls();
  }

  ngOnInit(): void {}

  checkValidation() {
    return false;
  }

  addComment() {
    this.modalOpen = true;
    this.matDialog
      .open(ModalAddCommentComponent, {})
      .afterClosed()
      .pipe(first())
      .subscribe((data) => {
        if (data) {
          this.projectForm.get('comment')?.setValue(data.value);
        }
      });
  }

  handleChecked(event: any) {
    this.projectForm.get('status')?.setValue(event.checked);
  }

  fileUpload(event: any) {
    this.projectForm.get('img_url')?.setValue(event.target.files[0]);
    this.imageFile=event.target.files[0];
  }

  submit() {
    const { name, site_name, img_url, comment, end_date, status } =
      this.projectForm.value;
    this.store.dispatch(new AddProject(this.projectForm.value));
    // console.log("file ",this.imageFile);
    // file_input ? console.log(file_input?.files[0]):''
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
