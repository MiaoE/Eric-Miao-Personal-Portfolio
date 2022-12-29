import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const emailCopy = () => {
    navigator.clipboard.writeText("ericxmiao@gmail.com")
    .then(() => alert("Email copied to clipboard"), () => alert("Failed to copy email"));
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative bg-homebg bg-no-repeat bg-fixed bg-center w-full h-screen">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/4 sm:w-1/3 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-row items-end justify-center relative">
          <button onClick={emailCopy} className="container w-16 h-16 bg-gray-200 bg-opacity-30 hover:bg-opacity-70 rounded-full md:mr-8 sm:mr-2 justify-items-center">
            <img src="/assets/emailicon.png" className="object-contain" />
          </button>
          <a href="https://github.com/MiaoE" target="_blank" className="container w-16 h-16 bg-gray-200 bg-opacity-30 hover:bg-opacity-70 rounded-full md:mr-8 sm:mr-2 justify-items-center">
            <img src="/assets/githubicon.png" className="m-auto" />
          </a>
          <a href="https://www.linkedin.com/in/eric-miao-499384122/" target="_blank" className="container w-16 h-16 bg-gray-200 bg-opacity-30 hover:bg-opacity-70 rounded-full md:mr-8 sm:mr-2 ">
            <img src="/assets/linkedinicon.png" className="w-12 h-12 m-2" />
          </a>
        </div>
        <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-gray-800 bg-opacity-30 p-3 rounded-xl">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Send Me A Message
          </h2>
          <p className="leading-relaxed mb-5">
            Thank you for visiting my website. Please note that this form is currently unavailable for use 
            and that I will not receive your messages. Please copy my email with the button on bottom left
            and send me an email directly.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-100">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-700 focus:ring-1 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-700 focus:ring-1 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-700 focus:ring-1 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
