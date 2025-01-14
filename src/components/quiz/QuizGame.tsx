import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { getRandomQuestions } from "@/lib/quiz-data";
import { Timer } from "lucide-react";

interface QuizGameProps {
  onComplete: (score: number) => void;
  userData: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export function QuizGame({ onComplete }: QuizGameProps) {
  const [questions] = useState(() => getRandomQuestions(10));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    } else {
      onComplete(score);
    }
  }, [timeLeft, score, onComplete]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((c) => c + 1);
        setSelectedAnswer(null);
      } else {
        onComplete(score);
      }
    }, 1000);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="flex items-center gap-2 text-lg">
          <Timer className="h-5 w-5" />
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
      </div>

      <Progress
        value={(currentQuestion / questions.length) * 100}
        className="mb-8"
      />

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h2>

        <div className="grid gap-4">
          {questions[currentQuestion].answers.map((answer, index) => (
            <Button
              key={index}
              // variant={
              //   selectedAnswer === null
              //     ? "outline"
              //     : selectedAnswer === index
              //     ? index === questions[currentQuestion].correctAnswer
              //       ? "success"
              //       : "destructive"
              //     : "outline"
              // }
              className="justify-start h-auto py-4 px-6 text-left"
              onClick={() => selectedAnswer === null && handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              {answer}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
