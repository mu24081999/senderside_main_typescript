import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface PricingToggleProps {
  onPeriodChange: (isAnnual: boolean) => void;
}

export default function PricingToggle({ onPeriodChange }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleToggle = (checked: boolean) => {
    setIsAnnual(checked);
    onPeriodChange(checked);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <Label className="text-lg">Monthly</Label>
      <Switch
        checked={isAnnual}
        onCheckedChange={handleToggle}
      />
      <div className="flex items-center space-x-2">
        <Label className="text-lg">Annual</Label>
        <span className="text-sm text-primary font-medium">Save 25%</span>
      </div>
    </div>
  );
}