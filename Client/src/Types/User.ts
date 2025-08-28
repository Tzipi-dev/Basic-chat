import type { Group } from "./Group";

export interface User  {
  id: string;
    name: string;
    avatarUrl: string;
    isOnline: boolean;
    lastActive: Date;
    email: string;
    phoneNumber?: string;
    friends?: User[];
    groups?: Group[];

}