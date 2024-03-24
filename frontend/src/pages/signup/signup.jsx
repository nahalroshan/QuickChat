import { sign } from "jsonwebtoken";
import React, { useState } from "react";
import userSignup from "../../hooks/userSignup";

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const {loading , signup} = userSignup()
  const [gender, setGender] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    await signup(input);
  };

  return (
    <>
      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:m-4">
            <h1 className="text-4xl font-bold">Create an account</h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div
              className="card-body"
              style={{ maxHeight: "48vh", overflowY: "auto" }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={input.fullname}
                  onChange={(e) => {
                    setInput({ ...input, fullname: e.target.value });
                  }}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  value={input.username}
                  onChange={(e) => {
                    setInput({ ...input, username: e.target.value });
                  }}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={input.password}
                  onChange={(e) => {
                    setInput({ ...input, password: e.target.value });
                  }}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  value={input.confirmpassword}
                  onChange={(e) => {
                    setInput({ ...input, confirmpassword: e.target.value });
                  }}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <div className="flex space-x-4">
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="gender"
                      value="Male"
                      onChange={(e) => {
                        setInput({ ...input, gender: e.target.value });
                      }}
                    />
                    <span className="checkbox-mark"></span>
                    <span className="checkbox-label m-2">Male</span>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="gender"
                      value="Female"
                      onChange={(e) => {
                        setInput({ ...input, gender: e.target.value });
                      }}
                    />
                    <span className="checkbox-mark"></span>
                    <span className="checkbox-label m-2">Female</span>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="gender"
                      value="Other"
                      onChange={(e) => {
                        setInput({ ...input, gender: e.target.value });
                      }}
                    />
                    <span className="checkbox-mark"></span>
                    <span className="checkbox-label m-1">Other</span>
                  </label>
                </div>
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover">
                    Already have an account ?
                  </a>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
