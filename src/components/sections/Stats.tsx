import { IconAnimation } from "@/components/animations/IconAnimation";
import { Mail, MessageSquare, BarChart2, Users2 } from "lucide-react";

const stats = [
  {
    icon: Mail,
    value: "100K+",
    label: "Emails Sent Daily",
    delay: 0,
  },
  {
    icon: MessageSquare,
    value: "98%",
    label: "Delivery Rate",
    delay: 200,
  },
  {
    icon: BarChart2,
    value: "45%",
    label: "Avg. Open Rate",
    delay: 400,
  },
  {
    icon: Users2,
    value: "100K+",
    label: "SMS Sent Per Day",
    delay: 600,
  },
];

export default function Stats() {
  return (
    <section className="section-padding bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 mx-auto w-12 h-12">
                <IconAnimation
                  icon={stat.icon}
                  className="text-primary"
                  delay={stat.delay}
                />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
