"use client";

import { FormEvent } from "react";

export function InquiryForm() {
  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Event inquiry — ${form.get("eventType") || "Celebration"}`;
    const body = [
      `Name: ${form.get("name")}`, `Email: ${form.get("email")}`, `Phone: ${form.get("phone") || "Not provided"}`,
      `Event type: ${form.get("eventType")}`, `Event date: ${form.get("date") || "Flexible"}`,
      `Venue / city: ${form.get("venue")}`, `Estimated guests: ${form.get("guests") || "Not sure"}`,
      `Investment range: ${form.get("budget")}`, "", "The vision:", `${form.get("vision")}`,
    ].join("\n");
    window.location.href = `mailto:hello@popnbloom.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="inquiryForm" onSubmit={submitInquiry}>
      <div className="formIntro"><span>01</span><div><h3>The essentials</h3><p>Tell us who you are and when we’re celebrating.</p></div></div>
      <div className="fieldGrid">
        <label><span>Your name *</span><input name="name" required placeholder="First and last name" /></label>
        <label><span>Email address *</span><input type="email" name="email" required placeholder="you@example.com" /></label>
        <label><span>Phone number</span><input type="tel" name="phone" placeholder="(604) 000-0000" /></label>
        <label><span>Event date</span><input type="date" name="date" /></label>
      </div>
      <div className="formIntro"><span>02</span><div><h3>The celebration</h3><p>A few details help us imagine the right scale and feeling.</p></div></div>
      <div className="fieldGrid">
        <label><span>Service needed *</span><select name="eventType" required defaultValue=""><option value="" disabled>Select one</option><option>Event décor & backdrop</option><option>Video guestbook</option><option>Both services</option></select></label>
        <label><span>Venue or city *</span><input name="venue" required placeholder="Venue name or neighbourhood" /></label>
        <label><span>Estimated guests</span><input type="number" name="guests" min="1" placeholder="e.g. 75" /></label>
        <label><span>Décor investment *</span><select name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>$500–$1,000</option><option>$1,000–$2,500</option><option>$2,500–$5,000</option><option>$5,000+</option><option>I’m not sure yet</option></select></label>
      </div>
      <label className="visionField"><span>What are you dreaming up? *</span><textarea name="vision" required rows={5} placeholder="Share your colour palette, inspiration, must-have moments, or anything else we should know…" /></label>
      <div className="formEnd"><p>By submitting, your email app will open with these details ready to send.</p><button type="submit">Send my inquiry <span>↗</span></button></div>
    </form>
  );
}
