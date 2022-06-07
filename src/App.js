import React, { useState, useEffect } from "react";
import FlashcardList from "./components/FlashcardList";
import "./App.css";
import axios from "axios";

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
	useEffect(() => {
		axios.get(`https://opentdb.com/api.php?amount=10`).then((res) => {
			setFlashcards(
				res.data.results.map((questionItem, index) => {
					const answer = decodeString(questionItem.correct_answer);
					const options = [
						...questionItem.incorrect_answers.map((a) => decodeString(a)),
						answer,
					];
					return {
						id: `${index}-${Date.now()}`,
						question: decodeString(questionItem.question),
						answer: answer,
						options: options.sort(() => Math.random() - 0.5),
					};
				})
			);
		});
	}, []);

	function decodeString(str) {
		const textArea = document.createElement("textarea");
		textArea.innerHTML = str;
		return textArea.value;
	}

	const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD);
	return <FlashcardList flashcards={flashcards} />;
}

export default App;
