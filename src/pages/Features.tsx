import { Badge } from '@/components/ui/badge';
import { Mail, Zap, BarChart2, Users2, Shield, Workflow } from 'lucide-react';

const features = [
  {
    icon: Mail,
    title: "Email Sequences",
    description: "Create sophisticated multi-touch campaigns with our visual sequence builder.",
    features: [
      "Drag-and-drop builder",
      "Smart timing optimization",
      "A/B testing",
      "Template library"
    ]
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automate your outreach with powerful workflows and triggers.",
    features: [
      "Custom triggers",
      "Conditional logic",
      "Action scheduling",
      "Integration webhooks"
    ]
  },
  {
    icon: BarChart2,
    title: "Analytics",
    description: "Get detailed insights into your campaign performance.",
    features: [
      "Real-time tracking",
      "Open & click rates",
      "Engagement metrics",
      "ROI reporting"
    ]
  },
  {
    icon: Users2,
    title: "Team Collaboration",
    description: "Work seamlessly with your team members.",
    features: [
      "Role-based access",
      "Shared templates",
      "Activity tracking",
      "Team analytics"
    ]
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security for your data.",
    features: [
      "SOC 2 compliance",
      "End-to-end encryption",
      "2FA authentication",
      "Audit logging"
    ]
  },
  {
    icon: Workflow,
    title: "Integrations",
    description: "Connect with your favorite tools.",
    features: [
      "CRM integration",
      "API access",
      "Zapier support",
      "Custom webhooks"
    ]
  }
];

export default function Features() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="success" className="mb-4">Features</Badge>
            <h1 className="text-5xl font-bold mb-6">Everything You Need</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features to help you scale your email outreach and close more deals.
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
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}