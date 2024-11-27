
### Components:
1. **`Dashboard`**:
   - Manages the sidebar's visibility with the `isSidebarOpen` state, toggling it when necessary.
   - It includes the `Sidebar` component, passing down the `isSidebarOpen` state and the `ToggleSidebar` function to manage sidebar visibility.

2. **`Item`**:
   - Displays each user's data (username, role, permissions, etc.) in a table row.
   - Provides buttons for editing and deleting the user, alongside status toggle functionality (Active/Inactive).

3. **`Modal`**:
   - A reusable modal component that displays content passed as children.
   - Includes a close button to toggle the modal visibility.

4. **`RoleManagement`**:
   - Allows the admin to add or edit user roles.
   - The roles have associated permissions that can be edited through checkboxes, and the form handles both adding new roles and editing existing ones.

5. **`Admin`**:
   - Displays a list of users with the ability to add, edit, or delete users.
   - Utilizes the `Item` component for displaying users in a table format, with actions like "Edit" and "Delete".
   - Includes a modal for adding and editing user details. Users can have roles, permissions, and status toggles (Active/Inactive).

### Key Functionality:
- **Modal for Adding/Editing**: The `Admin` component uses a modal for both adding new users and editing existing ones. When adding a user, the form is reset; when editing, the modal is prefilled with the user's data.
  
- **Role and Permissions**: The user roles (like Admin, User, Editor) are predefined, and each role comes with specific permissions (Read, Write, Delete). The permissions are automatically set based on the role selected for the user.
  
- **Status Toggle**: Each user has a status (Active/Inactive), which can be toggled via the `handleStatusToggle` function.

- **Button Component**: The `Button` component is used consistently throughout for various actions like submitting forms, deleting, and updating.

### Enhancements or Issues:
- The user input for `permissions` and `role` in the modal is tightly coupled, which could be improved by separating them more distinctly (e.g., displaying permissions based on the selected role).
  
- The modal and form handling are slightly complex because of the conditional logic (e.g., editing vs. adding), but it should work well as long as the state management is clear.

### Suggestions for Improvement:
1. **Error Handling**: Consider adding error handling for form validation and state updates, such as preventing submission when required fields are empty or data is incorrect.
2. **Styling**: The `tailwind` classes seem well-organized, but it might help to group them into reusable classes for better maintainability.
3. **State Reset**: After form submission (both adding and editing), ensure the form is reset properly, including any state that might not get cleared (e.g., toggled checkboxes).

This structure seems well-organized and maintains clear separation between various components for easy maintenance and scalability in the future.
## Screenshots
# List of User
![image](https://github.com/user-attachments/assets/56d51a6d-0cd7-48ec-9935-4f49ed930e50)
# Manage Roles
![image](https://github.com/user-attachments/assets/75b7151c-4265-47e0-8d11-bcc1ef07328e)
# Add User
![image](https://github.com/user-attachments/assets/8b3ece7f-ff0d-4889-9c6a-6b3a77dae2dc)
# Edit User
![image](https://github.com/user-attachments/assets/e5ae6651-26ea-4b94-99fd-e0960465a55a)




# Edit Role
![image](https://github.com/user-attachments/assets/c49684a5-11d3-4eb0-b458-6d7bf895b005)

![image](https://github.com/user-attachments/assets/a0472c28-871f-4218-97f2-44b71e7983f9)

