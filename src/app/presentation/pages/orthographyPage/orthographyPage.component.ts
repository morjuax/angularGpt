import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TypingLoaderComponent, textMessageEvent } from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

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

  public messages = signal<Message[]>([
    {
      text: 'Hola mundo',
      isGpt: false
    }
  ]);
  public isLoading = signal(false);
  public openAiService = inject(OpenAiService)


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
