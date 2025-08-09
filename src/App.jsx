import React, { useState, useRef, useEffect } from "react";

export default function GreetingForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const emailRef = useRef(null);

  
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen  bg-blue-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-16 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Welcome Form
        </h1>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 text-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            ref={emailRef}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 text-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700">
            Hello,{" "}
            <span className="font-semibold text-blue-600">
              {fullName.trim() || "stranger"}
            </span>
            ! Your email is{" "}
            <span className="font-semibold text-green-600">
              {email || "not provided yet"}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
