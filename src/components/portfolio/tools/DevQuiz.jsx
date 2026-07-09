import React from "react";
import Quiz from "./Quiz";

const QUESTIONS = [
  {
    question: "What does 'idempotent' mean for an API endpoint?",
    options: [
      "It requires authentication",
      "Calling it multiple times has the same effect as calling it once",
      "It only accepts JSON",
      "It runs asynchronously",
    ],
    answer: 1,
    explanation: "Idempotency means repeat requests (like retries after a timeout) won't cause duplicate side effects — critical for reliable APIs.",
  },
  {
    question: "In React, what triggers a component to re-render?",
    options: [
      "Refreshing the whole browser tab",
      "A change in state or props",
      "Only when the page first loads",
      "Adding a new CSS class in the stylesheet",
    ],
    answer: 1,
    explanation: "React re-renders a component whenever its state or props change, so the UI stays in sync with data.",
  },
  {
    question: "What's a practical way to use an AI coding assistant safely on a real project?",
    options: [
      "Paste your entire production database credentials into the prompt for context",
      "Never review AI-generated code before merging it",
      "Use it for scaffolding/boilerplate, then review, test, and understand the code before shipping",
      "Only use it for writing commit messages",
    ],
    answer: 2,
    explanation: "AI tools speed up development, but code should still be reviewed and tested — treat AI output like a draft from a junior dev, not a final answer.",
  },
  {
    question: "What is the main benefit of using environment variables for API keys instead of hardcoding them?",
    options: [
      "It makes the app run faster",
      "It keeps secrets out of source control and easy to rotate per environment",
      "It's required by JavaScript syntax",
      "It automatically encrypts the key",
    ],
    answer: 1,
    explanation: "Environment variables let you swap secrets per environment (dev/staging/prod) without committing them to git history.",
  },
  {
    question: "Why is version control (like Git) important on a team project?",
    options: [
      "It's only useful for solo developers",
      "It tracks history and lets multiple people work on the same codebase without overwriting each other's work",
      "It automatically deploys your app",
      "It replaces the need for testing",
    ],
    answer: 1,
    explanation: "Git tracks changes over time and enables branching/merging, so teams can collaborate without losing or clobbering each other's work.",
  },
];

export default function DevQuiz() {
  return <Quiz questions={QUESTIONS} />;
}
