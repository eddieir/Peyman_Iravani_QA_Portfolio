'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 border-t">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear !== null ? currentYear : '...'} Peyman Iravani. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2 md:mt-0">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
