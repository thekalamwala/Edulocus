'use client'

import { useState } from 'react'

export default function FaqList({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="faq-wrap">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
              id={`faq-q-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q}
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div
              className="faq-a"
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
            >
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
