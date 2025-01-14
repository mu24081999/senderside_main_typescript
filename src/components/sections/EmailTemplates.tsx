import { IconAnimation } from "@/components/animations/IconAnimation";
import { FileText, Layout, Palette, Wand2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import templateImg from "@/assets/template.png";

export default function EmailTemplates() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            {/* Template Editor Preview */}
            {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="border-b p-4 flex items-center justify-between bg-gray-50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-500">Template Editor</div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="h-8 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded"></div>
                    <div className="h-4 bg-gray-100 rounded"></div>
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  </div>
                  <div className="h-10 bg-primary/10 rounded w-1/4"></div>
                </div>
              </div>
            </div> */}
            <img
              src={templateImg}
              alt="template"
              className="border rounded-xl h-96 shadow-lg"
            />

            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl transform -translate-x-4 translate-y-4"></div>
          </div>

          <div className="order-1 md:order-2">
            <Badge variant="success" className="mb-4">
              Smart Templates
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Create Beautiful Email Templates
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Design professional email templates with our intuitive editor.
              Personalize content and optimize for any device.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Layout}
                  className="w-6 h-6 text-primary mt-1"
                  delay={0}
                />
                <div>
                  <h4 className="font-semibold mb-1">Drag & Drop</h4>
                  <p className="text-gray-600">Easy visual editing</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Wand2}
                  className="w-6 h-6 text-primary mt-1"
                  delay={200}
                />
                <div>
                  <h4 className="font-semibold mb-1">Multiple Fonts</h4>
                  <p className="text-gray-600">
                    Choose from many fonts style that attracts
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={Palette}
                  className="w-6 h-6 text-primary mt-1"
                  delay={400}
                />
                <div>
                  <h4 className="font-semibold mb-1">Plain or HTML</h4>
                  <p className="text-gray-600">
                    Use custom plain or HTML template
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <IconAnimation
                  icon={FileText}
                  className="w-6 h-6 text-primary mt-1"
                  delay={600}
                />
                <div>
                  <h4 className="font-semibold mb-1">Optimized Templates</h4>
                  <p className="text-gray-600">
                    Build attractive and optimized email templates for any
                    device
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
