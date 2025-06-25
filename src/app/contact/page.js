import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto mt-10 p-8 rounded-2xl">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Get in Touch
      </h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        I'd love to hear from you! Whether you have a question, suggestion, or just want to connect — feel free to reach out.
      </p>

      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300">
          📧 Email:
          <a
            className="text-blue-500 hover:underline ml-1"
            href="mailto:arifbasha559@gmail.com"
          >
            arifbasha559@gmail.com
          </a>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          🌍 Location: Hyderabad, India
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          🕒 Available: Mon – Fri, 9 AM to 6 PM IST
        </p>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          You can also connect with me on social media:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              className="text-blue-500 hover:underline"
              href="https://www.linkedin.com/in/arifbasha559/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-blue-500 hover:underline"
              href="https://www.github.com/Arifbasha559/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-blue-500 hover:underline"
              href="https://www.x.com/arifbasha559/"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (formerly Twitter)
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Quick Contact Form (Coming Soon)
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A contact form will be available here soon so you can send me a message directly from the site.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Additional Information
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to check out my blog for the latest updates on my projects and thoughts on technology.
        </p>
        <a
          className="text-blue-500 hover:underline"
          href="/blog"
        >
          Visit Blog
        </a>
      </div>

      <p className="text-gray-700 dark:text-gray-300">
        Looking forward to connecting with you!
        <br />
        <span className="font-semibold">– Arif Basha</span>
      </p>
    </div>
  );
};

export default Contact;

