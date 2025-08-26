import type { User } from "./User";

export type Group ={
    id: string;
    name: string;
    avatarUrl: string;
    members: User[];
    createdAt: Date;
    description?: string;
    admin: User;
}