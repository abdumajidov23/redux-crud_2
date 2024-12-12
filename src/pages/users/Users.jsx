import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, editUser } from "../../redux/slices/user-clise";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.value);

  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    profession: "",
    gender: "",
  });

  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setFormData(user);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editUser({ id: currentUser.id, updatedUser: formData }));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 grid place-content-center">
      <h2 className="text-center text-4xl font-bold mb-8">Users</h2>
      {users.length > 0 ? (
        <table className="max-w-4xl mx-auto bg-gray-800 text-left rounded-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Profession</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-700">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.age}</td>
                <td className="px-4 py-3">{user.profession}</td>
                <td className="px-4 py-3">{user.gender}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="px-3 py-1 bg-amber-500 text-sm rounded-md hover:bg-amber-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteUser(user))}
                    className="px-3 py-1 bg-red-500 text-sm rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-400">No users found</p>
      )}

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Edit User</h3>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name"
                className="w-full mb-3 px-3 py-2 rounded-md bg-gray-700 text-gray-300"
                required
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
                className="w-full mb-3 px-3 py-2 rounded-md bg-gray-700 text-gray-300"
                required
              />
              <input
                type="number"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                placeholder="Age"
                className="w-full mb-3 px-3 py-2 rounded-md bg-gray-700 text-gray-300"
                required
              />
              <input
                type="text"
                value={formData.profession}
                onChange={(e) =>
                  setFormData({ ...formData, profession: e.target.value })
                }
                placeholder="Profession"
                className="w-full mb-3 px-3 py-2 rounded-md bg-gray-700 text-gray-300"
                required
              />
              <select
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="w-full mb-3 px-3 py-2 rounded-md bg-gray-700 text-gray-300"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
