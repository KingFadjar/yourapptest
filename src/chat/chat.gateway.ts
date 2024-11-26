import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
  } from '@nestjs/websockets';
  import { ChatService } from './chat.service';
  
  @WebSocketGateway()
  export class ChatGateway {
    constructor(private readonly chatService: ChatService) {}
  
    @SubscribeMessage('sendMessage')
    async handleSendMessage(
      @MessageBody() data: SendMessageDto,
      @ConnectedSocket() client,
    ) {
      const message = await this.chatService.sendMessage(data);
      client.broadcast.emit('newMessage', message);
      return message;
    }
  }
  