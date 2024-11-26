import { IsString, IsOptional } from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  name?: string; // Nama pengguna yang akan diperbarui (opsional)

  @IsOptional()
  @IsString()
  zodiac?: string; // Zodiak pengguna yang akan diperbarui (opsional)

  @IsOptional()
  @IsString()
  horoscope?: string; // Horoskop pengguna yang akan diperbarui (opsional)
}
