import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'modal-app-add-comment',
  templateUrl: './modal-add-comment.component.html',
  styleUrls: ['./modal-add-comment.component.scss']
})
export class ModalAddCommentComponent implements OnInit {
  comment = new FormControl();
  constructor(
    private dialogRef: MatDialogRef<ModalAddCommentComponent>,
  ) { }

  ngOnInit(): void {
    this.dialogRef.updatePosition({ top: `300px`,
    left: `500px`})
  }

  saveComment(){
    this.dialogRef.close(this.comment);
  }
}
