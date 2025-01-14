import { IconAnimation } from "@/components/animations/IconAnimation";
import { Eye, Clock, BarChart2, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EmailAnalytics() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">
            AI Analytics
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Track Every Interaction With AI Email Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get detailed insights into how recipients engage with your emails.
            Monitor opens and more advance AI email analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-card">
            <IconAnimation icon={Eye} className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2">Open Tracking</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• First open time</li>
              <li>• Number of opens</li>
              <li>• Device information</li>
              <li>• Location data</li>
            </ul>
          </div>

          <div className="feature-card">
            <IconAnimation
              icon={Clock}
              className="w-8 h-8 text-primary mb-4"
              delay={200}
            />
            <h3 className="text-lg font-bold mb-2">Timing Analysis</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Best send times</li>
              <li>• Response delays</li>
              <li>• Engagement patterns</li>
              <li>• Time zone optimization</li>
            </ul>
          </div>

          <div className="feature-card">
            <IconAnimation
              icon={BarChart2}
              className="w-8 h-8 text-primary mb-4"
              delay={400}
            />
            <h3 className="text-lg font-bold mb-2">Performance Metrics</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Open rates</li>
              <li>• Click-through rates</li>
              <li>• Reply rates</li>
              <li>• Conversion tracking</li>
            </ul>
          </div>

          <div className="feature-card">
            <IconAnimation
              icon={RefreshCw}
              className="w-8 h-8 text-primary mb-4"
              delay={600}
            />
            <h3 className="text-lg font-bold mb-2">Email Validation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Syntax verification</li>
              <li>• Domain validation</li>
              <li>• Bounce prediction</li>
              <li>• Deliverability scoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
