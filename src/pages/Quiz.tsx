import { useState } from "react";
import { QuizIntro } from "@/components/quiz/QuizIntro";
import { QuizRegistration } from "@/components/quiz/QuizRegistration";
import { QuizGame } from "@/components/quiz/QuizGame";
import { QuizResult } from "@/components/quiz/QuizResult";

export type QuizState = "intro" | "register" | "playing" | "completed";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Quiz() {
  const [state, setState] = useState<QuizState>("intro");
  const [score, setScore] = useState(0);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleRegistration = (data: UserData) => {
    setUserData(data);
    setState("playing");
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {state === "intro" && (
          <QuizIntro onStart={() => setState("register")} />
        )}
        {state === "register" && (
          <QuizRegistration onRegister={handleRegistration} />
        )}
        {state === "playing" && userData && (
          <QuizGame
            onComplete={(finalScore) => {
              setScore(finalScore);
              setState("completed");
            }}
            userData={userData}
          />
        )}
        {state === "completed" && userData && (
          <QuizResult
            score={score}
            // userData={userData}
          />
        )}
      </div>
    </div>
  );
}
