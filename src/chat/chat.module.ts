import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { Chat, ChatSchema } from '../common/schemas/chat.schema';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]), // Menghubungkan skema chat
  ],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway], // Layanan dan WebSocket Gateway
  exports: [ChatService], // Ekspor layanan jika diperlukan oleh modul lain
})
export class ChatModule {}
