import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TypingLoaderComponent, textMessageEvent } from '@components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  handleMessage(promt: string) {
    console.log('ha orto',{promt});
  }

  handleMessageWithFile({prompt, file}: textMessageEvent) {
    console.log({prompt, file});
    
  }

  handleMessageWithSelect(event: TextMessageBoxEvent) {
    console.log(event);
    
  }
 }
