import { useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Button from "../component/Button";
import Item from "../component/Item";
import Modal from "../component/Modal";

const Admin = () => {
  const [isModalPopUp, setModalPopUp] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    userName: "",
    role: "",
    status: "Active",
    permissions: [],
  });

  // Example data
  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "John Doe",
      role: "Admin",
      permissions: ["write", "read", "update"],
      status: "Active",
    },
    {
      id: 2,
      userName: "Jane Smith",
      role: "User",
      permissions: ["read"],
      status: "In-Active",
    },
    {
      id: 3,
      userName: "Bob Lee",
      role: "Editor",
      permissions: ["write", "read"],
      status: "Active",
    },
  ]);

  // Roles
  const [roles, setRoles] = useState([
    { roleName: "Admin", permissions: ["Read", "Write", "Delete"] },
    { roleName: "User", permissions: ["Read"] },
  ]);

  // Modal close and open
  const handleModalChange = () => {
    setModalPopUp((prev) => !prev);
    if (isModalPopUp) {
      setIsEditting(false); 
      // Reset form
      setNewUser({ userName: "", role: "", status: "Active", permissions: [] }); 
    }
  };

  // Add User
  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setModalPopUp(false);
    // Reset form
    setNewUser({ userName: "", role: "", status: "Active", permissions: [] }); 
  };

  // Handle deleting a user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Update User
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, ...newUser } : user
    );
    setUsers(updatedUsers);
    setModalPopUp(false);
    setIsEditting(false);
    // Clear the selected user
    setSelectedUser(null); 
    // Reset form
    setNewUser({ userName: "", role: "", status: "Active", permissions: [] }); 
  };

  // Set the user to be edited
  const startEditing = (user) => {
    setSelectedUser(user);
    setNewUser({ ...user }); // Set form data to selected user
    setIsEditting(true);
    setModalPopUp(true);
  };

  // Handle selecting permissions
  const handlePermissionChange = (permission) => {
    setNewUser((prevUser) => {
      const permissions = prevUser.permissions.includes(permission)
        ? prevUser.permissions.filter((perm) => perm !== permission) // Remove permission if already selected
        : [...prevUser.permissions, permission];
      return { ...prevUser, permissions };
    });
  };

  // Handle role change
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    const role = roles.find((role) => role.roleName === selectedRole);
    const rolePermissions = role ? role.permissions : [];
    setNewUser({
      ...newUser,
      role: selectedRole,
      // Set permissions based on role
      permissions: rolePermissions, 
    });
  };

  // Handle status toggle
  const handleStatusToggle = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <section className="w-full mt-2">
      <div className="text-center">
        <p className="lg:text-[2vw] md:text-[2.4vh] text-[2vh] tracking-wider font-[PTSerif] font-medium text-slate-900">
          User&apos;s List
        </p>
        {users.length === 0 ? (
          <span className="lg:text-[1.5vw] md:text-[1.9vh] text-[1.8vh] text-red-500 font-bold font-[Poppins] tracking-wider lg:mt-[2rem] md:mt-[4rem] mt-[12rem]">
            No Record Found
          </span>
        ) : (
          <div className="w-full flex justify-center  ">
            <div className="flex justify-center lg:w-[80%] md:w-[90%]  w-full">
              <div className="overflow-x-auto md:w-[90%] w-[98%] h-full md:bg-slate-400 lg:px-[2.5rem] md:p-[2rem] rounded-xl">
                <div className="flex justify-end mb-[0.5rem]">
                  <Button
                    ButtonClick={handleModalChange}
                    ButtonContent={"Add User"}
                    ButtonStyle={
                      "lg:text-[0.9rem] md:text-[0.7rem] text-[0.5rem] bg-gray-800 shadow-inner shadow-[#6f6d6d] text-white hover:bg-black transition-all active:scale-105 lg:px-[1rem] lg:py-[0.4rem] md:px-[0.8rem] md:py-[0.3rem] py-[0.2rem] px-[0.5rem]  rounded-3xl  flex gap-x-1 items-center"
                    }
                    RenderLeftStyle={"lg:text-lg md:text-md text-sm"}
                    RenderRight={<BsFillPersonPlusFill />}
                  />
                </div>
                <table className="min-w-full border-collapse table-auto rounded-xl bg-gradient-to-r from-[#c1edca52] to-[#b9e6eb98] bg-opacity-40 backdrop-blur-md shadow-lg border-1 border-[#e5eee5ee]">
                  <thead className="border-b multi-text-shadow lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] shadow-md text-slate-700 shadow-[#34635d79] font-[Poppins] border-gray-200 lg:h-[3rem] bg-[#def4f4cc] bg-opacity-15 backdrop-blur-xl">
                    <tr>
                      <th className="border-r border-[#c3f7f552]">#</th>
                      <th className="border-r border-[#c3f7f552]">Name</th>
                      <th className="border-r border-[#c3f7f552]">Role</th>
                      <th className="border-r border-[#c3f7f552]">Status</th>
                      <th className="border-r border-[#c3f7f552]">
                        Permission
                      </th>
                      <th className="border-r border-[#c3f7f552]">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {users.map((item, index) => (
                      <Item
                        key={item.id}
                        item={item}
                        index={index}
                        handleDelete={deleteUser}
                        handleUpdate={startEditing}
                        handleStatusToggle={handleStatusToggle}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Modal for Add or Edit User */}
      {isModalPopUp && (
        <Modal ModalClose_Open_Toggle={handleModalChange}>
        <div className="w-full flex flex-col items-center">
          <p className="lg:text-[1.2rem] text-lg uppercase tracking-wider font-[400] mb-4">
            {isEditting ? "Update User" : "Add User"}
          </p>
          <form onSubmit={isEditting ? handleUpdate : addUser} className="w-full">
            {/* Username Input */}
            <input
              type="text"
              placeholder="Username"
              value={newUser.userName}
              onChange={(e) =>
                setNewUser({ ...newUser, userName: e.target.value })
              }
              className="p-4 border border-gray-300 rounded-md mb-4 w-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base lg:text-lg"
              required
            />
            
            {/* Role Selection Dropdown */}
            <select
              value={newUser.role}
              onChange={handleRoleChange}
              className="p-4 border border-gray-300 rounded-md mb-4 w-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base lg:text-lg"
              required
            >
              <option value="">Select Role</option>
              {roles.map((role, index) => (
                <option key={index} value={role.roleName}>
                  {role.roleName}
                </option>
              ))}
            </select>
      
            {/* Status Selection */}
            <select
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
              className="p-4 border border-gray-300 rounded-md mb-4 w-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base lg:text-lg"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
      
            {/* Permissions */}
            <div className="flex flex-wrap gap-3 mb-4">
              {roles
                .find((role) => role.roleName === newUser.role)
                ?.permissions.map((perm) => (
                  <div key={perm} className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      id={perm}
                      checked={newUser.permissions.includes(perm)}
                      onChange={() => handlePermissionChange(perm)}
                      className="text-sm sm:text-base lg:text-lg"
                    />
                    <label htmlFor={perm} className="text-sm sm:text-base lg:text-lg">{perm}</label>
                  </div>
                ))}
            </div>
      
            <Button
              ButtonClick={isEditting ? handleUpdate : addUser}
              ButtonContent={isEditting ? "Update User" : "Add User"}
              ButtonStyle="bg-[#006666] text-white py-2 px-4 rounded-md w-full sm:w-auto"
            />
          </form>
        </div>
      </Modal>
      
      )}
    </section>
  );
};

export default Admin;
