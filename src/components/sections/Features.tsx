import { Mail, Zap, BarChart3, Users, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Smart Personalization",
    description:
      "AI-powered personalization that goes beyond just first names. Create truly personalized emails that resonate with your prospects.",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description:
      "Build complex email sequences with our intuitive workflow builder. Set up triggers, conditions, and actions with ease.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your campaign performance with advance email analytics filter that help you create retargeting campaigns.",
  },
  {
    icon: Users,
    title: "SMS Marketing",
    description:
      "Dont just stick to email marketing expand your business with bulk sms marketing, you can create & schedule sms campaigns.",
  },
  {
    icon: Shield,
    title: "Phone Communication",
    description:
      "SenderSide dashboard allows you to claim Virtual Numbers that configures right away to make and recieve calls with call logs and free call recordings features.",
  },
  {
    icon: Globe,
    title: "Email Validation",
    description:
      "Our system allows you to validate emails before sending email campaigns to prevent any bounce backs to help you maintain email deliverbility & reputation. You can perform single or bulk email validation.",
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Senderside?</h2>
          <p className="text-xl text-gray-600">
            Everything you need to scale your outreach efforts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
