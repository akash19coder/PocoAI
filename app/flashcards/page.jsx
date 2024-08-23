"use client";
import { useState } from "react";
import Header from "../../components/Header";
import { Button } from "../../components/ui/button";
import { HeroHighlight } from "../../components/ui/hero-highlight";
import { ExpandableCard } from "../../components/ui/ExpandableCard";

export default function FlashCards() {
  const [input, setInput] = useState("");
  const [flashcard, setFlashcard] = useState();
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("");

  const handleClick = async () => {
    setLoading(true); // Start loading
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        type: "user",
        text: input,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    let data = await response.json();
    data = data
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const flashcards = JSON.parse(data);
    setFlashcard(flashcards);
    setInput("");
    setLoading(false); // Stop loading when the data is received
  };

  return (
    <>
      <Header />
      <HeroHighlight>
        <div className="flex xs:min-w-[200px] md:min-w-[600px] bg-gray-400 p-2 rounded-md">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            type="text"
            className="flex-1 outline-none px-2 placeholder:text-black bg-transparent border-none text-black"
            placeholder="Enter keywords(cricket,space,batman,anime)"
          />
          {input !== "" && <Button onClick={handleClick}>Generate</Button>}
        </div>
        {loading && (
          <div className="text-white mt-4">
            Generating<span className="dot-flashing">...</span>
          </div>
        )}
        {flashcard && !loading && (
          <div className="mt-4 h-[60vh] overflow-y-scroll no-visible-scrollbar">
            <ExpandableCard cards={flashcard} />
          </div>
        )}
      </HeroHighlight>
    </>
  );
}
