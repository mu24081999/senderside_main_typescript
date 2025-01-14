import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Timer, Gift, Trophy } from 'lucide-react';

interface QuizIntroProps {
  onStart: () => void;
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="text-center">
      <Badge variant="success" className="mb-4">Limited Time Offer</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Win 50% Off Your Subscription
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Test your email marketing knowledge in our challenge. Score 80% or higher to unlock an exclusive discount!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-card p-6 rounded-xl border">
          <Timer className="h-8 w-8 text-primary mb-4 mx-auto" />
          <h3 className="font-semibold mb-2">5 Minutes</h3>
          <p className="text-sm text-muted-foreground">Complete the challenge within the time limit</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border">
          <Trophy className="h-8 w-8 text-primary mb-4 mx-auto" />
          <h3 className="font-semibold mb-2">10 Questions</h3>
          <p className="text-sm text-muted-foreground">Answer questions about email marketing best practices</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border">
          <Gift className="h-8 w-8 text-primary mb-4 mx-auto" />
          <h3 className="font-semibold mb-2">50% Discount</h3>
          <p className="text-sm text-muted-foreground">Score 80% or higher to claim your reward</p>
        </div>
      </div>

      <Button size="lg" onClick={onStart}>
        Start Challenge
      </Button>
    </div>
  );
}