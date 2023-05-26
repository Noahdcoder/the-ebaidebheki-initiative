import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error occurred while sending form data:", error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form
      className="w-full mx-auto p-6 space-y-8 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <label htmlFor="name" className="text-gray-800">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flamingo"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-4">
          <label htmlFor="email" className="text-gray-800">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flamingo"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mb-4 space-y-4">
        <label htmlFor="message" className="text-gray-800">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flamingo"
          rows={4}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-flamingo hover:bg-supernova text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-flamingo"
      >
        Submit
      </button>
      {submitted ? (
        <div className="text-green-500 font-bold">
          Your message has been sent successfully. You will get a feedback soon!
        </div>
      ) : null}
    </form>
  );
};

export default ContactForm;
