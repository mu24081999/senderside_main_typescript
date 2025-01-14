import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import PricingToggle from "@/components/pricing/PricingToggle";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free Trial",
    monthlyPrice: 0,
    type: "free",
    annualPrice: 0,
    features: [
      {
        name: "Free Credits",
        icon: (
          <svg
            fill="#db2929"
            height="15px"
            className="mt-1"
            width="15px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>
          </svg>
        ),
      },
      "Common-Box",
      "100 Contacts Uploads",
      "1000 Emails Sends",
      "10 Email Accounts",
      "1 Email Sequence",
      "1 Email Template",
      "Advance Email Analytics",
      {
        name: "Virtual Mobile Numbers",
        icon: (
          <svg
            fill="#db2929"
            height="15px"
            className="mt-1"
            width="15px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>
          </svg>
        ),
      },
      {
        name: "Make And Recieve Calls",
        icon: (
          <svg
            fill="#db2929"
            height="15px"
            className="mt-1"
            width="15px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>
          </svg>
        ),
      },
      {
        name: "Call Logs And Recordings",
        icon: (
          <svg
            fill="#db2929"
            height="15px"
            className="mt-1"
            width="15px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>
          </svg>
        ),
      },
      {
        name: "SMS Marketing",
        icon: (
          <svg
            fill="#db2929"
            height="15px"
            className="mt-1"
            width="15px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>
          </svg>
        ),
      },
      "Standard Email Support",
    ],
  },
  {
    name: "Starter",
    monthlyPrice: 14,
    annualPrice: 10.5,
    features: [
      "$5 Credits",
      "Common-Box",
      "1500 Contacts Uploads",
      "10,000 Emails Sends",
      "Unlimited Email Accounts",
      "5 Email Sequence",
      "5 Email Template",
      "Advance Email Analytics",
      "Email Validation",
      "Virtual Mobile Numbers",
      "Make And Recieve Calls",
      "Call Logs And Recordings",
      "SMS Marketing",
      "24/7 Email Support",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 45,
    annualPrice: 33.75,
    features: [
      "$10 Free Credits",
      "Common-Box",
      "10,000 Contacts Uploads",
      "50,000 Emails Sends",
      "Unlimited Email Accounts",
      "20 Email Sequence",
      "20 Email Template",
      "Advance Email Analytics",
      "Email Validation",
      "Virtual Mobile Numbers",
      "Make And Recieve Calls",
      "Call Logs And Recordings",
      "SMS Marketing",
      "24/7 Email Support",
    ],
    isPopular: true,
  },
  {
    name: "Agency",
    monthlyPrice: 75,
    annualPrice: 56.25,
    features: [
      "$20 Free Credits",
      "Common-Box",
      "20,000 Contacts Uploads",
      "100,000 Emails Sends",
      "Unlimited Email Accounts",
      "Unlimited Email Sequence",
      "Unlimited Email Template",
      "Advance Email Analytics",
      "Email Validation",
      "Virtual Mobile Numbers",
      "Make And Recieve Calls",
      "Call Logs And Recordings",
      "SMS Marketing",
      "24/7 Email Support",
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="px-5 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your business. No hidden fees, no
              surprises.
            </p>
            <PricingToggle onPeriodChange={setIsAnnual} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm relative ${
                  plan.isPopular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.isPopular && (
                  <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">
                    {plan.type === "free" ? "" : "/month"}
                  </span>
                  {isAnnual && plan.type !== "free" && (
                    <div className="text-sm text-primary font-medium mt-1">
                      Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      {/* Check if the feature is an object with an icon */}
                      {typeof feature !== "string" && feature.icon ? (
                        feature.icon
                      ) : (
                        <Check className="h-5 w-5 text-primary mt-0.5" />
                      )}
                      <span className="text-gray-600">
                        {typeof feature !== "string" ? feature.name : feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center pb-7">
                  <Link
                    target="_blank"
                    to={"https://app.senderside.com/sign-up"}
                    className="text-center border px-10 absolute bottom-8 bg-blue-600 text-white rounded-xl py-2"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
