'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function update(field, val) {
    setValues((v) => ({ ...v, [field]: val }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validate() {
    const e = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!/^[0-9]{10}$/.test(values.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit phone number.'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email address.'
    return e
  }

  function handle(e) {
    e.preventDefault()
    const err = validate()
    if (Object.keys(err).length) {
      setErrors(err)
      return
    }
    setStatus('loading')
    setTimeout(() => setStatus('success'), 900)
  }

  if (status === 'success') {
    return (
      <div className="form-card">
        <div className="form-msg" role="status">
          <i className="fa-solid fa-circle-check" style={{ marginRight: 8 }} />
          Thank you! Your message has been recorded. Our team will contact you shortly.
        </div>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={handle} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="ct-name">Name</label>
          <input
            id="ct-name"
            type="text"
            placeholder="Your name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={!!errors.name}
            required
          />
          {errors.name && <span className="field-err">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="ct-phone">Phone</label>
          <input
            id="ct-phone"
            type="tel"
            placeholder="090284 51946"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            required
          />
          {errors.phone && <span className="field-err">{errors.phone}</span>}
        </div>
        <div className="field full">
          <label htmlFor="ct-email">Email</label>
          <input
            id="ct-email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="field-err">{errors.email}</span>}
        </div>
        <div className="field full">
          <label htmlFor="ct-msg">Message</label>
          <textarea
            id="ct-msg"
            rows="4"
            placeholder="How can we help?"
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </div>
        <div className="field full">
          <button className="btn btn-primary btn-block" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  )
}
