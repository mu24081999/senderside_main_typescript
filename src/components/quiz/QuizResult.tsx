import { Button } from '@/components/ui/button';
import { Trophy, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuizResultProps {
  score: number;
}

export function QuizResult({ score }: QuizResultProps) {
  const navigate = useNavigate();
  const percentage = (score / 10) * 100;
  const passed = percentage >= 80;

  return (
    <div className="text-center">
      {passed ? (
        <>
          <Trophy className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            You scored {percentage}% and earned a 50% discount on your subscription!
          </p>
          <div className="bg-card p-6 rounded-xl border mb-8 max-w-md mx-auto">
            <h3 className="font-semibold mb-2">Your Discount Code</h3>
            <div className="text-2xl font-mono bg-muted p-4 rounded-lg mb-4">
              QUIZ50OFF
            </div>
            <p className="text-sm text-muted-foreground">
              Use this code during checkout to claim your discount
            </p>
          </div>
        </>
      ) : (
        <>
          <X className="h-20 w-20 text-destructive mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Almost There!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            You scored {percentage}%. You need 80% or higher to earn the discount.
          </p>
        </>
      )}

      <div className="flex gap-4 justify-center">
        <Button onClick={() => navigate('/pricing')}>
          View Plans
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}