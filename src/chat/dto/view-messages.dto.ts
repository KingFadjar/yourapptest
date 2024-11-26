import { IsString, IsNotEmpty } from 'class-validator';

export class ViewMessagesDto {
  @IsNotEmpty()
  @IsString()
  userId: string; // ID pengguna yang ingin melihat pesan

  @IsNotEmpty()
  @IsString()
  otherUserId: string; // ID pengguna lain dalam percakapan
}
