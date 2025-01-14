// Expanded question pool including SMS, phone, and GDPR topics
export const questionPool = [
  // Original email questions...
  {
    question: "What is the best time to send marketing emails?",
    answers: [
      "Early morning (6-8 AM)",
      "Mid-morning (9-11 AM)",
      "Early afternoon (1-3 PM)",
      "It depends on your target audience and testing"
    ],
    correctAnswer: 3
  },
  // SMS and Phone questions
  {
    question: "What is the recommended character limit for SMS marketing messages?",
    answers: [
      "60 characters",
      "120 characters",
      "160 characters",
      "200 characters"
    ],
    correctAnswer: 2
  },
  {
    question: "Which is a best practice for SMS marketing?",
    answers: [
      "Send messages at any time",
      "Include opt-out instructions",
      "Use multiple links",
      "Send as many messages as possible"
    ],
    correctAnswer: 1
  },
  {
    question: "What is a key requirement for phone marketing under TCPA?",
    answers: [
      "Call at peak hours",
      "Prior express written consent",
      "Leave voicemails only",
      "Use automated dialers freely"
    ],
    correctAnswer: 1
  },
  // GDPR questions
  {
    question: "Under GDPR, what is the maximum time to respond to a data subject access request?",
    answers: [
      "24 hours",
      "7 days",
      "30 days",
      "60 days"
    ],
    correctAnswer: 2
  },
  {
    question: "What is a key principle of GDPR?",
    answers: [
      "Data maximization",
      "Indefinite storage",
      "Data minimization",
      "Unlimited processing"
    ],
    correctAnswer: 2
  },
  {
    question: "What is required for valid consent under GDPR?",
    answers: [
      "Pre-ticked boxes",
      "Bundled consent",
      "Clear affirmative action",
      "Implied consent"
    ],
    correctAnswer: 2
  }
];

// Function to get random questions
export function getRandomQuestions(count: number) {
  const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}