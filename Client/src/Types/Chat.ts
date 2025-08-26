import type { Massage } from "./Massage";
import type { User } from "./User";

export type Chat={
    id: string;
    participant1: User;
    participant2: User;
    unreadCount: number;
    messages?: Massage[];
}