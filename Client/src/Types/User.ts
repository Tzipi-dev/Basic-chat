import type { Group } from "./Group";

export type User = {
  id: string;
    name: string;
    avatarUrl: string;
    isOnline: boolean;
    lastActive: Date;
    email: string;
    phoneNumber?: string;
    freinds?: User[];
    groups?: Group[];

}