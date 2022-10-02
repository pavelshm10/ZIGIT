import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'modal-app-add-comment',
  templateUrl: './modal-add-comment.component.html',
  styleUrls: ['./modal-add-comment.component.scss']
})
export class ModalAddCommentComponent implements OnInit {
  comment='';
  constructor(
    private dialogRef: MatDialogRef<ModalAddCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string; name?: string},
  ) { }

  ngOnInit(): void {
  }

  saveComment(){
    this.dialogRef.close(this.comment);
  }
}
