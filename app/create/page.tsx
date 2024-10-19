"use client";
import { encodeString } from "@/utils";
import copy from "clipboard-copy";

export default function Page() {
  return (
    <div>
      <h1>Create</h1>
      <p>Enter a message</p>
      <input
        className="border border-gray-300 rounded p-2 w-full"
        type="text"
        id="message"
      />
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          const message = document.getElementById(
            "message"
          ) as HTMLInputElement;
          const encodedMessage = encodeString(message.value);
          const url = `${window.location.origin}/view?d=${encodeURIComponent(
            encodedMessage
          )}`;
          await copy(url);
          alert(url);
        }}
      >
        Get Link
      </button>
    </div>
  );
}
