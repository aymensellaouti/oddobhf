import { Pipe, PipeTransform } from '@angular/core';
import { CONFIG } from 'src/app/config/config.const';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return path.trim()? path : CONFIG.defaultImage;
  }

}
