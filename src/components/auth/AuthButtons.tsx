import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" className="flex items-center gap-2">
        <LogIn className="h-4 w-4" />
        <Link target="_blank" to="https://app.senderside.com/sign-in">
          Login
        </Link>
      </Button>
      <Button className="flex items-center gap-2">
        <UserPlus className="h-4 w-4" />
        <Link target="_blank" to="https://app.senderside.com/sign-up">
          Sign Up
        </Link>{" "}
      </Button>
    </div>
  );
}
