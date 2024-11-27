import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import Button from "./Button"; // Import Button component
import { FaSave,FaEdit, FaTrash } from "react-icons/fa";
 // For Save and Edit icons

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { roleName: "Admin", permissions: ["Read", "Write", "Delete"] },
    { roleName: "User", permissions: ["Read"] },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(null);
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleRoleNameChange = (e) => {
    setRoleName(e.target.value);
  };

  const handlePermissionChange = (e) => {
    const permission = e.target.value;
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((perm) => perm !== permission));
    } else {
      setPermissions([...permissions, permission]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      // Update existing role
      const updatedRoles = [...roles];
      updatedRoles[currentRoleIndex] = { roleName, permissions };
      setRoles(updatedRoles);
    } else {
      // Add new role
      setRoles([...roles, { roleName, permissions }]);
    }
    toggleModal(); // Close modal after submitting
    setRoleName(""); // Clear form state
    setPermissions([]);
  };

  const handleEditRole = (index) => {
    const roleToEdit = roles[index];
    setRoleName(roleToEdit.roleName);
    setPermissions(roleToEdit.permissions);
    setCurrentRoleIndex(index);
    setIsEditMode(true);
    toggleModal();
  };
  const handleDeleteRole = (index) => {
    const updatedRoles = roles.filter((role, idx) => idx !== index);
    setRoles(updatedRoles);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h3 className="text-2xl font-semibold mb-6">Role Management</h3>
      <button
        onClick={() => { setIsEditMode(false); toggleModal(); }}
        className="bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center gap-2 mb-4"
      >
        Add New Role
      </button>

      {/* List of roles */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">#</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Role Name</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Permissions</th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr
                key={index}
                className="hover:bg-[#c0e3f2d4] transition-colors duration-300"
              >
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{role.roleName}</td>
                <td className="border px-4 py-2">
                  {role.permissions.join(", ")}
                </td>
                <td className="border px-4 py-2 flex justify-center gap-4">
                  {/* Edit Button */}
                  <Button
                    ButtonContent="Edit"
                    RenderLeft={<FaEdit />}
                    ButtonClick={() => handleEditRole(index)}
                    ButtonStyle="bg-yellow-500 text-white p-2 rounded-md flex items-center gap-2 hover:bg-yellow-600 transition-all duration-300"
                  />
                  {/* Delete Button */}
                  <Button
                    ButtonClick={() => handleDeleteRole(index)}
                    RenderLeft={<FaTrash />}
                    ButtonContent="Delete"
                    ButtonStyle="bg-red-600 text-white p-2 rounded-md flex items-center gap-2 hover:bg-red-700 transition-all duration-300"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding and editing roles */}
      {isModalOpen && (
        <Modal ModalClose_Open_Toggle={toggleModal}>
          {/* Form content passed to Modal */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role Name */}
            <div>
              <label htmlFor="roleName" className="block text-lg font-medium">Role Name</label>
              <input
                id="roleName"
                type="text"
                value={roleName}
                onChange={handleRoleNameChange}
                placeholder="Enter role name"
                className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Permissions */}
            <div>
              <label htmlFor="permissions" className="block text-lg font-medium">Permissions</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Read", "Write", "Delete"].map((perm) => (
                  <label key={perm} className="flex items-center">
                    <input
                      type="checkbox"
                      value={perm}
                      checked={permissions.includes(perm)}
                      onChange={handlePermissionChange}
                      className="mr-2 accent-blue-600"
                    />
                    {perm}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                ButtonContent={isEditMode ? "Save Changes" : "Add Role"}
                ButtonClick={handleSubmit}
                ButtonStyle="bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
              >
                {isEditMode ? <FaEdit /> : <FaSave />}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>

  );
};

export default RoleManagement;
