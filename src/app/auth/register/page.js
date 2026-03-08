"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  /* ── form submit handler */
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up registration logic here
    console.log("Register attempted", { name, email, password });
  };

  return (
    <>
      {/* ── page-level styles (copied from login, scoped to register-root) ── */}
      <style>{`
        /* Google Font — Roboto */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .register-root {
          min-height: 100vh;
          display: flex;
          align-items: stretch;
          font-family: 'Roboto', sans-serif;
          background: #fff;
          overflow: hidden;
        }

        /* ── LEFT PANEL ── */
        .reg-left {
          flex: 0 0 50%;
          position: relative;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Same large circle technique as login — flat left edge, curved right arc */
        .reg-orange-circle {
          position: absolute;
          width: 1440px;
          height: 1440px;
          border-radius: 50%;
          background: linear-gradient(160deg, #fad4a8 0%, #f4895c 100%);
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
          z-index: 0;
          box-shadow: 6px 16px 36px rgba(80, 80, 80, 0.32);
        }

        .reg-left-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .reg-greeting-text {
          text-align: left;
          align-self: flex-start;
          margin-left: 16px;
          margin-bottom: -6px;
        }

        /* First line — medium weight */
        .reg-greeting-text .line1 {
          display: block;
          font-size: 1.75rem;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: 0.5px;
          line-height: 1.4;
          font-family: 'Roboto', sans-serif;
        }

        /* Second line — heavy italic */
        .reg-greeting-text .line2 {
          display: block;
          font-size: 2.4rem;
          font-weight: 900;
          font-style: italic;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          line-height: 1.2;
          font-family: 'Roboto', sans-serif;
        }

        /* 'sign' — subtle warm glow pulse */
        @keyframes regSoftGlow {
          0%, 100% { text-shadow: 0 0 0px rgba(244, 124, 60, 0);   }
          50%       { text-shadow: 0 0 10px rgba(244, 124, 60, 0.45); }
        }

        .reg-greeting-text .highlight {
          color: #f47c3c;
          font-style: italic;
          font-weight: 900;
          animation: regSoftGlow 3s ease-in-out infinite;
        }

        /* Mascot */
        .reg-mascot-img {
          width: 310px;
          height: auto;
          position: relative;
          z-index: 2;
          margin-top: 18px;
          filter: drop-shadow(0 16px 32px rgba(0,0,0,0.13));
          animation: regFloatBunny 3s ease-in-out infinite;
        }

        @keyframes regFloatBunny {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        /* ── RIGHT PANEL ── */
        .reg-right {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 80px;
          background: #fff;
          gap: 0;
          font-family: 'Roboto', sans-serif;
        }

        /* Brand logo image */
        .reg-brand-logo-img {
          width: 200px;
          height: auto;
          object-fit: contain;
          margin-bottom: 6px;
        }

        .reg-brand-tagline {
          font-size: 0.95rem;
          color: #777;
          font-style: italic;
          margin-bottom: 30px;
        }

        /* ── FORM ── */
        .reg-form {
          width: 100%;
          max-width: 360px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .reg-input-wrapper {
          display: flex;
          align-items: center;
          border: 1.5px solid #f47c3c;
          border-radius: 10px;
          padding: 12px 16px;
          gap: 12px;
          background: #fff;
          transition: box-shadow 0.2s ease;
        }

        .reg-input-wrapper:focus-within {
          box-shadow: 0 0 0 3px rgba(244, 124, 60, 0.15);
        }

        .reg-input-icon {
          color: #f47c3c;
          flex-shrink: 0;
        }

        .reg-input-wrapper input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 0.9rem;
          font-family: 'Roboto', sans-serif;
          color: #333;
          background: transparent;
        }

        .reg-input-wrapper input::placeholder {
          color: #aaa;
        }

        .reg-password-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #aaa;
          display: flex;
          align-items: center;
          padding: 0;
          transition: color 0.2s;
        }

        .reg-password-toggle:hover { color: #f47c3c; }

        /* Register button */
        .reg-btn-submit {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #f47c3c, #f9a560);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          font-family: 'Roboto', sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 4px 16px rgba(244,124,60,0.35);
          margin-top: 4px;
        }

        .reg-btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(244,124,60,0.45);
        }

        .reg-btn-submit:active { transform: translateY(0); }

        /* OR divider */
        .reg-or-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #aaa;
          font-size: 0.82rem;
          margin: 4px 0;
        }

        .reg-or-divider::before,
        .reg-or-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e8e8e8;
        }

        /* Social buttons */
        .reg-btn-social {
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

        .reg-btn-social:hover {
          border-color: #f47c3c;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }

        .reg-bottom-text {
          font-size: 0.85rem;
          color: #666;
          margin-top: 10px;
          text-align: center;
        }

        .reg-bottom-text a {
          color: #f47c3c;
          font-weight: 700;
          text-decoration: none;
        }

        .reg-bottom-text a:hover { text-decoration: underline; }

        /* Mobile-only logo — hidden on desktop */
        .reg-mobile-logo-top { display: none; }

        /* ── MOBILE (≤ 768 px) ── */
        @media (max-width: 768px) {

          .register-root {
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
          }

          .reg-left {
            flex: 0 0 30vh;
            width: 100%;
            background: linear-gradient(160deg, #fad4a8 0%, #f4895c 100%);
            border-radius: 0 0 28px 28px;
            padding: 8px 16px 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .reg-orange-circle { display: none; }

          .reg-mobile-logo-top {
            display: block;
            width: 90px;
            height: auto;
            margin: 0 auto 3px;
          }

          .reg-left-content {
            align-items: center;
            padding-bottom: 0;
            gap: 0;
          }

          .reg-greeting-text {
            text-align: center;
            align-self: center;
            margin-left: 0;
            margin-bottom: 1px;
          }

          .reg-greeting-text .line1 { font-size: 0.85rem; }
          .reg-greeting-text .line2 { font-size: 1.05rem; }

          .reg-mascot-img {
            width: 95px;
            margin-top: 0;
          }

          .reg-right {
            flex: 1;
            width: 100%;
            padding: 12px 18px 10px;
            align-items: stretch;
            overflow-y: auto;
          }

          .reg-brand-logo-img { display: none; }
          .reg-brand-tagline   { display: none; }

          .reg-form {
            max-width: 100%;
            width: 100%;
            margin-top: 0;
            gap: 7px;
          }

          .reg-input-wrapper {
            padding: 8px 12px;
          }

          .reg-btn-submit {
            padding: 10px;
            margin-top: 2px;
          }

          .reg-or-divider {
            margin: 2px 0;
            font-size: 0.78rem;
          }

          .reg-btn-social {
            padding: 8px 14px;
            font-size: 0.82rem;
          }

          .reg-bottom-text {
            margin-top: 4px;
            font-size: 0.78rem;
          }
        }
      `}</style>

      <div className="register-root">

        {/* ══════════════ LEFT PANEL ══════════════ */}
        <div className="reg-left">
          {/* Orange semicircle — same as login */}
          <div className="reg-orange-circle" />

          <div className="reg-left-content">
            {/* Logo — only visible on mobile, sits at top of orange panel */}
            <Image
              src="/SignVerse logo.png"
              alt="Signverse"
              width={160}
              height={44}
              className="reg-mobile-logo-top"
              priority
            />

            {/* Greeting text — adapted for new users */}
            <div className="reg-greeting-text">
              <span className="line1">Welcome aboard,</span>
              <span className="line2">
                Time to <span className="highlight">sign</span> up!
              </span>
            </div>

            {/* Bunny mascot */}
            <Image
              src="/bunny mascot smiling.png"
              alt="Signverse bunny mascot smiling"
              width={310}
              height={330}
              className="reg-mascot-img"
              priority
            />
          </div>
        </div>

        {/* ══════════════ RIGHT PANEL ══════════════ */}
        <div className="reg-right">

          {/* Brand — logo image */}
          <Image
            src="/SignVerse logo.png"
            alt="Signverse"
            width={220}
            height={60}
            className="reg-brand-logo-img"
            priority
          />
          <p className="reg-brand-tagline">Create your account</p>

          {/* Register form */}
          <form className="reg-form" onSubmit={handleSubmit} noValidate>

            {/* Full Name input */}
            <div className="reg-input-wrapper">
              <span className="reg-input-icon">
                {/* Person icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
            </div>

            {/* Email input */}
            <div className="reg-input-wrapper">
              <span className="reg-input-icon">
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
            <div className="reg-input-wrapper">
              <span className="reg-input-icon">
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
                autoComplete="new-password"
                required
              />
              {/* Show / hide password toggle */}
              <button
                type="button"
                className="reg-password-toggle"
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

            {/* Register button */}
            <button type="submit" className="reg-btn-submit">
              Register
            </button>

            {/* OR divider */}
            <div className="reg-or-divider">Or register with</div>

            {/* Register with Google */}
            <button type="button" className="reg-btn-social">
              {/* Google "G" SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Register with Google
            </button>

            {/* Register with Apple */}
            <button type="button" className="reg-btn-social">
              {/* Apple logo SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Register with Apple
            </button>

          </form>

          {/* Already have an account — navigate to login */}
          <p className="reg-bottom-text">
            Already have an account?{" "}
            <Link href="/auth/login">Login now</Link>
          </p>
        </div>
      </div>
    </>
  );
}
