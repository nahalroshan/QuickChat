import React from "react";
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
  return (
    <div className="hero min-h-screen  bg-gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:m-4">
          <h1 className="text-5xl font-bold">Login Here!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <a href="/signup" className="label-text-alt link link-hover">
                Don't have an account ? 
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
