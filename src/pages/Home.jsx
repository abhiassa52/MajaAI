import { useState } from "react";

import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";

function Home() {
  const [messages, setMessages] = useState([
    {
      message: "Hallo selamat datang di MajaAI",
      role: "ai",
    },
  ]);
  const [userTyping, setUserTyping] = useState("");
  const [userInput, setUserInput] = useState("");

  const typing = (e) => {
    setUserTyping(e.target.value);
  };

  const send = () => {
    setUserInput(userTyping);
    setMessages([...messages, { message: userInput, role: "user" }]);
  };

  return (
    <>
      <Navbar />
      <main className="px-5">
        <div className="flex flex-col gap-5">
          {messages.map((message) => {
            if (message.role == "user") {
              return (
                <>
                  <div className="translate-x-44 bg-gray-600 max-w-[50%] p-3 rounded-xl">
                    <p className="text-sm text-white">{message.message}</p>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="bg-gray-600 max-w-[50%] p-3 rounded-xl">
                    <p className="text-sm text-white">{message.message}</p>
                  </div>
                </>
              );
            }
          })}
        </div>
        <div className="fixed bottom-5 left-5 right-5 flex justify-center gap-[2%]">
          <Input
            type="text"
            name="userInput"
            onChange={typing}
            value={userTyping}
            placeholder="Ketik sesuatu..."
            className="w-[85%]"
          />
          <Button
            onClick={send}
            className="bg-gradient-to-tr from-gray-600 to-gray-500 w-[13%] rounded-xl"
          >
            <i className="bi bi-stars text-lg text-white"></i>
          </Button>
        </div>
      </main>
    </>
  );
}

export default Home;
