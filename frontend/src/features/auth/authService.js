import axios from "axios";
import { toast } from "react-toastify";

const API_URL = `${import.meta.env.VITE_DOMAIN}/api/users/`;

// login user
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      throw new Error(error.response.data.msg);
    } else {
      throw new Error("An error occurred!");
    }
  }
};

// logout user
const logout = () => {
  localStorage.removeItem("user");
};

// update user
const update = async (userData) => {
  try {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    if (!token) throw new Error("No token found");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.post(API_URL + "me/update", userData, config);

    if (response.data) {
      toast("User information Updated");
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    toast(error?.response?.data?.message);
    throw error;
  }
};

// update user
const updatePassword = async (userData) => {
  try {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    if (!token) throw new Error("No token found");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.post(
      API_URL + "me/update-password",
      userData,
      config
    );

    if (response.data) {
      toast("User password Updated");
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    toast(error?.response?.data?.message);
    throw error;
  }
};

const getUser = async () => {
  const token = JSON.parse(localStorage.getItem("user"))["token"];
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const response = await axios.get(API_URL + "me", config);
    return response.data;
  } catch (error) {
    localStorage.removeItem("user");
    if (error.response.status === 400) {
      // throw new Error(error.response.data.msg)
    } else {
      // throw new Error("An error occurred!")
    }
  }
};

const authService = {
  login,
  logout,
  update,
  getUser,
  updatePassword,
};

export default authService;
