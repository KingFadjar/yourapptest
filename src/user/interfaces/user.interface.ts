export interface UserInterface {
    id: string; // ID unik pengguna (diambil dari MongoDB)
    email: string; // Email pengguna
    password: string; // Kata sandi pengguna (hashed)
    name?: string; // Nama pengguna (opsional)
    zodiac?: string; // Zodiak pengguna (opsional)
    horoscope?: string; // Horoskop pengguna (opsional)
  }
  
  export interface UserServiceInterface {
    /**
     * Membuat profil pengguna baru.
     * @param userData - Data untuk membuat profil.
     * @returns Objek pengguna yang telah disimpan.
     */
    createProfile(userData: Partial<UserInterface>): Promise<UserInterface>;
  
    /**
     * Mengambil profil pengguna berdasarkan ID.
     * @param userId - ID pengguna.
     * @returns Profil pengguna.
     */
    getProfile(userId: string): Promise<UserInterface>;
  
    /**
     * Memperbarui profil pengguna.
     * @param userId - ID pengguna yang ingin diperbarui.
     * @param updateData - Data yang akan diperbarui.
     * @returns Profil pengguna yang telah diperbarui.
     */
    updateProfile(userId: string, updateData: Partial<UserInterface>): Promise<UserInterface>;
  }
  