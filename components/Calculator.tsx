'use client';
import { ReactNode } from 'react';

interface CalculatorProps {
  title: string;
  description: string;
  children: ReactNode;
  result: ReactNode;
  faq: { q: string; a: string }[];
}

export default function Calculator({ title, description, children, result, faq }: CalculatorProps) {
  return (
    <article className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        {children}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          {result}
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        {faq.map((item, i) => (
          <details key={i} className="mb-3 border-b pb-3">
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-2 text-gray-600">{item.a}</p>
          </details>
        ))}
      </section>
    </article>
  );
}
