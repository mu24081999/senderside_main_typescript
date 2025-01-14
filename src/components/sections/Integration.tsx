import { IconAnimation } from "@/components/animations/IconAnimation";
import { Smartphone, MessageCircle, BarChart, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Integration() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="success" className="mb-4">
              Unified Communications
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              All Your Communications At One Place Easy-Peasy!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Unify your email, SMS, and phone communications in one powerful
              platform. Track every interaction and optimize your outreach
              strategy with advance analytics.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Mail}
                  className="w-6 h-6 text-primary mt-1"
                  delay={0}
                />
                <div>
                  <h4 className="font-semibold mb-1">Email Marketing</h4>
                  <p className="text-gray-600">
                    Personalized campaigns at scale
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={MessageCircle}
                  className="w-6 h-6 text-primary mt-1"
                  delay={200}
                />
                <div>
                  <h4 className="font-semibold mb-1">SMS Updates</h4>
                  <p className="text-gray-600">Direct mobile engagement</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Smartphone}
                  className="w-6 h-6 text-primary mt-1"
                  delay={400}
                />
                <div>
                  <h4 className="font-semibold mb-1">Phone Tracking</h4>
                  <p className="text-gray-600">Call analytics & recording</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={BarChart}
                  className="w-6 h-6 text-primary mt-1"
                  delay={600}
                />
                <div>
                  <h4 className="font-semibold mb-1">Analytics</h4>
                  <p className="text-gray-600">Unified performance metrics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                {[Mail, MessageCircle, Smartphone, BarChart].map(
                  (Icon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <IconAnimation
                        icon={Icon}
                        className="w-16 h-16 text-primary/80"
                        delay={index * 200}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
