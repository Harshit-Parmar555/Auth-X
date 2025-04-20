import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen px-6 sm:px-10 md:px-20 py-12 bg-black text-white font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center font-[Inter_Tight]">
          Terms of Use
        </h1>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
          Welcome to <strong>Auth-X</strong> — an open-source MERN stack
          authentication system built by a developer, for developers. By using
          or integrating Auth-X, you agree to the following terms.
        </p>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            1. Purpose
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Auth-X is intended for learning, prototyping, and production-ready
            integrations. It provides a complete auth system with email
            verification and password reset using modern practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            2. Fair Use
          </h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm sm:text-base">
            <li>Do not use Auth-X for any malicious or unethical purposes.</li>
            <li>Do not falsely claim Auth-X as your own original work.</li>
            <li>
              Attribution is appreciated if you use it in public or commercial
              projects.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            3. Security Disclaimer
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            While Auth-X follows security best practices (JWT, bcrypt, env
            config), the responsibility to secure production deployments lies
            with you. Misconfiguration or misuse is not the responsibility of
            the creator.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            4. Modifications & Contributions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            You’re welcome to fork, modify, and contribute to the project. Pull
            requests and suggestions on GitHub are encouraged!
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
            5. Limitation of Liability
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Auth-X is provided “as-is” without warranties. The developer is not
            liable for any damage, data loss, or misuse resulting from its use.
          </p>
        </section>

        <footer className="text-center mt-12 text-sm text-zinc-500">
          Built by{" "}
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

export default Terms;
