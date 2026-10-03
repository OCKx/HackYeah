import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Temporary frontend-only login
    console.log({
      email,
      password,
    });

    // Later we will replace this with the backend authentication API.
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
          <h2>Welcome back</h2>
          <p>Sign in to access your CreditLens dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="primary-button">
            Sign in
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Create account</Link>
        </p>

        <div className="security-note">
          <span>🛡️</span>
          <p>
            Protected by CreditLens Guard authentication and security controls.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;