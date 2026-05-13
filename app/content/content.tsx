"use client";

import { useState } from "react";

export default function CONTENT() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {

    const email = "abdelwahabmohammedbis@gmail.com";

    const subject = encodeURIComponent("JOP OFFER Abdelwahab Website");

    const body = encodeURIComponent(
      `Name: ${name}
Phone: ${phone}

Description:
${description}`
    );
window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">

      <div className="inputs">
        <label>Name</label>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Phone</label>
        <input
          placeholder="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Description</label>
        <input
          className="description"
          placeholder="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="explain">
        <h2>Lets Connect</h2>
        <p>
          If you have an idea or a project that you’d like to collaborate on,
          please share your contact details along with a brief description.
        </p>

        <button
          style={{ width: "50%" , backgroundColor:"purple"}}
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>

    </section>
  );
}