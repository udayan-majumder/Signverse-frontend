"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  /* ── form submit handler */
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up authentication logic here
    console.log("Login attempted", { email, password });
  };

  return (
    <>
      {/* ── page-level styles injected as a <style> tag ── */}
      <style>{`
        /* Google Font — Roboto */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100vh;
          display: flex;
          align-items: stretch;
          font-family: 'Roboto', sans-serif;
          background: #fff;
          overflow: hidden;
        }

        /* ── LEFT PANEL ── */
        .login-left {
          flex: 0 0 50%;
          position: relative;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden; /* clips the left half of the circle — gives flat left edge */
        }

        /* A very large circle whose centre sits at the panel's left edge.
           overflow:hidden on the parent clips the left half — only the right
           curved arc is visible, exactly like the design reference. */
        .orange-circle {
          position: absolute;
          width: 1440px;
          height: 1440px;
          border-radius: 50%;
          background: linear-gradient(160deg, #fad4a8 0%, #f4895c 100%);
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
          z-index: 0;
          /* subtle shadow on the lower-right curved edge */
          box-shadow: 6px 16px 36px rgba(80, 80, 80, 0.32);
        }

        .left-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .greeting-text {
          text-align: left;
          align-self: flex-start;
          margin-left: 16px;
          margin-bottom: -6px;
        }

        /* First line — medium weight, friendly */
        .greeting-text .line1 {
          display: block;
          font-size: 1.75rem;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: 0.5px;
          line-height: 1.4;
          font-family: 'Roboto', sans-serif;
        }

        /* Second line — heavy italic, larger, commanding */
        .greeting-text .line2 {
          display: block;
          font-size: 2.4rem;
          font-weight: 900;
          font-style: italic;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          line-height: 1.2;
          font-family: 'Roboto', sans-serif;
        }

        /* 'sign' — very subtle warm glow pulse, stays orange, barely noticeable */
        @keyframes softGlow {
          0%, 100% { text-shadow: 0 0 0px rgba(244, 124, 60, 0);   }
          50%       { text-shadow: 0 0 10px rgba(244, 124, 60, 0.45); }
        }

        .greeting-text .highlight {
          color: #f47c3c;
          font-style: italic;
          font-weight: 900;
          animation: softGlow 3s ease-in-out infinite;
        }

        /* Mascot slightly lower via positive margin-top */
        .mascot-img {
          width: 310px;
          height: auto;
          position: relative;
          z-index: 2;
          margin-top: 18px;
          filter: drop-shadow(0 16px 32px rgba(0,0,0,0.13));
          animation: floatBunny 3s ease-in-out infinite;
        }

        @keyframes floatBunny {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        /* ── RIGHT PANEL ── */
        .login-right {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 80px;
          background: #fff;
          gap: 0;
          font-family: 'Roboto', sans-serif;
        }

        /* Brand logo image */
        .brand-logo-img {
          width: 200px;
          height: auto;
          object-fit: contain;
          margin-bottom: 6px;
        }

        .brand-tagline {
          font-size: 0.95rem;
          color: #777;
          font-style: italic;
          margin-bottom: 36px;
        }

        /* ── FORM ── */
        .login-form {
          width: 100%;
          max-width: 360px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          border: 1.5px solid #f47c3c;
          border-radius: 10px;
          padding: 12px 16px;
          gap: 12px;
          background: #fff;
          transition: box-shadow 0.2s ease;
        }

        .input-wrapper:focus-within {
          box-shadow: 0 0 0 3px rgba(244, 124, 60, 0.15);
        }

        .input-icon {
          color: #f47c3c;
          flex-shrink: 0;
        }

        /* Mobile-only logo inside the orange panel (hidden on desktop) */
        .mobile-logo-top {
          display: none;
        }

        .input-wrapper input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 0.9rem;
          font-family: 'Roboto', sans-serif;
          color: #333;
          background: transparent;
        }

        .input-wrapper input::placeholder {
          color: #aaa;
        }

        .password-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #aaa;
          display: flex;
          align-items: center;
          padding: 0;
          transition: color 0.2s;
        }

        .password-toggle:hover { color: #f47c3c; }

        .forgot-link {
          text-align: right;
          font-size: 0.82rem;
          color: #555;
          text-decoration: none;
          margin-top: -8px;
          cursor: pointer;
        }

        .forgot-link:hover { color: #f47c3c; }

        /* Login button */
        .btn-login {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #f47c3c, #f9a560);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          font-family: 'Nunito', sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 4px 16px rgba(244,124,60,0.35);
        }

        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(244,124,60,0.45);
        }

        .btn-login:active { transform: translateY(0); }

        /* OR divider */
        .or-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #aaa;
          font-size: 0.82rem;
          margin: 4px 0;
        }

        .or-divider::before,
        .or-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e8e8e8;
        }

        /* Social buttons */
        .btn-social {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 20px;
          border: 1.5px solid #e0e0e0;
          border-radius: 50px;
          background: #fff;
          font-size: 0.9rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 600;
          color: #333;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
        }

        .btn-social:hover {
          border-color: #f47c3c;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }

        .signup-text {
          font-size: 0.85rem;
          color: #666;
          margin-top: 8px;
          text-align: center;
        }

        .signup-text a {
          color: #f47c3c;
          font-weight: 700;
          text-decoration: none;
        }

        .signup-text a:hover { text-decoration: underline; }

        /* ── MOBILE (≤ 768 px) ── */
        @media (max-width: 768px) {

          .login-root {
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
          }

          .login-left {
            flex: 0 0 32vh;
            width: 100%;
            background: linear-gradient(160deg, #fad4a8 0%, #f4895c 100%);
            border-radius: 0 0 28px 28px;
            padding: 8px 16px 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .orange-circle { display: none; }

          .mobile-logo-top {
            display: block;
            width: 90px;
            height: auto;
            margin: 0 auto 4px;
          }

          .left-content {
            align-items: center;
            padding-bottom: 0;
            gap: 0;
          }

          .greeting-text {
            text-align: center;
            align-self: center;
            margin-left: 0;
            margin-bottom: 1px;
          }

          .greeting-text .line1 { font-size: 0.9rem; }
          .greeting-text .line2 { font-size: 1.1rem; }

          .mascot-img {
            width: 100px;
            margin-top: 0;
          }

          .login-right {
            flex: 1;
            width: 100%;
            padding: 14px 18px 12px;
            align-items: stretch;
            overflow-y: auto;
          }

          .brand-logo-img { display: none; }
          .brand-tagline   { display: none; }

          .login-form {
            max-width: 100%;
            width: 100%;
            margin-top: 0;
            gap: 8px;
          }

          .input-wrapper {
            padding: 8px 12px;
          }

          .btn-login {
            padding: 10px;
            font-family: 'Roboto', sans-serif;
          }

          .or-divider {
            margin: 2px 0;
            font-size: 0.78rem;
          }

          .btn-social {
            padding: 8px 14px;
            font-size: 0.82rem;
          }

          .signup-text {
            margin-top: 4px;
            font-size: 0.78rem;
          }
        }
      `}</style>

      <div className="login-root">

        {/* ══════════════ LEFT PANEL ══════════════ */}
        <div className="login-left">
          {/* Orange circle sits behind everything */}
          <div className="orange-circle" />

          <div className="left-content">
            {/* Logo — only visible on mobile, sits at top of orange panel */}
            <Image
              src="/SignVerse logo.png"
              alt="Signverse"
              width={160}
              height={44}
              className="mobile-logo-top"
              priority
            />

            {/* Greeting text */}
            <div className="greeting-text">
              <span className="line1">Hello again,</span>
              <span className="line2">
                It&apos;s <span className="highlight">sign</span> O&apos;clock!
              </span>
            </div>

            {/* Bunny mascot */}
            <Image
              src="/bunny mascot smiling.png"
              alt="Signverse bunny mascot smiling"
              width={310}
              height={330}
              className="mascot-img"
              priority
            />
          </div>
        </div>

        {/* ══════════════ RIGHT PANEL ══════════════ */}
        <div className="login-right">

          {/* Brand — logo image */}
          <Image
            src="/SignVerse logo.png"
            alt="Signverse"
            width={220}
            height={60}
            className="brand-logo-img"
            priority
          />
          <p className="brand-tagline">Let&apos;s get you signed in</p>

          {/* Login form */}
          <form className="login-form" onSubmit={handleSubmit} noValidate>

            {/* Email input */}
            <div className="input-wrapper">
              <span className="input-icon">
                {/* Envelope icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            {/* Password input */}
            <div className="input-wrapper">
              <span className="input-icon">
                {/* Lock icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              {/* Show / hide password toggle */}
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  /* Eye-off icon */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  /* Eye icon */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            {/* Forgot password */}
            <Link href="/auth/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>

            {/* Login button */}
            <button type="submit" className="btn-login">
              Login
            </button>

            {/* OR divider */}
            <div className="or-divider">Or login with</div>

            {/* Google */}
            <button type="button" className="btn-social">
              {/* Google "G" SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Login with Google
            </button>

            {/* Apple */}
            <button type="button" className="btn-social">
              {/* Apple logo SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Login with Apple
            </button>

          </form>

          {/* Sign up link */}
          <p className="signup-text">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register">Sign up now</Link>
          </p>
        </div>
      </div>
    </>
  );
}