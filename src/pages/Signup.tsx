import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(formData);

    // Later connect this to the backend registration endpoint.
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand">
          <div className="brand-icon">CL</div>

          <div>
            <h1>CreditLens Guard</h1>
            <p>Secure AI-powered credit insights</p>
          </div>
        </div>

        <div className="auth-heading">
          <h2>Create your account</h2>
          <p>Get secure access to CreditLens.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Smith"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupEmail">Email address</label>

            <input
              id="signupEmail"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupPassword">Password</label>

            <input
              id="signupPassword"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-button">
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;