import React from 'react';
import { KineticTextLoader } from '@/components/ui/kinetic-text-loader';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <KineticTextLoader text="Loading" />
    </div>
  );
}
