import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  projects?: ProjectCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
