import React, { useState, useEffect, useRef } from "react";

function Flashcard({ flashcard }) {
	const [flip, setFlip] = useState(false);
	const [height, setHeight] = useState("initial");

	const frontEl = useRef();
	const backEl = useRef();

	const setMaxHeight = () => {
		const frontHeight = frontEl.current.getBoundingClientRect().height;
		const backheight = backEl.current.getBoundingClientRect().height;
		setHeight(Math.max(frontHeight, backheight, 100));
	};

	useEffect(setMaxHeight, [
		flashcard.question,
		flashcard.answer,
		flashcard.options,
	]);

	useEffect(() => {
		window.addEventListener("resize", setMaxHeight);
		return () => window.removeEventListener("resize", setMaxHeight);
	}, []);
	return (
		<div
			style={{ height: height }}
			className={`card ${flip ? "flip" : ""}`}
			onClick={() => setFlip(!flip)}
		>
			<div className="front" ref={frontEl}>
				{flashcard.question}
				<div className="flashcard-options">
					{flashcard.options.map((option) => (
						<div key={option}>{option}</div>
					))}
				</div>
			</div>
			<div className="back" ref={backEl}>
				{flashcard.answer}
			</div>
		</div>
	);
}

export default Flashcard;
