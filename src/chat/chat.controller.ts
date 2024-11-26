import { Controller, Get, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ViewMessagesDto } from './dto/view-messages.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('viewMessages')
  async viewMessages(@Query() viewMessagesDto: ViewMessagesDto) {
    const { userId, otherUserId } = viewMessagesDto;
    return this.chatService.viewMessages(userId, otherUserId);
  }
}
