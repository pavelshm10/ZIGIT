import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToasterService } from 'src/app/services/toaster.service';
import { customValidatorRequired } from 'src/app/utils/validators';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  statusList=['Active', 'Not Active'];
  projectForm = new FormGroup({
    name: new FormControl('', [customValidatorRequired]),
    site_name: new FormControl('', [customValidatorRequired]),
    status: new FormControl('', [customValidatorRequired]),
    end_date: new FormControl('', [customValidatorRequired]),
    comment: new FormControl('', [customValidatorRequired]),
    img_url: new FormControl('', [customValidatorRequired]),
  });

  constructor(
    private store: Store,
    private changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    // private dialogRef: MatDialogRef<any>,
    // private httpClient: HttpClient,
    // private toasterService: ToasterService
  ) {
    // this.projectForm = this.formBuilder.group({
    //   name: new FormControl('', [customValidatorRequired]),
    //   site_name: new FormControl('', [customValidatorRequired]),
    //   status: new FormControl('', [customValidatorRequired]),
    //   end_date: new FormControl('', [customValidatorRequired]),
    //   comment: new FormControl('', [customValidatorRequired]),
    //   img_url: new FormControl('', [customValidatorRequired]),
    // });
  }

  ngOnInit(): void {}

  // getStatus() {
   
  //   return status;
  // }

  checkValidation() {
    return true;
  }

  submit() {
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
