import React, { useState } from 'react';
import { Mail, Phone, Facebook, CheckCircle, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgoovzkb';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="pt-32 pb-12 md:pt-52 md:pb-24 wedding-bg floral-overlay overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          <div>
            <span className="text-gold font-bold tracking-widest uppercase text-[10px] md:text-sm">BOOK YOUR DATE TODAY!</span>
            <h2 className="text-3xl md:text-6xl font-serif text-black mt-2 md:mt-4 mb-4 md:mb-8">Let’s Start Your <span className="italic">Story</span></h2>
            <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-10 max-w-md">
              Ready to capture your timeless moments? Fill out the form below or reach us directly via Mobile Number or Email.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-sm border border-neutral-100 rounded-full flex items-center justify-center text-gold">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] md:text-xs text-gray-400 uppercase tracking-[0.2em]">Email Us</p>
                  <a href="mailto:clifforddendiro@gmail.com" className="text-sm md:text-black font-medium hover:text-gold transition-colors">clifforddendiro@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-sm border border-neutral-100 rounded-full flex items-center justify-center text-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] md:text-xs text-gray-400 uppercase tracking-[0.2em]">Mobile</p>
                  <a href="tel:+639162338050" className="text-sm md:text-black font-medium hover:text-gold transition-colors">+63 916-233-8050</a>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <p className="text-[9px] md:text-xs text-gray-400 uppercase tracking-[0.2em] mb-3 md:mb-4">Follow Our Journey</p>
              <div className="flex gap-3 md:gap-4">
                <a 
                  href={SOCIAL_LINKS.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 md:w-10 md:h-10 border border-neutral-200 flex items-center justify-center text-black hover:bg-gold hover:border-gold hover:text-white transition-all"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-5 md:p-12 shadow-xl border border-neutral-100 relative overflow-hidden">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-serif text-black">Message Sent Successfully!</h3>
                <p className="text-gray-500 max-w-xs">
                  Thank you for reaching out. Clifford will get back to you personally within 24-48 hours to discuss your love story.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-[10px] font-bold tracking-widest uppercase text-gold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[9px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 text-black/70">Your Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-white border border-neutral-200 px-3 py-2 md:px-4 md:py-3 text-sm focus:outline-none focus:border-gold transition-colors text-black"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 text-black/70">Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-white border border-neutral-200 px-3 py-2 md:px-4 md:py-3 text-sm focus:outline-none focus:border-gold transition-colors text-black"
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[9px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 text-black/70">Contact Number</label>
                    <input 
                      name="phone"
                      type="tel" 
                      required
                      className="w-full bg-white border border-neutral-200 px-3 py-2 md:px-4 md:py-3 text-sm focus:outline-none focus:border-gold transition-colors text-black"
                      placeholder="+63 XXX-XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 text-black/70">Wedding Date</label>
                    <input 
                      name="wedding_date"
                      type="date" 
                      required
                      className="w-full bg-white border border-neutral-200 px-3 py-2 md:px-4 md:py-3 text-sm focus:outline-none focus:border-gold transition-colors text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 text-black/70">Interested In</label>
                  <select 
                    name="package"
                    className="w-full bg-white border border-neutral-200 px-3 py-2 md:px-4 md:py-3 text-sm focus:outline-none focus:border-gold transition-colors appearance-none text-black"
                  >
                    <option value="">Select a Package</option>
                    <option value="essential">CINEMATIC ESSENTIAL PACKAGE</option>
                    <option value="signature">CINEMATIC SIGNATURE PACKAGE</option>
                    <option value="grand">CINEMATIC GRAND PACKAGE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 text-black/70">Your Story / Message</label>
                  <textarea 
                    name="message"
                    rows={3}
                    className="w-full bg-white border border-neutral-200 px-3 py-2 md:px-4 md:py-3 text-sm focus:outline-none focus:border-gold transition-colors text-black"
                    placeholder="Tell us a little about your wedding..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-xs py-2">
                    <AlertCircle size={14} />
                    <span>Oops! Something went wrong. Please try again.</span>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full py-3.5 md:py-5 text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-xl shadow-black/5 flex items-center justify-center gap-2
                    ${status === 'submitting' ? 'bg-neutral-400 cursor-not-allowed' : 'bg-black hover:bg-gold hover:scale-[1.02]'}`}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
