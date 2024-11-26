import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Endpoint untuk membuat profil pengguna baru.
   * @param createProfileDto - Data untuk membuat profil.
   * @returns Profil pengguna yang telah dibuat.
   */
  @Post('createProfile')
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.userService.createProfile(createProfileDto);
  }

  /**
   * Endpoint untuk mendapatkan profil pengguna berdasarkan ID.
   * @param id - ID pengguna.
   * @returns Profil pengguna.
   */
  @Get('getProfile/:id')
  async getProfile(@Param('id') id: string) {
    return this.userService.getProfile(id);
  }

  /**
   * Endpoint untuk memperbarui profil pengguna.
   * @param id - ID pengguna.
   * @param updateProfileDto - Data yang ingin diperbarui.
   * @returns Profil pengguna yang telah diperbarui.
   */
  @Put('updateProfile/:id')
  async updateProfile(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.userService.updateProfile(id, updateProfileDto);
  }
}
