import { IconAnimation } from "@/components/animations/IconAnimation";
import {
  Workflow,
  Repeat,
  Mails,
  Timer,
  ArrowRight,
  // Plus,
  // Settings,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import sequenceImg from "../../assets/sequence.png";
import { Link } from "react-router-dom";
export default function EmailSequences() {
  return (
    <section className="section-padding bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="success" className="mb-4">
              Visual Sequence Builder
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Create Sophisticated Email Sequences
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Build multi-touch campaigns that engage prospects at the right
              time.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Workflow}
                  className="w-6 h-6 text-primary mt-1"
                  delay={0}
                />
                <div>
                  <h4 className="font-semibold mb-1">Personalization Tags</h4>
                  <p className="text-gray-600">
                    Include options to insert basic personalization tags e.g.,
                    FirstName to make emails feel tailored to recipients
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Timer}
                  className="w-6 h-6 text-primary mt-1"
                  delay={200}
                />
                <div>
                  <h4 className="font-semibold mb-1">Email Content</h4>
                  <p className="text-gray-600">
                    Provide a text editor to write and format email content
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Repeat}
                  className="w-6 h-6 text-primary mt-1"
                  delay={400}
                />
                <div>
                  <h4 className="font-semibold mb-1">Subject Line Input</h4>
                  <p className="text-gray-600">
                    Include a dedicated field to write and edit subject lines
                    for each email in the sequence
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Mails}
                  className="w-6 h-6 text-primary mt-1"
                  delay={600}
                />
                <div>
                  <h4 className="font-semibold mb-1">Save and Review</h4>
                  <p className="text-gray-600">
                    Allow users to save their sequence and review all emails in
                    a single, scrollable view
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-8 group">
              <Link target="_blank" to="https://app.senderside.com/sign-in">
                Try Sequence Builder
              </Link>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={sequenceImg}
              alt="sequence"
              className="border rounded-xl h-96 shadow-lg"
            />
            {/* Sequence Builder Preview */}
            {/* <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Sales Outreach Sequence</h3>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Step
                </Button>
              </div>
              
              <div className="space-y-4">
                {[
                  { day: 1, type: "Initial Email", wait: "2 days" },
                  { day: 3, type: "Follow-up Email", wait: "3 days" },
                  { day: 6, type: "Final Follow-up", wait: "5 days" }
                ].map((step, index) => (
                  <div 
                    key={index}
                    className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-500">Day {step.day}</span>
                        <h4 className="font-medium">{step.type}</h4>
                      </div>
                      <Settings className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      Wait {step.wait} before next step
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
