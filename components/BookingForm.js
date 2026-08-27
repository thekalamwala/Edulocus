'use client'

import { useState } from 'react'

const SERVICES = [
  'Admission Counseling (MBBS Abroad)',
  'MBBS in India & Abroad',
  'Career Discovery',
  'College Planning',
  'Study Abroad (Germany / USA)',
  'Job Placement',
]

export default function BookingForm() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', date: '', service: SERVICES[0], message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success

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
          Thank you! Your details have been recorded. Our team will contact you shortly.
        </div>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={handle} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="bk-name">Full Name</label>
          <input
            id="bk-name"
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
          <label htmlFor="bk-phone">Phone</label>
          <input
            id="bk-phone"
            type="tel"
            placeholder="090284 51946"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            required
          />
          {errors.phone && <span className="field-err">{errors.phone}</span>}
        </div>
        <div className="field">
          <label htmlFor="bk-email">Email</label>
          <input
            id="bk-email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="field-err">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="bk-date">Preferred Date</label>
          <input
            id="bk-date"
            type="date"
            value={values.date}
            onChange={(e) => update('date', e.target.value)}
          />
        </div>
        <div className="field full">
          <label htmlFor="bk-service">Service of Interest</label>
          <select id="bk-service" value={values.service} onChange={(e) => update('service', e.target.value)}>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="bk-msg">Message</label>
          <textarea
            id="bk-msg"
            rows="4"
            placeholder="Anything we should know?"
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </div>
        <div className="field full">
          <button className="btn btn-accent btn-block" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : 'Request Appointment'}
          </button>
        </div>
      </div>
    </form>
  )
}
