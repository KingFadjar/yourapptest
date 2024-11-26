import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from '../common/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Menghubungkan skema User
  ],
  controllers: [UserController], // Mengatur routing dan endpoint
  providers: [UserService], // Logika bisnis terkait pengguna
  exports: [UserService], // Mengekspor layanan jika diperlukan di modul lain
})
export class UserModule {}
