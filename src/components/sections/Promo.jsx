import React, { useState } from 'react';

const GetWebsitePromo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessType: 'E-commerce / Store',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Brand Colors
  const brand = {
    primary: '#eaeef3',
    secondary: '#023e8a',
    main: '#012a4a',
    basic: '#7cc4f4',
  };

  const handleOpen = () => {
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // HANDLES SUBMISSION IN BACKGROUND (NO REDIRECT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/quantumdynamicgfn@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New ₦35,000 Website Promo Inquiry!',
          'Full Name': formData.fullName,
          'Phone Number': formData.phone,
          'Business Type': formData.businessType,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          phone: '',
          businessType: 'E-commerce / Store',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Unable to submit request. Check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* --- PROMO BANNER SECTION --- */}
      <section
        style={{
          background: `linear-gradient(135deg, ${brand.main} 0%, ${brand.secondary} 100%)`,
          borderRadius: '24px',
          padding: '40px 28px',
          margin: '40px auto',
          maxWidth: '1200px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(1, 42, 74, 0.5)',
          border: `1px solid ${brand.basic}35`,
          color: brand.primary,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div style={{ flex: '1 1 500px', maxWidth: '700px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(124, 196, 244, 0.15)',
                border: `1px solid ${brand.basic}`,
                color: brand.basic,
                padding: '6px 14px',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.5px',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              🔥 Quantum Dynamics GFN Promo
            </div>

            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '14px', color: brand.primary }}>
              Get a Professional Landing-Page Website for Your Brand for as Low as{' '}
              <span style={{ color: brand.basic }}>
                ₦55,000!
              </span>
            </h2>

            <p style={{ fontSize: '15px', color: brand.primary, opacity: 0.85, lineHeight: '1.6', margin: 0 }}>
              Elevate your business, attract clients, and boost credibility with a stunning, high-speed, mobile-responsive custom website crafted by Quantum Dynamics GFN.
            </p>
          </div>

          <div>
            <button
              onClick={handleOpen}
              style={{
                background: `linear-gradient(90deg, ${brand.secondary}, ${brand.basic})`,
                color: '#ffffff',
                border: 'none',
                padding: '16px 36px',
                borderRadius: '16px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: `0 10px 25px ${brand.basic}40`,
              }}
            >
              Claim Your Offer Now 🚀
            </button>
          </div>
        </div>
      </section>

      {/* --- MODAL WITH BACKGROUND SUBMIT --- */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(1, 42, 74, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
          onClick={handleClose}
        >
          <div
            style={{
              background: brand.main,
              border: `1px solid ${brand.basic}50`,
              borderRadius: '24px',
              width: '100%',
              maxWidth: '480px',
              padding: '32px',
              color: brand.primary,
              position: 'relative',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: brand.primary,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>

            {isSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '20px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '48px' }}>🎉</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: brand.basic, margin: 0 }}>
                  Offer Claimed!
                </h3>
                <p style={{ fontSize: '14px', opacity: 0.9, margin: 0, lineHeight: '1.5' }}>
                  Thank you! We have received your website request. The Quantum Dynamics GFN team will reach out via WhatsApp/Phone shortly.
                </p>
                <button
                  onClick={handleClose}
                  style={{
                    marginTop: '16px',
                    background: `linear-gradient(90deg, ${brand.secondary}, ${brand.basic})`,
                    border: 'none',
                    color: '#ffffff',
                    padding: '10px 24px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontWeight: '700',
                  }}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px', color: brand.primary }}>
                  Build Your Website 💻
                </h3>
                <p style={{ fontSize: '13px', color: brand.basic, marginBottom: '24px' }}>
                  Fill in your details to secure your ₦35,000 web design slot with Quantum Dynamics GFN.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: brand.primary, marginBottom: '6px' }}>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.06)', border: `1px solid ${brand.basic}40`, color: brand.primary, boxSizing: 'border-box', outline: 'none' }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: brand.primary, marginBottom: '6px' }}>WhatsApp Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="08012345678"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.06)', border: `1px solid ${brand.basic}40`, color: brand.primary, boxSizing: 'border-box', outline: 'none' }}
                    />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: brand.primary, marginBottom: '6px' }}>Business Type</label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px', borderRadius: '12px', background: brand.secondary, border: `1px solid ${brand.basic}40`, color: brand.primary, boxSizing: 'border-box', outline: 'none' }}
                    >
                      <option value="E-commerce / Store">E-commerce / Online Shop</option>
                      <option value="Business Landing Page">Business / Company Site</option>
                      <option value="Portfolio / Personal">Personal Brand / Portfolio</option>
                      <option value="School / Organization">School / NGO / Institution</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: '12px',
                      background: `linear-gradient(90deg, ${brand.secondary}, ${brand.basic})`,
                      border: 'none',
                      color: '#ffffff',
                      fontWeight: '700',
                      fontSize: '15px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                      boxShadow: `0 6px 20px ${brand.basic}40`,
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Claim Request 🚀'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GetWebsitePromo;