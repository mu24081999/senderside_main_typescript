import { ContactForm } from "@/components/contact/ContactForm";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      support@senderside.com
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div> */}

                {/* <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">
                      123 Market Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-card rounded-2xl"></div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
