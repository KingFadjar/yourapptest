import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Membuat konfigurasi tersedia di seluruh aplikasi
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/youapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }), // Koneksi MongoDB
    AuthModule, // Modul autentikasi
    UserModule, // Modul pengguna
    ChatModule, // Modul chat
  ],
})
export class AppModule {}
