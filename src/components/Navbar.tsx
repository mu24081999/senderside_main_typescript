import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthButtons } from "@/components/auth/AuthButtons";
import { Menu, X, Send } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background/80 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Send className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground">
                Senderside
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            {/* <Link
              to="/demo"
              className="text-foreground hover:text-primary transition-colors"
            >
              Demo
            </Link>
            <Link
              to="/quiz"
              className="text-foreground hover:text-primary transition-colors"
            >
              Quiz
            </Link> */}
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
            <AuthButtons />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            {/* <Link
              to="/demo"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Demo
            </Link>
            <Link
              to="/quiz"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Quiz
            </Link> */}
            <Link
              to="/about"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <div className="px-3 py-2 flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-center">
                <Link to="https://app.senderside.com/sign-in">Login</Link>
              </Button>
              <Button className="w-full justify-center">
                <Link to={"https://app.senderside.com/sign-in"}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
