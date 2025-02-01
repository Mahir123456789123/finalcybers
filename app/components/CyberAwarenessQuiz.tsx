"use client";

import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const quizQuestions = [
  {
    question: "What is phishing?",
    options: [
      "A type of fish",
      "A cybercrime involving deceptive emails or websites",
      "A social media platform",
      "A computer virus",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does 'https' in a URL indicate?",
    options: [
      "High-speed internet",
      "Hypertext transfer protocol",
      "A secure, encrypted connection",
      "A social media website",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is two-factor authentication?",
    options: [
      "Using two different passwords",
      "Logging in from two devices",
      "A security process requiring two forms of identification",
      "Changing your password twice",
    ],
    correctAnswer: 2,
  },
];

export default function CyberAwarenessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <section id="quiz" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Cyber Awareness Quiz
        </h2>
        <Card className="max-w-2xl mx-auto bg-gray-700">
          {showScore ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                You scored {score} out of {quizQuestions.length}
              </h3>
              <Button onClick={resetQuiz}>Retake Quiz</Button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-white mb-4">
                Question {currentQuestion + 1}/{quizQuestions.length}
              </h3>
              <p className="text-lg text-white mb-6">
                {quizQuestions[currentQuestion].question}
              </p>
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    variant="secondary"
                    fullWidth
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>
    </section>
  );
}
