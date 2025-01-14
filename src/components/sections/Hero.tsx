import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Badge variant="success" className="mb-4">
          <Star className="mr-1 h-3 w-3" /> New: AI-Powered Unified
          Communications
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 leading-tight">
          Email, SMS & Phone Communication <br />
          All In One Platform!
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Automate your email campaigns with powerful personalization and
          AI-driven insights. Reach more prospects and close more deals with
          Senderside.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="text-lg group">
            <Link target="_blank" to="https://app.senderside.com/sign-up">
              14-Days Free Trial
            </Link>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            <Link to="/pricing">Pricing Plans</Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/40?img=${i}`}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-background"
              />
            ))}
          </div>
          <div className="font-medium">
            Trusted by 10,000+ sales professionals
          </div>
        </div>
      </div>
    </section>
  );
}
