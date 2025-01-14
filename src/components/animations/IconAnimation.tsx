import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface IconAnimationProps {
  icon: React.ComponentType<any>;
  className?: string;
  delay?: number;
}

export function IconAnimation({ icon: Icon, className, delay = 0 }: IconAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      "transition-all duration-700 transform",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      className
    )}>
      <Icon className="w-full h-full" />
    </div>
  );
}