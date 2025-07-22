import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  update,
  updatePassword,
} from "../../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Settings = () => {
  const dispatch = useDispatch();

  const [currentState, setCurrentState] = useState("view");

  const { user } = useSelector((state) => state.auth);

  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { email, name, confirmPassword, oldPassword, newPassword } = inputValue;

  useEffect(() => {
    if (user) {
      setInputValue((prev) => ({
        ...prev,
        email: user?.email,
        name: user?.name,
      }));
    }
  }, [user]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateHandler = async () => {
    if (!user || !user.id) {
      toast("User not found");
      return;
    }

    if (currentState === "infoEdit") {
      if (!name || !email) {
        toast("Please enter all fields");
        return;
      }
      dispatch(update({ ...inputValue, id: user.id }));
    } else if (currentState === "passwordEdit") {
      if (!oldPassword || !newPassword || !confirmPassword) {
        toast("Please fill all fields");
        return;
      }
      if (newPassword !== confirmPassword) {
        toast("Passwords do not match");
        return;
      }
      dispatch(updatePassword({ ...inputValue, id: user.id }));
    }
  };

  return (
    <div className="flex gap-2 min-h-[70vh]">
      <div className="w-64 flex flex-col justify-between text-center bg-[rgba(132,191,181,0.6)]">
        <div className="flex flex-col justify-between">
          <Link
            to="/admin/dashboard"
            className="py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white"
          >
            Home
          </Link>
          <Link
            to="/admin/blog"
            className="py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white"
          >
            Blog
          </Link>
          <Link
            to="/admin/settings"
            className="py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-orange-500"
          >
            Settings
          </Link>
        </div>
        <Link
          onClick={logoutHandler}
          className="py-2 bg-[rgba(132,191,181,0.7)] hover:bg-[rgba(132,191,181,0.85)] text-white"
        >
          Logout
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center pr-3 py-2">
          <p className="px-3 py-2 text-center text-xl font-semibold capitalize">
            User Settings
          </p>
        </div>
        <div className="flex flex-col py-2 justify-center items-center">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-10 max-w-sm w-full mx-auto">
            {currentState === "passwordEdit" && (
              <div className="flex flex-col">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="oldPassword"
                  >
                    Old Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="oldPassword"
                    name="oldPassword"
                    type="password"
                    placeholder="johndoe1..."
                    value={oldPassword}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="newPassword"
                  >
                    New Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    placeholder="johndoe2..."
                    value={newPassword}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirmPassword"
                  >
                    Confirm New Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="johndoe2..."
                    value={confirmPassword}
                    onChange={onChange}
                  />
                </div>
              </div>
            )}
            {(currentState === "view" || currentState === "infoEdit") && (
              <div className="flex flex-col">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="text"
                    disabled={currentState === "view" ? true : false}
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    disabled={currentState === "view" ? true : false}
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                  />
                </div>
              </div>
            )}

            {currentState === "view" && (
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary border hover:bg-slate-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentState("infoEdit");
                  }}
                >
                  Update user
                </button>
                <button
                  className="bg-primary border hover:bg-slate-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentState("passwordEdit");
                  }}
                >
                  Update password
                </button>
              </div>
            )}
            {(currentState === "passwordEdit" ||
              currentState === "infoEdit") && (
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary border border-red-400 text-red-400 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentState("view");
                    setInputValue((prev) => ({
                      ...prev,
                      oldPassword: "",
                      newPassword: "",
                      email: user?.email,
                      name: user?.name,
                    }));
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary border hover:border-green-400 hover:bg-green-400 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={(e) => {
                    e.preventDefault();
                    updateHandler();
                  }}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
