import { IsString, IsNotEmpty } from 'class-validator';

export class SendMessageDto {
  @IsNotEmpty()
  @IsString()
  senderId: string;

  @IsNotEmpty()
  @IsString()
  receiverId: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}