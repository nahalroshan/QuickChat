import React from "react";

function Signup() {
  return (
    <>
      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:m-4">
            <h1 className="text-4xl font-bold">Create an account</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ maxHeight: "48vh", overflowY: "auto" }}>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="email"
                  placeholder="Username"
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
                      value="male"
                    />
                    <span className="checkbox-mark"></span>
                    <span className="checkbox-label m-2">Male</span>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="gender"
                      value="female"
                    />
                    <span className="checkbox-mark"></span>
                    <span className="checkbox-label m-2">Female</span>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="gender"
                      value="other"
                    />
                    <span className="checkbox-mark"></span>
                    <span className="checkbox-label m-1">Other</span>
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
