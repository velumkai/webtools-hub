'use client';
import { useState } from 'react';
import Calculator from '@/components/Calculator';

export default function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('18');
  const [split, setSplit] = useState('1');

  const billAmount = parseFloat(bill) || 0;
  const tip = parseFloat(tipPercent) || 0;
  const people = parseInt(split) || 1;

  const tipAmount = billAmount * (tip / 100);
  const total = billAmount + tipAmount;
  const perPerson = total / people;

  const faq = [
    { q: 'How much should I tip at a restaurant?', a: '15-20% is standard in the US. 18% is a common default. Tip on pre-tax amount.' },
    { q: 'Do I tip on tax?', a: 'Traditionally, tip is calculated on the pre-tax subtotal, not the total with tax.' },
    { q: 'How much to tip for takeout?', a: '10-15% for takeout is common, though not expected. 20%+ for delivery.' },
    { q: 'What about hair salons?', a: '15-20% of service cost. Tip each person who worked on you separately.' },
    { q: 'Is it rude to not tip?', a: 'In the US, tipping is expected for table service. Not tipping signals poor service.' },
  ];

  return (
    <Calculator
      title="Tip Calculator"
      description="Calculate tips for restaurants, salons, delivery, and more. Split bills evenly with friends."
      faq={faq}
      result={
        billAmount > 0 ? (
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500">Tip: ${tipAmount.toFixed(2)}</p>
            <p className="text-2xl font-bold">${total.toFixed(2)} total</p>
            {people > 1 && <p className="text-green-600">${perPerson.toFixed(2)} per person</p>}
          </div>
        ) : <p className="text-gray-400 text-center">Enter bill amount</p>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Bill Amount ($)</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="85.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tip Percentage</label>
          <div className="flex gap-2">
            {['15', '18', '20', '25'].map((t) => (
              <button
                key={t}
                onClick={() => setTipPercent(t)}
                className={`flex-1 p-2 rounded ${tipPercent === t ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                {t}%
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Split Between</label>
          <input
            type="number"
            value={split}
            onChange={(e) => setSplit(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="1"
            min="1"
          />
        </div>
      </div>
    </Calculator>
  );
}
