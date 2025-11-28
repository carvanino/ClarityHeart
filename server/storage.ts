import { type User, type InsertUser, type InsertContactMessage, type ContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: ContactMessage[];
  private messageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = [];
    this.messageIdCounter = 1;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const contactMessage: ContactMessage = {
      id: this.messageIdCounter++,
      ...message,
      createdAt: new Date(),
    };
    this.contactMessages.push(contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
