"use strict";
// Step 1: Define the original object type
const permissions = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"],
};
/// Step 3: Use the types in action
// Original user object
const user = {
    id: 101,
    name: "Alain",
    email: "alain@example.com",
    isAdmin: false,
    age: 25,
};
// Using Partial for update
const updateUser = {
    email: "newemail@example.com",
};
// Using Readonly to prevent modification
const readonlyUser = user;
// readonlyUser.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property
// Using Pick for public profile
const publicProfile = {
    id: user.id,
    name: user.name,
};
// Using Omit to hide email
const safeUser = {
    id: user.id,
    name: user.name,
    isAdmin: user.isAdmin,
    age: user.age,
};
