// Step 1: Define the original object type

interface UserProfile {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  age?: number; // optional
}

//Step 2: Use Utility Types to manipulate the object type

// Make all properties optional (like a partial update)
type UserProfileUpdate = Partial<UserProfile>;

// Make all properties readonly (no changes allowed)
type ReadonlyUserProfile = Readonly<UserProfile>;

// Pick only specific keys (like a public profile)
type PublicUserProfile = Pick<UserProfile, "id" | "name">;

// Omit keys (like hiding sensitive info)
type UserWithoutEmail = Omit<UserProfile, "email">;

// Record example — map user roles to permissions
type Roles = "admin" | "editor" | "viewer";

type RolePermissions = Record<Roles, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};
/// Step 3: Use the types in action
// Original user object
const user: UserProfile = {
  id: 101,
  name: "Alain",
  email: "alain@example.com",
  isAdmin: false,
  age: 25,
};

// Using Partial for update
const updateUser: UserProfileUpdate = {
  email: "newemail@example.com",
};

// Using Readonly to prevent modification
const readonlyUser: ReadonlyUserProfile = user;
// readonlyUser.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property

// Using Pick for public profile
const publicProfile: PublicUserProfile = {
  id: user.id,
  name: user.name,
};

// Using Omit to hide email
const safeUser: UserWithoutEmail = {
  id: user.id,
  name: user.name,
  isAdmin: user.isAdmin,
  age: user.age,
};
