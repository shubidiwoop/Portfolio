// storage.ts now provides an in‑memory implementation so the app
// can run without a real PostgreSQL connection.  The database code is
// left in place for future use, but the exported instance below does
// not rely on it.
import type {
  type InsertMessage,
  type ContactMessage
} from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<ContactMessage>;
}

export class MemoryStorage implements IStorage {
  private data: ContactMessage[] = [];
  private nextId = 1;

  async createMessage(message: InsertMessage): Promise<ContactMessage> {
    const created: ContactMessage = {
      // assign a simple numeric id and timestamp
      id: this.nextId++,
      createdAt: new Date(),
      ...message,
    } as any;
    this.data.push(created);
    return created;
  }
}

// export a memory-backed storage instance by default
export const storage = new MemoryStorage();
