import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  userId: string; // ID pengguna yang terkait dengan profil ini

  @IsNotEmpty()
  @IsString()
  name: string; // Nama pengguna

  @IsOptional()
  @IsString()
  zodiac?: string; // Zodiak pengguna, opsional

  @IsOptional()
  @IsString()
  horoscope?: string; // Horoskop pengguna, opsional
}
