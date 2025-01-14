import { Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Send className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Senderside</span>
            </div>
            <p className="text-gray-600">
              Streamline your email outreach with powerful automation and
              personalization.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              {/* <li>
                <Link to="/gdpr" className="text-gray-600 hover:text-primary">
                  GDPR
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-gray-600 text-center">
            © {new Date().getFullYear()} Senderside. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
