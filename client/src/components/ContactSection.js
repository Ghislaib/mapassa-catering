import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    eventType: '',
    venue: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name should be at least 2 characters';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.trim())) return 'Invalid email address';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return 'Phone number is required';
    // Simple phone regex: digits, spaces, dashes, parentheses, plus sign
    const re = /^[+\d]?(?:[\d\s-().]*)$/;
    if (!re.test(phone.trim())) return 'Invalid phone number';
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.name = validateName(form.name);
    newErrors.email = validateEmail(form.email);
    newErrors.phone = validatePhone(form.phone);
    newErrors.date = form.date.trim() ? '' : 'Date is required';
    newErrors.guests = form.guests.trim() ? '' : 'Guests number is required';

    // Filter out empty errors
    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    // Clear error on field change
    setErrors((errs) => ({ ...errs, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/quote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error('Network error');
      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        eventType: '',
        venue: '',
        message: '',
      });
      setErrors({});
    } catch (err) {
      setStatus('error');
    }
  };

  // Check if form is valid for disabling submit button
  const isValid =
    !validateName(form.name) &&
    !validateEmail(form.email) &&
    !validatePhone(form.phone) &&
    form.date.trim() &&
    form.guests.trim();

  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Get a Quote</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6"
        noValidate
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={onChange}
            className={`mt-1 w-full p-3 border rounded focus:outline-none focus:ring ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            className={`mt-1 w-full p-3 border rounded focus:outline-none focus:ring ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-medium">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={onChange}
            className={`mt-1 w-full p-3 border rounded focus:outline-none focus:ring ${
              errors.phone ? 'border-red-500' : ''
            }`}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Date + Guests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block font-medium">
              Event Date <span className="text-red-500">*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              value={form.date}
              onChange={onChange}
              className={`mt-1 w-full p-3 border rounded focus:outline-none focus:ring ${
                errors.date ? 'border-red-500' : ''
              }`}
            />
            {errors.date && (
              <p className="text-red-600 text-sm mt-1">{errors.date}</p>
            )}
          </div>
          <div>
            <label htmlFor="guests" className="block font-medium">
              Guests <span className="text-red-500">*</span>
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="300"
              required
              value={form.guests}
              onChange={onChange}
              className={`mt-1 w-full p-3 border rounded focus:outline-none focus:ring ${
                errors.guests ? 'border-red-500' : ''
              }`}
            />
            {errors.guests && (
              <p className="text-red-600 text-sm mt-1">{errors.guests}</p>
            )}
          </div>
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="block font-medium">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={form.eventType}
            onChange={onChange}
            className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring"
          >
            <option value="">Select one…</option>
            <option>Wedding</option>
            <option>Corporate</option>
            <option>Birthday</option>
            <option>Private Party</option>
            <option>Other</option>
          </select>
        </div>

        {/* Venue / City */}
        <div>
          <label htmlFor="venue" className="block font-medium">
            Venue / City
          </label>
          <input
            id="venue"
            name="venue"
            type="text"
            value={form.venue}
            onChange={onChange}
            className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring"
          />
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="message" className="block font-medium">
            Special Requests{' '}
            <span className="text-sm text-gray-500">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={onChange}
            className="mt-1 w-full p-3 border rounded focus:outline-none focus:ring"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || status === 'loading'}
          className={`w-full py-3 rounded font-semibold text-white ${
            isValid && status !== 'loading'
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-red-600 opacity-50 cursor-not-allowed'
          }`}
        >
          {status === 'loading' ? 'Sending…' : 'Request Quote'}
        </button>

        {/* Status messages */}
        {status === 'success' && (
          <p className="text-center text-green-600">
            Thanks! We’ll be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-600">
            Oops—something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
