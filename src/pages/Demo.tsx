import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Download, ChevronRight } from "lucide-react"

export default function Demo() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4">Product Demo</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            See Senderside in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how easy it is to create, automate, and track your email campaigns
          </p>
        </div>

        {/* Main Demo Video */}
        <div className="relative mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border shadow-xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl bg-card border">
            <h3 className="font-semibold mb-2">Email Sequence Builder</h3>
            <p className="text-muted-foreground mb-4">Create sophisticated email sequences with our visual builder</p>
            <Button variant="outline" size="sm" className="group">
              Watch Demo <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="p-6 rounded-xl bg-card border">
            <h3 className="font-semibold mb-2">Template Editor</h3>
            <p className="text-muted-foreground mb-4">Design beautiful email templates with drag-and-drop ease</p>
            <Button variant="outline" size="sm" className="group">
              Watch Demo <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="p-6 rounded-xl bg-card border">
            <h3 className="font-semibold mb-2">Analytics Dashboard</h3>
            <p className="text-muted-foreground mb-4">Track and optimize your campaign performance</p>
            <Button variant="outline" size="sm" className="group">
              Watch Demo <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex gap-4">
            <Button size="lg" className="group">
              <Play className="mr-2 h-5 w-5" /> Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Download className="mr-2 h-5 w-5" /> Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}