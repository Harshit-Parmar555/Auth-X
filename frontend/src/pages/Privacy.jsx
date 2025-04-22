import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-dvh px-6 sm:px-10 md:px-20 py-12 bg-black text-white font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center font-[Inter_Tight]">
          Privacy Policy
        </h1>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
          This Privacy Policy explains how <strong>Auth-X</strong> handles your
          data. As a developer-first open-source authentication system, privacy
          and security are built into the foundation.
        </p>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            1. Data Collection
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Auth-X collects only the essential information required for
            authentication:
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-1 mt-2 text-sm sm:text-base">
            <li>Email address</li>
            <li>Password (securely hashed using bcrypt)</li>
            <li>Token-based session identifiers (JWT)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            2. Data Usage
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Auth-X only uses your data to authenticate and authorize users. No
            analytics, third-party tracking, or profiling is performed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            3. Third-Party Services
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            During development, <strong>Mailtrap</strong> is used to handle test
            emails securely. No data is shared with external services beyond
            what is necessary for functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            4. Data Security
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Auth-X uses environment variables to manage sensitive credentials.
            Passwords are never stored in plain text. JWT tokens are signed with
            secure secrets.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            5. Developer Responsibility
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            While Auth-X provides a secure base, production use demands proper
            deployment practices. As the implementer, you are responsible for
            configuring HTTPS, CORS, cookie policies, and secure hosting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            6. Open Source Ethics
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Auth-X does not collect or store any analytics or telemetry. You
            have full control over your data and code.
          </p>
        </section>

        <footer className="text-center mt-12 text-sm text-zinc-500">
          Built with developer privacy in mind by{" "}
          <span className="text-white font-semibold">Harshit Parmar</span> •{" "}
          <a
            href="mailto:parmarharshit441@gmail.com"
            className="text-blue-500 underline"
          >
            Contact Me
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
