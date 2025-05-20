import React, { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, message }),
      });
      if (response.ok) {
        alert("Письмо успешно отправлено");
        setSubject("");
        setMessage("");
      } else {
        alert("Ошибка при отправке письма");
      }
    } catch (error) {
      console.error("Ошибка при отправке письма:", error);
      alert("Ошибка при отправке письма");
    }
  };

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="">
        <h2 className="text-4xl font-bold mb-10 mt-20">Есть вопрос?</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-lg font-medium mb-2">
              Тема
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Сообщение
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="6"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#ff0000] font-semibold text-white rounded hover:bg-[#7868b3]"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
