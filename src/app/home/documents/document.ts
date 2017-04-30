export interface Document {
  access: string;
  content: string;
  createdAt: string; // this might change
  updatedAt: string; // this also
  documentId: string | number;
  ownerId: string | number;
  title: string;
  isPublic(): boolean;
  isOwner(userId: string | number): boolean;
}
