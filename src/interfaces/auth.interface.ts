export interface JwtPayload {
    userId: string; // ID unik pengguna (dari database)
    email: string;  // Email pengguna
  }
  
  export interface AuthServiceInterface {
    /**
     * Mendaftarkan pengguna baru.
     * @param registerDto - Data pendaftaran pengguna.
     * @returns Data pengguna yang telah terdaftar.
     */
    register(registerDto: RegisterDto): Promise<any>;
  
    /**
     * Melakukan login pengguna.
     * @param loginDto - Data login pengguna.
     * @returns Token JWT jika login berhasil.
     */
    login(loginDto: LoginDto): Promise<{ access_token: string }>;
  }
  