import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../common/schemas/user.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  /**
   * Membuat profil pengguna baru.
   * @param createProfileDto - Data untuk membuat profil.
   * @returns Objek pengguna yang telah disimpan.
   */
  async createProfile(createProfileDto: CreateProfileDto): Promise<UserInterface> {
    const newUser = new this.userModel(createProfileDto);
    return newUser.save();
  }

  /**
   * Mengambil profil pengguna berdasarkan ID.
   * @param userId - ID pengguna.
   * @returns Profil pengguna.
   */
  async getProfile(userId: string): Promise<UserInterface> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  /**
   * Memperbarui profil pengguna berdasarkan ID.
   * @param userId - ID pengguna yang ingin diperbarui.
   * @param updateProfileDto - Data yang akan diperbarui.
   * @returns Profil pengguna yang telah diperbarui.
   */
  async updateProfile(userId: string, updateProfileDto: UpdateProfileDto): Promise<UserInterface> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { $set: updateProfileDto },
      { new: true, runValidators: true },
    ).exec();
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  }
}
