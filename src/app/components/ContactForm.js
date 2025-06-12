"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    business: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add submission logic (API call, email, etc.)
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mx-auto px-10 md:mx-0 bg-primary rounded-xl gap-4 w-[95vw] md:w-[50vw] lg:max-w-[800px] ">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <input
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder = "First Name*"
            className="mt-1 w-full border-b-2 border-secondary text-secondary p-2"
          />
        </div>
        <div className="flex-1">
          <input
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder = "Last Name*"
            className="mt-1 w-full border-b-2 border-secondary text-secondary p-2"
          />
        </div>
      </div>

      <div>
        <input
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder = "Phone Number*"
          className="mt-1 w-full border-b-2 border-secondary text-secondary p-2"
        />
      </div>

      <div>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder = "Email Address*"
          className="mt-1 w-full border-b-2 border-secondary text-secondary p-2"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <input
            name="business"
            type="text"
            value={formData.business}
            onChange={handleChange}
            required
            placeholder = "Business/Organisation name*"
            className="mt-1 w-full border-b-2 border-secondary text-secondary p-2"
          />
        </div>

        <div className="flex-1">
          <input
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder = "Website URL"
            className="mt-1 w-full border-b-2 border-secondary text-secondary p-2"
          />
        </div>
      </div>
      <div>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can help"
          className="mt-1 w-full border-b-2 border-secondary text-secondary p-2"
        />
      </div>
      <button className ="btn btn-primary w-36 mx-auto border-2 border-secondary text-secondary text-xl rounded rounded-full md:mx-0 py-1 hover:bg-secondary hover:text-primary lg:text-2xl lg:p-5 lg:self-end">Submit</button>
    </form>
  );
}
