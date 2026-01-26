import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label, TextInput, Textarea } from "flowbite-react";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hj5qs2c",
        "template_85a5c0x",
        formRef.current,
        "JPxnVBX7eA7fyPhF9"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full max-w-md mx-auto flex flex-col gap-5"
    >
      {/* Email */}
      <div>
        <Label htmlFor="email" value="Email" />
        <TextInput
          id="email"
          name="email"
          type="email"
          required
          placeholder="Please enter your email"
        />
      </div>

      {/* Mobile */}
      <div>
        <Label htmlFor="mobile" value="Mobile" />
        <TextInput
          id="mobile"
          name="mobile"
          type="tel"
          required
          placeholder="Please enter your mobile number"
        />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" value="Message" />
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Enter your message"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-[#62BA1B] text-white px-4 py-2 rounded hover:bg-[#3F8E00] transition w-full mb-20"
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
