import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from '../../functions/toBase64';

@Component({
  selector: 'app-image-input',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './image-input.component.html',
  styleUrl: './image-input.component.css'
})
export class ImageInputComponent {

  @Input({required:true})
  title!:string;

  @Input()
  urlCurrentImage?:string;

  @Output()
  senderFile = new EventEmitter<File>();

  imageBase64?:string;

  change(event:Event){
    const input = event.target as HTMLInputElement;

    if(input.files && input.files.length > 0){
      const file: File = input.files[0];
      toBase64(file).then((value:string) => this.imageBase64 = value)
      .catch(error => console.log(error));
      this.senderFile.emit(file);
      this.urlCurrentImage = undefined;
    }
  }

}
