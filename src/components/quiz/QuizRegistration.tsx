import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useToast } from '@/components/ui/use-toast';

interface QuizRegistrationProps {
  onRegister: (data: {
    firstName: string;
    lastName: string;
    email: string;
  }) => void;
}

export function QuizRegistration({ onRegister }: QuizRegistrationProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically check against your backend if the email has been used
      const hasAttempted = false; // Replace with actual API call

      if (hasAttempted) {
        // toast({
        //   title: "Email already used",
        //   description: "This email has already been used for the quiz.",
        //   variant: "destructive",
        // });
        return;
      }

      onRegister({ firstName, lastName, email });
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Something went wrong. Please try again.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Start Quiz
      </Button>
    </form>
  );
}
