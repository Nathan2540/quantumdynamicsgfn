import React, { useState } from 'react';
import colors from '../../theme/color';

const Bootcamp = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childAge: '',
    track: '🎨 Web Design & Coding',
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

  const tracks = [
    { label: '🎨 Web Design & Coding', bg: 'rgba(124, 196, 244, 0.15)', border: '#7cc4f4' },
    { label: '🚀 Game Dev & Logic', bg: 'rgba(2, 62, 138, 0.25)', border: '#023e8a' },
    { label: '🤖 AI & Robotics Intro', bg: 'rgba(124, 196, 244, 0.25)', border: '#7cc4f4' },
    { label: '✨ Creative Graphics', bg: 'rgba(234, 238, 243, 0.15)', border: '#eaeef3' },
  ];

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
          _subject: 'New Holiday Kids Bootcamp Registration!',
          'Parent Name': formData.parentName,
          'Parent Email': formData.parentEmail,
          'Parent Phone': formData.parentPhone,
          'Child Name': formData.childName,
          'Child Age': formData.childAge,
          'Selected Track': formData.track,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          parentName: '',
          parentEmail: '',
          parentPhone: '',
          childName: '',
          childAge: '',
          track: '🎨 Web Design & Coding',
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
    <section
      id="kids-bootcamp"
      style={{
        background: `linear-gradient(135deg, ${brand.main} 0%, ${brand.secondary} 60%, ${brand.main} 100%)`,
        color: brand.primary,
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        @keyframes floatAnim {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .feature-card-float { animation: floatAnim 4s ease-in-out infinite; }
        .bootcamp-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
        }
        @media (min-width: 992px) { .bootcamp-grid { grid-template-columns: 1.2fr 0.8fr; } }
        .input-row { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 576px) { .input-row { grid-template-columns: 1fr 1fr; } }
      `}</style>

      {/* Decorative Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          left: '-5%',
          width: '320px',
          height: '320px',
          background: brand.basic,
          filter: 'blur(130px)',
          opacity: 0.25,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          background: brand.secondary,
          filter: 'blur(140px)',
          opacity: 0.4,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="bootcamp-grid" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span
              style={{
                background: `linear-gradient(90deg, ${brand.secondary}, ${brand.basic})`,
                color: '#ffffff',
                padding: '6px 16px',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                boxShadow: `0 0 15px rgba(124, 196, 244, 0.3)`,
              }}
            >
              🚀 Quantum Holiday Tech Academy
            </span>
            <span style={{ fontSize: '13px', color: brand.primary, opacity: 0.85, fontWeight: '500' }}>
              Ages 7 - 17 • Practical Hands-On Learning
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: '900', lineHeight: '1.15', margin: 0 }}>
            Turn Screen Time Into{' '}
            <span
              style={{
                background: `linear-gradient(90deg, ${brand.basic}, ${brand.primary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Superpowers
            </span>{' '}
            This Holiday! ⚡
          </h2>

          <p style={{ fontSize: '16px', color: brand.primary, opacity: 0.9, lineHeight: '1.6', margin: 0, maxWidth: '600px' }}>
            Give your kids real-world skills in coding, game logic, AI, and creative web design with Quantum Dynamics GFN.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginTop: '8px' }}>
            <div className="feature-card-float" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '20px', border: `1px solid ${brand.basic}40` }}>
              <div style={{ fontSize: '24px', marginBottom: '4px' }}>💻</div>
              <div style={{ fontWeight: '700', fontSize: '14px', color: brand.primary }}>Build Real Apps</div>
              <div style={{ fontSize: '12px', color: brand.basic }}>Creating, not consuming</div>
            </div>

            <div className="feature-card-float" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '20px', border: `1px solid ${brand.basic}40`, animationDelay: '1.5s' }}>
              <div style={{ fontSize: '24px', marginBottom: '4px' }}>🎮</div>
              <div style={{ fontWeight: '700', fontSize: '14px',   }}>Game Logic</div>
              <div style={{ fontSize: '12px', color: brand.basic }}>Problem-solving skills</div>
            </div>

            <div className="feature-card-float" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '20px', border: `1px solid ${brand.basic}40`, animationDelay: '3s' }}>
              <div style={{ fontSize: '24px', marginBottom: '4px' }}>🏆</div>
              <div style={{ fontWeight: '700', fontSize: '14px', color: brand.primary }}>Certificates</div>
              <div style={{ fontSize: '12px', color: brand.basic }}>Project showcases</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: brand.basic, fontWeight: '700' }}>
              Select a learning track:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tracks.map((t, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, track: t.label }))}
                  style={{
                    background: formData.track === t.label ? brand.basic : t.bg,
                    color: formData.track === t.label ? brand.main : brand.primary,
                    border: `1px solid ${t.border}`,
                    padding: '6px 14px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: REGISTRATION FORM */}
        <div>
          <div
            style={{
              background: 'rgba(1, 42, 74, 0.75)',
              backdropFilter: 'blur(16px)',
              padding: '28px',
              borderRadius: '28px',
              border: `1px solid ${brand.basic}35`,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', margin: 0, color: brand.primary }}>
                Register Your Child
              </h3>
              <span style={{ background: brand.secondary, color: brand.primary, padding: '3px 10px', borderRadius: '50px', fontSize: '11px', fontWeight: '700', border: `1px solid ${brand.basic}60` }}>
                Limited Slots
              </span>
            </div>

            {isSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '30px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '48px' }}>🎉</div>
                <h4 style={{ fontSize: '20px', fontWeight: '700', color: brand.basic, margin: 0 }}>
                  Registration Received!
                </h4>
                <p style={{ fontSize: '14px', opacity: 0.85, margin: 0, lineHeight: '1.5' }}>
                  Thank you for registering. Our team at Quantum Dynamics GFN will reach out to you shortly via phone or email!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    marginTop: '12px',
                    background: 'transparent',
                    border: `1px solid ${brand.basic}`,
                    color: brand.basic,
                    padding: '8px 18px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  Register Another Child
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: brand.basic, marginBottom: '5px', fontWeight: '600' }}>
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nathan Jacob"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${brand.basic}40`,
                      color: brand.primary,
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontSize: '13px',
                    }}
                  />
                </div>

                <div className="input-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: brand.basic, marginBottom: '5px', fontWeight: '600' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@gmail.com"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: `1px solid ${brand.basic}40`,
                        color: brand.primary,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '13px',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: brand.basic, marginBottom: '5px', fontWeight: '600' }}>
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08012345678"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: `1px solid ${brand.basic}40`,
                        color: brand.primary,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '13px',
                      }}
                    />
                  </div>
                </div>

                <div className="input-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: brand.basic, marginBottom: '5px', fontWeight: '600' }}>
                      Child's Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Toby Jacob"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: `1px solid ${brand.basic}40`,
                        color: brand.primary,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '13px',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: brand.basic, marginBottom: '5px', fontWeight: '600' }}>
                      Child's Age
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 11"
                      value={formData.childAge}
                      onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: `1px solid ${brand.basic}40`,
                        color: brand.primary,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '13px',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: brand.basic, marginBottom: '5px', fontWeight: '600' }}>
                    Selected Track
                  </label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '12px',
                      background: brand.main,
                      border: `1px solid ${brand.basic}40`,
                      color: brand.primary,
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontSize: '13px',
                    }}
                  >
                    {tracks.map((t, idx) => (
                      <option key={idx} value={t.label} style={{ background: brand.main, color: brand.primary }}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '10px',
                    width: '100%',
                    padding: '14px',
                    borderRadius: '14px',
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
                  {isSubmitting ? 'Submitting...' : '🚀 Reserve Spot Now'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bootcamp;