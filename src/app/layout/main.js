import React from "react";
import Question from "../components/Question";
import Option from "../components/Option";
import Respond from "../components/Respond";
import Score from "../components/Score";
import NewGame from "../components/NewGame";

export default function main() {
	return (
		<>
			<Question />
			<div>
				<Option />
				<Option />
				<Option />
				<Option />
			</div>
			<Respond />
			<Score />
			<NewGame />
		</>
	);
}
