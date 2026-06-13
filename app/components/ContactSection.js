export default function ContactSection({ heading = 'Get In Touch' }) {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-10">

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto w-full" style={{boxShadow:'0 8px 48px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)'}}>
            <div id="contact-form" className="mb-10 space-y-4 scroll-mt-28">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>mail</span>Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
              <div className="inline-flex items-center gap-2 bg-[#1A6B4A]/[0.07] px-3 py-1.5 rounded-full border border-[#1A6B4A]/15">
                <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '0.8rem' }}>bolt</span>
                <span className="text-[#1A6B4A] font-semibold text-[0.65rem] tracking-widest uppercase">24 Hour Response Time</span>
              </div>
            </div>

            <form action="https://formspree.io/f/xkokvlpr" method="POST" className="space-y-8">
              <input type="hidden" name="_next" value="https://reinstatementcostassessment.org/thank-you" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-gray-200 focus:border-[#1A6B4A]/50 outline-none text-gray-900 text-sm placeholder:text-gray-300 py-2 transition-colors"
                    placeholder="John Smith"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-gray-200 focus:border-[#1A6B4A]/50 outline-none text-gray-900 text-sm placeholder:text-gray-300 py-2 transition-colors"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-phone" className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    id="contact-phone"
                    name="phone"
                    required
                    className="w-full bg-transparent border-b border-gray-200 focus:border-[#1A6B4A]/50 outline-none text-gray-900 text-sm placeholder:text-gray-300 py-2 transition-colors"
                    placeholder="+44 7700 900000"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-company" className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Company <span className="text-red-500">*</span></label>
                  <input
                    id="contact-company"
                    name="company"
                    required
                    className="w-full bg-transparent border-b border-gray-200 focus:border-[#1A6B4A]/50 outline-none text-gray-900 text-sm placeholder:text-gray-300 py-2 transition-colors"
                    placeholder="London Estates Ltd"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-property-type" className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Property Type <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select
                      id="contact-property-type"
                      name="property_type"
                      defaultValue=""
                      required
                      className="w-full bg-transparent border-b border-gray-200 focus:border-[#1A6B4A]/50 outline-none text-gray-900 text-sm appearance-none cursor-pointer py-2 transition-colors"
                    >
                      <option value="" disabled className="text-gray-400">Select type</option>
                      <option>Commercial</option>
                      <option>Residential</option>
                      <option>Industrial</option>
                      <option>Listed Building</option>
                      <option>Mixed-Use</option>
                      <option>Other</option>
                    </select>
                    <span className="material-symbols-outlined text-gray-400 absolute right-0 top-1.5 pointer-events-none" style={{ fontSize: '1rem' }}>expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-num-properties" className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">No. of Properties <span className="text-red-500">*</span></label>
                  <input
                    id="contact-num-properties"
                    name="num_properties"
                    required
                    className="w-full bg-transparent border-b border-gray-200 focus:border-[#1A6B4A]/50 outline-none text-gray-900 text-sm placeholder:text-gray-300 py-2 transition-colors"
                    placeholder="1"
                    type="number"
                    min="1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-service" className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Service Needed <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    required
                    className="w-full bg-transparent border-b border-gray-200 focus:border-[#1A6B4A]/50 outline-none text-gray-900 text-sm appearance-none cursor-pointer py-2 transition-colors"
                  >
                    <option value="" disabled className="text-gray-400">Select a service</option>
                    <option>Desktop Assessment</option>
                    <option>On-Site Survey</option>
                    <option>Portfolio Assessment</option>
                    <option>Not Sure</option>
                  </select>
                  <span className="material-symbols-outlined text-gray-400 absolute right-0 top-1.5 pointer-events-none" style={{ fontSize: '1rem' }}>expand_more</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-notes" className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Notes <span className="text-red-500">*</span></label>
                <textarea
                  id="contact-notes"
                  name="notes"
                  required
                  className="w-full bg-transparent border-b border-gray-200 focus:border-[#1A6B4A]/50 outline-none text-gray-900 text-sm placeholder:text-gray-300 py-2 transition-colors resize-none"
                  placeholder="Briefly describe your property and requirements..."
                  rows="4"
                />
              </div>

              <p className="text-[10px] text-gray-400">All fields are required.</p>

              <button className="btn-shine w-full text-white py-4 rounded-full font-semibold text-sm active:scale-[0.97] transition-transform cursor-pointer">
                Request Consultation
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
