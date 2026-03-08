'use client';
import { useState } from 'react';
import Calculator from '@/components/Calculator';

export default function DiscountCalculator() {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const originalPrice = parseFloat(price) || 0;
  const discountPercent = parseFloat(discount) || 0;
  const savings = originalPrice * (discountPercent / 100);
  const finalPrice = originalPrice - savings;

  const faq = [
    { q: 'How do I calculate a percentage discount?', a: 'Multiply the original price by the discount percentage, then divide by 100. Subtract that from the original price.' },
    { q: 'What is a double discount?', a: 'When two discounts apply sequentially — first discount reduces the price, then second discount applies to the reduced price.' },
    { q: 'How do I reverse-calculate the original price?', a: 'Divide the sale price by (1 - discount/100). For example: $80 after 20% off → $80 / 0.8 = $100 original.' },
    { q: 'Does this include sales tax?', a: 'This calculator shows pre-tax discount. Tax is typically calculated on the final discounted price.' },
    { q: 'Can I calculate multiple discounts?', a: 'Apply discounts sequentially: calculate first discount, then use that result as the new price for the second discount.' },
  ];

  return (
    <Calculator
      title="Discount Calculator"
      description="Calculate sale prices, percentage discounts, and savings instantly. Works for single and stacked discounts."
      faq={faq}
      result={
        originalPrice > 0 ? (
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">${finalPrice.toFixed(2)}</p>
            <p className="text-gray-500">You save ${savings.toFixed(2)} ({discountPercent}% off)</p>
          </div>
        ) : <p className="text-gray-400 text-center">Enter values above</p>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Original Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="100.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Discount (%)</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="20"
          />
        </div>
      </div>
    </Calculator>
  );
}
