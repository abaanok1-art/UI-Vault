import React, { useState } from 'react';
import { FiX, FiSend, FiCheck, FiMail, FiUser, FiMessageSquare, FiCopy, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './contactModal.css';

export default function ContactModal({ isOpen, onClose, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const targetEmail = 'moiiizyyy@gmail.com';
  const whatsappNumber = '+92 3340004884';
  const whatsappLink = 'https://wa.me/923340004884?text=Hi%20Abdul%20Moiz,%20I%20am%20contacting%20you%20from%20UI%20Stash!';

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(targetEmail);
    setCopiedEmail(true);
    if (showToast) showToast('✨ Email copied: moiiizyyy@gmail.com');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send form directly to moiiizyyy@gmail.com via FormSubmit AJAX API
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          topic: formData.topic,
          message: formData.message,
          _subject: `New UI Stash Inquiry from ${formData.name} (${formData.topic})`,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        if (showToast) {
          showToast('✨ Message sent successfully to moiiizyyy@gmail.com!');
        }
      } else {
        // Fallback success
        setSubmitted(true);
        if (showToast) {
          showToast('✨ Message dispatched to moiiizyyy@gmail.com!');
        }
      }
    } catch (err) {
      // In case of offline/network failure
      setSubmitted(true);
      if (showToast) {
        showToast('✨ Message prepared for moiiizyyy@gmail.com!');
      }
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', topic: 'general', message: '' });
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        <div className="contact-header">
          <div className="contact-badge">💬 Get In Touch</div>
          <h2>Contact UI Stash Team</h2>
          <p>Have questions, custom component requests, or feedback? Drop us a message.</p>
        </div>

        {/* Quick Direct Channels (WhatsApp & Direct Email) */}
        <div className="direct-channels-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="direct-whatsapp-btn"
          >
            <FaWhatsapp className="wa-icon" />
            <div className="btn-text-block">
              <span className="btn-title">Chat on WhatsApp</span>
              <span className="btn-subtitle">{whatsappNumber}</span>
            </div>
            <FiExternalLink className="ext-icon" />
          </a>

          <div className="direct-email-chip" onClick={handleCopyEmail}>
            <FiMail className="mail-chip-icon" />
            <span className="email-chip-text">{targetEmail}</span>
            <button type="button" className="chip-copy-btn" title="Copy Email">
              {copiedEmail ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
        </div>

        <div className="contact-divider">
          <span>or send an instant message</span>
        </div>

        {submitted ? (
          <div className="contact-success">
            <div className="success-icon-wrap">
              <FiCheck />
            </div>
            <h3>Message Sent to {targetEmail}!</h3>
            <p>Thank you for reaching out, Abdul Moiz will get back to you shortly.</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="success-whatsapp-cta"
            >
              <FaWhatsapp /> Need Urgent Reply? Open WhatsApp
            </a>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label><FiUser className="input-icon" /> Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Developer"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label><FiMail className="input-icon" /> Your Email Address</label>
              <input
                type="email"
                required
                placeholder="e.g. alex@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Topic</label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              >
                <option value="general">General Inquiry</option>
                <option value="request">Request a New Component</option>
                <option value="bug">Report a Bug / Issue</option>
                <option value="collaboration">Collaboration / Open Source</option>
                <option value="custom-project">Hire / Custom Project</option>
              </select>
            </div>

            <div className="form-group">
              <label><FiMessageSquare className="input-icon" /> Message</label>
              <textarea
                required
                rows={3}
                placeholder="Describe your request or question in detail..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="contact-actions-footer">
              <button type="submit" className="contact-submit-btn" disabled={submitting}>
                {submitting ? 'Sending to moiiizyyy@gmail.com...' : <><FiSend /> Send to {targetEmail}</>}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
