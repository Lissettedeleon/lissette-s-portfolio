import React from "react";
import Quiz from "./Quiz";

const QUESTIONS = [
  {
    question: "Which NIST CSF function focuses on identifying assets, risks, and business context?",
    options: ["Identify", "Protect", "Detect", "Respond"],
    answer: 0,
    explanation: "Identify is the foundation function — understanding assets, data, and risk before you can protect them.",
  },
  {
    question: "What does the principle of 'least privilege' mean?",
    options: [
      "Users get admin access by default",
      "Users only get the minimum access needed to do their job",
      "Passwords should be at least 8 characters",
      "Only IT staff can access the network",
    ],
    answer: 1,
    explanation: "Least privilege limits blast radius — if an account is compromised, the attacker only gets what that account was allowed to touch.",
  },
  {
    question: "In a prompt injection attack against an AI chatbot, what is the attacker actually exploiting?",
    options: [
      "A buffer overflow in the server",
      "The model's inability to reliably separate trusted instructions from untrusted user input",
      "A weak database password",
      "An expired SSL certificate",
    ],
    answer: 1,
    explanation: "Prompt injection works because both the system prompt and user input arrive as plain text — the model can't always tell 'trusted setup' apart from 'untrusted input.'",
  },
  {
    question: "What's the main risk of feeding an AI coding assistant your company's proprietary source code without safeguards?",
    options: [
      "It will refuse to help",
      "It may slow down your IDE",
      "Sensitive code or secrets could be exposed to a third-party model provider",
      "It has no risk at all",
    ],
    answer: 2,
    explanation: "Without proper data-handling agreements, code (and any secrets embedded in it) sent to a third-party AI service can leave your control.",
  },
  {
    question: "Which of these is a red flag for phishing?",
    options: [
      "An email from a known coworker with no links",
      "A URL using HTTPS with a company's real domain",
      "Urgent language pushing you to act immediately, plus a mismatched link URL",
      "An email you were expecting from a scheduled meeting",
    ],
    answer: 2,
    explanation: "Urgency + a link that doesn't match its displayed text are classic social-engineering tactics used to bypass careful thinking.",
  },
];

export default function CyberQuiz() {
  return <Quiz questions={QUESTIONS} />;
}
