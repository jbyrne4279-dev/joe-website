export default function ContactSection({ heading = 'Get In Touch' }) {
  return (
    <section className="bg-surface-container-low py-20 my-16 mx-4 md:mx-8 rounded-3xl">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: Contact Form */}
          <div>
            <div id="contact-form" className="mb-12 space-y-5 scroll-mt-28">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-primary">{heading}</h2>
              <div className="inline-flex items-center gap-2 bg-[#1A6B4A]/10 px-3 py-1.5 rounded-full border border-[#1A6B4A]/20">
                <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '0.8rem' }}>bolt</span>
                <span className="text-[#1A6B4A] font-bold text-[0.65rem] tracking-widest uppercase">24 Hour Response Time</span>
              </div>
            </div>

            <form action="https://formspree.io/f/xkokvlpr" method="POST" className="space-y-10">
              <input type="hidden" name="_next" value="https://reinstatementcostassessment.org/thank-you" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="John Smith"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-phone" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="+44 7700 900000"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-company" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="London Estates Ltd"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-property-type" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Property Type</label>
                  <div className="relative">
                    <select
                      id="contact-property-type"
                      name="property_type"
                      defaultValue=""
                      className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base appearance-none cursor-pointer py-2 transition-all"
                    >
                      <option value="" disabled>Select type</option>
                      <option>Commercial</option>
                      <option>Residential</option>
                      <option>Industrial</option>
                      <option>Listed Building</option>
                      <option>Mixed-Use</option>
                      <option>Other</option>
                    </select>
                    <span className="material-symbols-outlined text-[#1A6B4A] absolute right-0 top-1.5 pointer-events-none" style={{ fontSize: '1rem' }}>expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-num-properties" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">No. of Properties</label>
                  <input
                    id="contact-num-properties"
                    name="num_properties"
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="1"
                    type="number"
                    min="1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-service" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Service Needed</label>
                <div className="relative">
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base appearance-none cursor-pointer py-2 transition-all"
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Desktop Assessment — £210</option>
                    <option>3-Year Protection — £498.15</option>
                    <option>On-Site Survey — From £675</option>
                    <option>Portfolio Assessment</option>
                    <option>Not Sure</option>
                  </select>
                  <span className="material-symbols-outlined text-[#1A6B4A] absolute right-0 top-1.5 pointer-events-none" style={{ fontSize: '1rem' }}>expand_more</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-notes" className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Notes</label>
                <textarea
                  id="contact-notes"
                  name="notes"
                  className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all resize-none"
                  placeholder="Briefly describe your property and requirements..."
                  rows="4"
                />
              </div>

              <p className="text-[10px] text-secondary/50 -mt-4">
                <span className="text-red-400">*</span> Required fields
              </p>

              <div>
                <button className="btn-shine w-full text-white py-4 rounded-full font-bold text-base active:scale-[0.97] transition-transform sovereign-shadow">
                  Request Consultation
                </button>
              </div>
            </form>
          </div>

          {/* Right: Map + Contact Info + Protection Image */}
          <div className="space-y-6">
            <iframe
              title="17 Hanover Square London W1S 1BN"
              src="https://www.google.com/maps?q=17+Hanover+Square,+London+W1S+1BN&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[260px] rounded-2xl border border-[#1A6B4A]/20 sovereign-shadow"
              allowFullScreen
            />

            <address className="liquid-glass rounded-2xl p-8 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.10)] not-italic">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Phone</p>
                    <a href="tel:+442031788099" className="text-primary font-medium hover:text-[#1A6B4A] transition-colors">020 3178 8099</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:info@rca-ltd.com" className="text-primary font-medium hover:text-[#1A6B4A] transition-colors">info@rca-ltd.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Address</p>
                    <p className="text-primary font-medium">17 Hanover Square, London W1S 1BN</p>
                  </div>
                </div>
              </div>
            </address>

            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden sovereign-shadow border border-[#1A6B4A]/20">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80"
                alt="RICS-regulated protection safeguarding your property assets"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A6B4A]/80 via-[#1A6B4A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  </div>
                  <span className="text-white font-bold text-xs tracking-widest uppercase">RICS Protection</span>
                </div>
                <p className="text-white text-lg font-bold leading-tight max-w-xs">Your assets, accurately valued and fully protected.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
