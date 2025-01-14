import { Button } from "@/components/ui/button";
import { Users, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize email, sms and phone
              communication by making it accessible from a single dashboard for
              efficient and effective businesses growth and expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p className="text-gray-600">
                Our customers success is our success. We're committed to
                providing exceptional support and value.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We're constantly pushing boundaries to create better solutions
                for our customers.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in being open and honest in everything we do, both
                internally and with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Begin today & streamline your business communication!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is consistently working to bring in new technologies that
            helps businesses and individuals to grow limitlessly!
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            <Link target="_black" to="https://app.senderside.com/sign-up">
              Start 14-Day Free Trial
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
