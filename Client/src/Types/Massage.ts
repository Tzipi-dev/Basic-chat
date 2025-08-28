export interface Massage{
    id: string;
    senderId: string;
    receiverId: string; 
    content: string;
    timestamp: Date;
    isRead: boolean;
    type: 'text' | 'image' | 'video' | 'file' | 'audio' | 'imoji';
    
}