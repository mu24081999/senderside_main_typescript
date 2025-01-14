import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Integration from "@/components/sections/Integration";
import EmailSequences from "@/components/sections/EmailSequences";
import EmailTemplates from "@/components/sections/EmailTemplates";
// import EmailAnalytics from "@/components/sections/EmailAnalytics";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <Features />
      <EmailSequences />
      <EmailTemplates />
      {/* <EmailAnalytics /> */}
      <Integration />

      {/* Social Proof Section */}
      {/* <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">Join thousands of companies scaling their outreach with Senderside</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=48&q=80&fit=crop" alt="Company logo" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?w=128&h=48&q=80&fit=crop" alt="Company logo" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=128&h=48&q=80&fit=crop" alt="Company logo" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=128&h=48&q=80&fit=crop" alt="Company logo" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Email Outreach?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who are already using
            Senderside to close more deals.
          </p>
          <Button size="lg" variant="secondary" className="text-lg group">
            <Link target="_blank" to="https://app.senderside.com/sign-up">
              Start 14-Days Free Trial
            </Link>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
