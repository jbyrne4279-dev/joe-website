import MapboxMap from './MapboxMap'

export default function ContactSection({ heading = 'Get In Touch' }) {
  return (
    <section className="bg-surface-container-low py-20 my-16 mx-4 md:mx-8 rounded-3xl">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: Contact Form */}
          <div>
            <div className="mb-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">{heading}</h2>
              <div className="inline-flex items-center gap-3 bg-[#1A6B4A]/10 px-5 py-2.5 rounded-full border border-[#1A6B4A]/20">
                <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>bolt</span>
                <span className="text-[#1A6B4A] font-bold text-xs tracking-widest uppercase">24 Hour Response Promise</span>
              </div>
            </div>

            <form action="https://formspree.io/f/xkokvlpr" method="POST" className="space-y-10">
              <input type="hidden" name="_next" value="/thank-you" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="John Smith"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
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
                  <label className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Phone Number</label>
                  <input
                    name="phone"
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="+44 7700 900000"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Company</label>
                  <input
                    name="company"
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="London Estates Ltd"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Property Type</label>
                  <div className="relative">
                    <select
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
                  <label className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">No. of Properties</label>
                  <input
                    name="num_properties"
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
                    placeholder="1"
                    type="number"
                    min="1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Service Needed</label>
                <div className="relative">
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#1A6B4A] outline-none text-primary text-base appearance-none cursor-pointer py-2 transition-all"
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Desktop Assessment — £210</option>
                    <option>3-Year Protection — £298.15</option>
                    <option>On-Site Survey — From £675</option>
                    <option>Portfolio Assessment</option>
                    <option>Not Sure</option>
                  </select>
                  <span className="material-symbols-outlined text-[#1A6B4A] absolute right-0 top-1.5 pointer-events-none" style={{ fontSize: '1rem' }}>expand_more</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#1A6B4A] uppercase tracking-widest">Notes</label>
                <textarea
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

          {/* Right: Contact Info + Map */}
          <div className="space-y-6">
            <div className="liquid-glass rounded-2xl p-8 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.10)]">
              <div className="flex items-center gap-5 mb-8">
                <img
                  className="w-16 h-16 rounded-xl object-cover sovereign-shadow"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9d72qR4-i-yGafkqrWIDL9pAhkvGNZCOrFhVLpv9083wCMx7sq2Y2KV38gNwy8EdxBiZ2J_jWdh6tNDVhMdT3OK-c-oiztkFuFnoJJsOAaQr6QZv-MySrs3nM_LeLRvGYkQvog11s67XHENlLCLFUqs0oPgKM_ZmvrR10m7AFruj0qVfsUyVkyPg5SKZSe0-gWL43p-9jzQi-3rGljOYSHpv8AdVW8sABDM0tNXww5XJ1smfQySJcH_lUjGdo2lMlAYVmcw74gg"
                  alt="Expert Lead Surveyor"
                />
                <div>
                  <h4 className="text-lg font-bold text-primary">Expert Lead Surveyor</h4>
                  <p className="text-[#1A6B4A] text-sm font-semibold">Head of Practice</p>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Phone</p>
                    <p className="text-primary font-medium">020 3178 8099</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-primary font-medium">info@rca-ltd.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-0.5">Address</p>
                    <p className="text-primary font-medium">17 Hanover Square London W1S 1BN</p>
                  </div>
                </div>
              </div>
            </div>

            <MapboxMap />
          </div>

        </div>
      </div>
    </section>
  )
}
