import React, { useState } from "react";
import "./Quiz.css";

const Quiz = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numQuestions, setNumQuestions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, category, difficulty, numQuestions });
  };

  return (
    <div className="container">
      <h1>Set up your Quiz</h1>
      <hr />

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          gap: "10px",
        }}
      >
        <input
          style={{ padding: "10px" }}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          style={{ padding: "10px" }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </select>
        <select
          style={{ padding: "10px" }}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input
          style={{ padding: "10px" }}
          type="number"
          placeholder="Number of Questions"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
        />
        <button
          style={{ padding: "10px", background: "#f50157" }}
          type="submit"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default Quiz;
