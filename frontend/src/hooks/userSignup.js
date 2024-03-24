import { useState } from "react";
import toast, { ToastBar } from "react-hot-toast";

const userSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);
      console.log("Hello");
    } catch (error) {
        console.log("Error huhu");
      toast.error("error.message");
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};
export default userSignup;

function handleInputErrors({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill in all the fields");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Please fill in all the fields");
    return false;
  }

  return true;
}
