import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imagesArr = [];
  constructor() {}

  // updateImage(value, imageInd, item) {
  //   switch (item) {
  //     case ImageEnum.folder: {
  //       this.imagesArr[imageInd - 1].folder = value;
  //       break;
  //     }
  //     case ImageEnum.language: {
  //       this.imagesArr[imageInd - 1].language = value;
  //       break;
  //     }
  //     case ImageEnum.product: {
  //       this.imagesArr[imageInd - 1].product = value;
  //       break;
  //     }
  //     case ImageEnum.labels: {
  //       this.imagesArr[imageInd - 1].labels = value;
  //       break;
  //     }
  //     case ImageEnum.file: {
  //       this.imagesArr[imageInd - 1].url = value;
  //       break;
  //     }
  //   }
  // }
}
