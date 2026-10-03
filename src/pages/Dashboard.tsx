import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="brand dashboard-brand">
          <div className="brand-icon">CL</div>

          <div>
            <h1>CreditLens</h1>
            <p>Protected by CreditLens Guard</p>
          </div>
        </div>

        <div className="header-actions">
          <span className="security-status">
            <span className="status-dot"></span>
            Guard Active
          </span>

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="welcome-section">
          <div>
            <p className="section-label">CREDIT DECISION CENTER</p>

            <h2>Understand your credit decision</h2>

            <p>
              CreditLens uses AI to explain simulated credit decisions while
              CreditLens Guard protects sensitive information and controls AI
              interactions.
            </p>
          </div>

          <button className="primary-button application-button">
            Analyze Application
          </button>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🛡️</div>
            <p>Security Layer</p>
            <h3>Active</h3>
            <span>All AI requests are protected</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔒</div>
            <p>PII Protection</p>
            <h3>Enabled</h3>
            <span>Sensitive information is inspected</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🤖</div>
            <p>AI Access</p>
            <h3>Controlled</h3>
            <span>Policy-based AI interactions</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <p>Audit Logging</p>
            <h3>Running</h3>
            <span>Security events are recorded</span>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-card credit-card">
            <div className="card-header">
              <div>
                <p className="section-label">LATEST ANALYSIS</p>
                <h3>Credit Decision</h3>
              </div>

              <span className="declined-badge">DECLINED</span>
            </div>

            <div className="risk-score">
              <div>
                <span>Predicted default probability</span>
                <strong>28.7%</strong>
              </div>

              <div>
                <span>Decision threshold</span>
                <strong>22.0%</strong>
              </div>
            </div>

            <div className="divider"></div>

            <h4>Main contributing factors</h4>

            <div className="factor-list">
              <div className="factor negative">
                <span>↑</span>
                Existing debt
              </div>

              <div className="factor negative">
                <span>↑</span>
                Recent repayment behaviour
              </div>

              <div className="factor negative">
                <span>↑</span>
                Loan-to-income ratio
              </div>

              <div className="factor positive">
                <span>↓</span>
                Stable employment
              </div>
            </div>
          </div>

          <div className="dashboard-card ask-card">
            <p className="section-label">AI EXPLANATION</p>

            <h3>Ask CreditLens</h3>

            <p>
              Ask questions about the factors affecting the simulated credit
              decision.
            </p>

            <div className="suggested-question">
              Why was my application declined?
            </div>

            <div className="suggested-question">
              What can improve my credit profile?
            </div>

            <div className="suggested-question">
              How does my debt affect this decision?
            </div>

            <div className="chat-input">
              <input type="text" placeholder="Ask CreditLens a question..." />

              <button>Send</button>
            </div>

            <small>
              🛡️ Your request will be inspected by CreditLens Guard before
              reaching the AI system.
            </small>
          </div>
        </section>

        <section className="guard-section">
          <div className="guard-heading">
            <div>
              <p className="section-label">SECURITY CONTROLS</p>
              <h3>CreditLens Guard</h3>
            </div>

            <span className="active-badge">● All systems operational</span>
          </div>

          <div className="guard-controls">
            <span>✓ Authentication</span>
            <span>✓ PII Detection</span>
            <span>✓ Prompt Injection</span>
            <span>✓ Access Control</span>
            <span>✓ Budget Controls</span>
            <span>✓ Output Validation</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;