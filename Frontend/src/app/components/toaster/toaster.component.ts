import {ChangeDetectionStrategy, Component, ElementRef, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: {content: string; type: 'success' | 'error' | 'warning'},
    public elementRef: ElementRef,
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.zIndex = '10000';
  }

  ngOnDestroy() {}
}
