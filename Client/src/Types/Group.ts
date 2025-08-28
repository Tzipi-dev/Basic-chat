import type { User } from "./User";

export interface Group {
    id: string;
    name: string;
    avatarUrl: string;
    members: User[];
    createdAt: Date;
    description?: string;
    admin: User;
}