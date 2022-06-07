import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import "./App.css";

const SAMPLE_FLASHCARD = [
	{
		id: 1,
		question: "What is 2 + 2?",
		answer: "4",
		options: ["2", "3", "4", "5"],
	},
	{
		id: 2,
		question: "Question",
		answer: "Answer",
		options: ["Answer1", "Answer2", "Answer3", "Answer4"],
	},
];

function App() {
	const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD);
	return <FlashcardList flashcards={flashcards} />;
}

export default App;
