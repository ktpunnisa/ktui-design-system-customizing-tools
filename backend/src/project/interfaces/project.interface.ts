import { Document } from 'mongoose';

export interface Project extends Document {
  id: string;
  name: string;
  creator_id: string;
}
