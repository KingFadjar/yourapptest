export interface ChatMessage {
    id?: string; // Optional, digunakan untuk menyimpan ID dari MongoDB
    senderId: string; // ID pengirim pesan
    receiverId: string; // ID penerima pesan
    message: string; // Isi pesan
    timestamp: Date; // Waktu pengiriman pesan
  }
  
  export interface ChatServiceInterface {
    sendMessage(senderId: string, receiverId: string, message: string): Promise<ChatMessage>;
    viewMessages(userId: string, otherUserId: string): Promise<ChatMessage[]>;
    getRecentChats(userId: string): Promise<ChatMessage[]>;
  }
  