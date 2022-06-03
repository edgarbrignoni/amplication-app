import { Project } from "../project/Project";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Array<Project>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
