"use client";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-gray-900">Dr. Ann N.</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#why-us" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Why Us</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <a href="#contact" className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
              Get Started
            </a>
          </div>
          <a href="#contact" className="md:hidden px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm text-white/90 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Dentist
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight animate-fade-in-up">
              Dr. Ann N. Hebda: Complete Health Dentistry
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
              Dr. Ann N. Hebda: Complete Health Dentistry is a dental practice renowned for its comprehensive approach to oral health care. With a perfect 5-star rating from 124 reviews, the practice is highly regarded in its community but lacks a digital presence
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in delay-0">
              <div className="text-3xl lg:text-4xl font-black text-indigo-600">5★</div>
              <div className="mt-1 text-sm text-gray-500 font-medium">Customer Rating</div>
            </div>
            <div className="text-center animate-scale-in delay-100">
              <div className="text-3xl lg:text-4xl font-black text-indigo-600">500+</div>
              <div className="mt-1 text-sm text-gray-500 font-medium">Happy Clients</div>
            </div>
            <div className="text-center animate-scale-in delay-200">
              <div className="text-3xl lg:text-4xl font-black text-indigo-600">5+</div>
              <div className="mt-1 text-sm text-gray-500 font-medium">Services Offered</div>
            </div>
            <div className="text-center animate-scale-in delay-300">
              <div className="text-3xl lg:text-4xl font-black text-indigo-600">24/7</div>
              <div className="mt-1 text-sm text-gray-500 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">What We Offer</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-black text-gray-900">Our Services</h2>
            <p className="mt-4 text-gray-500 text-lg">Comprehensive solutions designed to meet your every need.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-0">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">General Dentistry</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">Professional general dentistry services tailored to your needs.</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-100">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Preventive Care</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">Professional preventive care services tailored to your needs.</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-200">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cosmetic Dentistry</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">Professional cosmetic dentistry services tailored to your needs.</p>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Restorative Dentistry</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">Professional restorative dentistry services tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Story */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">About Us</span>
              <h2 className="mt-3 text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                Your Trusted Dentist Partner
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Dr. Ann N. Hebda: Complete Health Dentistry is a dental practice renowned for its comprehensive approach to oral health care. With a perfect 5-star rating from 124 reviews, the practice is highly regarded in its community but lacks a digital presence to reach a broader audience.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Proven Results</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Quick Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Client First</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up delay-200">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-100 via-indigo-50 to-purple-100 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-6xl lg:text-8xl font-black text-indigo-600/20">DAN</div>
                  <p className="mt-4 text-indigo-600 font-semibold">Dr. Ann N. Hebda: Complete Health Dentistry</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-indigo-500 opacity-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-indigo-500 opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-gradient-to-br from-indigo-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-indigo-200 uppercase tracking-wider">Why Choose Us</span>
              <h2 className="mt-3 text-3xl lg:text-5xl font-black leading-tight">
                What Sets Us Apart
              </h2>
              <p className="mt-4 text-white/70 text-lg">We take pride in delivering exceptional quality and building lasting relationships with our clients.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 animate-fade-in-up delay-0">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-white/90 font-medium">Patient Testimonials</span>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 animate-fade-in-up delay-100">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-white/90 font-medium">Professional Certifications</span>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 animate-fade-in-up delay-200">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-white/90 font-medium">5-star Ratings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / CTA Band */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative bg-gray-50 rounded-3xl p-12 lg:p-16">
            <svg className="w-12 h-12 mx-auto text-indigo-200 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
              We are committed to providing the highest quality dentist services. Our goal is to exceed your expectations and build a lasting relationship based on trust and results.
            </p>
            <div className="mt-8">
              <p className="font-bold text-gray-900">Dr. Ann N. Hebda: Complete Health Dentistry</p>
              <p className="text-sm text-gray-500 mt-1">5.0(124) · Dentist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Get in Touch</span>
              <h2 className="mt-3 text-3xl lg:text-5xl font-black text-gray-900">Let's Work Together</h2>
              <p className="mt-4 text-gray-500 text-lg">Ready to get started? Reach out and let us help you achieve your goals.</p>
              <div className="mt-10 space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-lg font-semibold text-gray-900">5.0(124) · Dentist</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm resize-none" placeholder="Tell us about your needs..." />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold">Dr. Ann N.</h3>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">Dr. Ann N. Hebda: Complete Health Dentistry is a dental practice renowned for its comprehensive approach to oral health care. With a perfect 5-star ra</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Contact Info</h4>
              <ul className="mt-4 space-y-3">
                
                <li className="text-gray-300 text-sm">5.0(124) · Dentist</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">&copy; 2026 Dr. Ann N. Hebda: Complete Health Dentistry. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-gray-100 z-40">
        <a href="#contact" className="block w-full py-3.5 bg-indigo-600 text-white text-center font-semibold rounded-xl shadow-lg">
          Get Started
        </a>
      </div>
    </main>
  );
}
