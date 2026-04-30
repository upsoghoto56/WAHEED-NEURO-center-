'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  Phone, 
  Menu, 
  X, 
  Star, 
  Brain, 
  BrainCircuit, 
  Zap, 
  Activity, 
  ActivitySquare, 
  Dna,
  Users,
  Clock,
  Building2,
  MapPin,
  MessageCircle
} from 'lucide-react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const fadeInUrl = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EEF4FF] text-[#0A1F44] font-sans selection:bg-[#1E90FF] selection:text-white">
      {/* 1. TOP BAR */}
      <div className="bg-[#0A1F44] text-white py-2 px-4 text-xs sm:text-sm font-medium z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="tel:+923309227583" className="flex items-center gap-2 hover:text-[#1E90FF] transition-colors">
            <Phone size={14} className="text-[#1E90FF]" />
            +92 330 9227583
          </a>
          <div className="flex items-center gap-2">
            <span className="bg-[#1E90FF] text-white px-2 py-0.5 rounded text-xs font-semibold">
              Opens 8 PM
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex flex-col">
              <span className="text-[#0A1F44] font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
                WAHEED NEURO & STROKE CENTRE
              </span>
              <span className="text-sm text-slate-500 font-medium hidden sm:block">
                Dr. Muhammad Bilal Waheed | Neurologist
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-600 hover:text-[#1E90FF] font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#0A1F44] p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-[#1E90FF] hover:bg-slate-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-grow flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:auto-rows-auto">
        {/* 3. HERO SECTION */}
        <section id="home" className="lg:col-span-8 relative bg-gradient-to-br from-white to-[#EEF4FF] rounded-2xl p-6 sm:p-10 shadow-[0_4px_12px_rgba(0,31,68,0.04)] overflow-hidden flex flex-col justify-center gap-8 lg:flex-row lg:items-center">
          <div className="relative z-10 w-full">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F44] leading-tight mb-4">
                Faisalabad&apos;s Leading Neurology & Stroke Specialist
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                <strong className="text-[#0A1F44]">Dr. Muhammad Bilal Waheed</strong> — Expert Neurological Care with Compassion and Precision
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-6 py-2.5 text-sm font-semibold rounded-lg text-white bg-[#0A1F44] hover:bg-opacity-90 hover:shadow-lg transition-all focus:outline-none"
                >
                  Book Appointment
                </a>
                <a 
                  href="tel:+923309227583" 
                  className="inline-flex justify-center items-center px-6 py-2.5 border border-[#1E90FF] text-sm font-semibold rounded-lg text-[#1E90FF] bg-transparent hover:bg-[#1E90FF] hover:text-white transition-all focus:outline-none"
                >
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600 pt-3 border-t border-slate-200">
                <div className="flex items-center gap-1">
                  <Star className="text-amber-400 fill-amber-400" size={16} />
                  <span className="text-[#0A1F44] font-bold">4.7 Rating</span>
                </div>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>117+ Reviews</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>Neurology Expert</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>Prime Care Hospital</span>
              </div>
            </motion.div>

            {/* SVG line overlay for background effect */}
            <svg viewBox="0 0 400 100" className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-auto opacity-20 pointer-events-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M 0 50 L 40 50 L 50 20 L 60 80 L 70 50 L 100 50 L 110 40 L 120 60 L 130 50 L 180 50 L 190 10 L 200 90 L 210 50 L 250 50 L 260 45 L 270 55 L 280 50 L 400 50" 
                stroke="#1E90FF" 
                strokeWidth="2"
                className="pulse-path"
                style={{
                  strokeDasharray: '1000',
                  strokeDashoffset: '1000',
                  animation: 'dash 3s linear infinite'
                }}
              />
              <style>
                {`
                  @keyframes dash {
                    0% { stroke-dashoffset: 1000; }
                    50% { stroke-dashoffset: 0; }
                    100% { stroke-dashoffset: -1000; }
                  }
                `}
              </style>
            </svg>
          </div>
        </section>

        {/* 4. ABOUT DOCTOR SECTION */}
        <section id="about" className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,31,68,0.04)] border-l-4 border-[#0A1F44] flex flex-col">
          <motion.div {...fadeInUrl} className="flex flex-col items-center text-center mb-6">
            <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full border-[3px] border-[#1E90FF] overflow-hidden mb-4 shadow-md">
              <Image 
                src="https://i.ibb.co/Y74BDbZt/file-00000000e7e87207b1c09965df3e16d6.png" 
                alt="Dr. Muhammad Bilal Waheed" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A1F44] m-0 mb-1 leading-tight">Dr. Muhammad Bilal Waheed</h3>
              <p className="text-sm text-[#1E90FF] m-0 font-medium">MBBS, Neurology Specialist</p>
              <p className="text-xs text-slate-500 m-0 mt-1">Waheed Neuro & Stroke Centre, Faisalabad</p>
            </div>
          </motion.div>

          <motion.div {...fadeInUrl} className="text-sm text-slate-600 mb-4 flex-grow leading-relaxed">
            <p>
              Highly skilled neurologist at Prime Care Hospital. Known for detailed diagnosis and treatment of all neurological conditions with extraordinary expertise. A doctor trusted by colleagues and patients alike.
            </p>
          </motion.div>

          <motion.div {...fadeInUrl} className="space-y-2 mt-auto pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="text-[#1E90FF]">✅</span>
              <span>117+ Satisfied Patients</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="text-[#1E90FF]">✅</span>
              <span>Attentive & Detailed Care</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="text-[#1E90FF]">✅</span>
              <span>Expert in Neurology & Stroke</span>
            </div>
          </motion.div>
        </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="lg:col-span-12 bg-white rounded-2xl p-6 sm:p-10 shadow-[0_4px_12px_rgba(0,31,68,0.04)]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-[#0A1F44] m-0">Our Services</h3>
            <p className="text-sm text-slate-500 mt-1 m-0">Specialized Neurological Care You Can Trust</p>
          </div>
          <div className="bg-[#EEF4FF] px-4 py-2 rounded-lg text-xs font-semibold text-[#0A1F44] inline-flex items-center gap-2">
            🧠 Neurological Consultations: Full Evaluation & Diagnosis
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            
            <ServiceCard 
              icon={<BrainCircuit size={32} className="text-[#1E90FF]" />}
              title="Stroke Diagnosis & Treatment"
              desc="Rapid evaluation and expert management of stroke and cerebrovascular conditions."
              delay={0}
            />
            
            <ServiceCard 
              icon={<Zap size={32} className="text-[#1E90FF]" />}
              title="Epilepsy & Seizure Disorders"
              desc="Diagnosis and long-term management of epilepsy and seizure conditions."
              delay={0.1}
            />

            <ServiceCard 
              icon={<Activity size={32} className="text-[#1E90FF]" />}
              title="Headache & Migraine Treatment"
              desc="Advanced treatment for chronic headaches, migraines, and cluster headaches."
              delay={0.2}
            />

            <ServiceCard 
              icon={<Users size={32} className="text-[#1E90FF]" />}
              title="Parkinson's & Movement Disorders"
              desc="Expert care for Parkinson's disease and other movement-related neurological conditions."
              delay={0.3}
            />

            <ServiceCard 
              icon={<Brain size={32} className="text-[#1E90FF]" />}
              title="Memory Loss & Dementia"
              desc="Evaluation and management of memory disorders, dementia, and cognitive decline."
              delay={0.4}
            />

            <ServiceCard 
              icon={<Dna size={32} className="text-[#1E90FF]" />}
              title="Nerve & Muscle Disorders"
              desc="Diagnosis and treatment of neuropathy, nerve pain, and muscular neurological conditions."
              delay={0.5}
            />

        </div>
      </section>

      {/* 6. WHY CHOOSE US SECTION */}
      <section className="lg:col-span-12 bg-[#0A1F44] text-white rounded-2xl shadow-[0_4px_12px_rgba(0,31,68,0.04)] py-6 px-4">
          <div className="flex flex-wrap justify-between items-center sm:divide-x sm:divide-white/20 gap-y-6">
            <div className="w-1/2 sm:w-1/4 text-center px-2">
              <div className="text-3xl font-extrabold text-[#1E90FF] mb-1">117+</div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Satisfied Patients</div>
            </div>
            <div className="w-1/2 sm:w-1/4 text-center px-2">
              <div className="text-3xl font-extrabold text-[#1E90FF] mb-1 flex justify-center items-center gap-1.5">
                4.7<Star className="text-amber-400 fill-amber-400" size={24} />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Google Rating</div>
            </div>
            <div className="w-1/2 sm:w-1/4 text-center px-2">
              <div className="text-3xl font-extrabold text-[#1E90FF] mb-1">8 PM</div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Daily Availability</div>
            </div>
            <div className="w-1/2 sm:w-1/4 text-center px-2 flex flex-col items-center">
              <div className="flex justify-center mb-1">
                <Building2 size={32} className="text-[#1E90FF]" />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Prime Care Hospital</div>
            </div>
          </div>
      </section>

      {/* 7. PATIENT REVIEWS SECTION */}
      <section id="reviews" className="lg:col-span-8 flex flex-col gap-4 overflow-hidden">
          <div className="flex gap-4 h-full overflow-x-auto snap-x snap-mandatory hide-scrollbars pb-2">
            <ReviewCard 
              name="Khadim Hussnain"
              initial="K"
              text="Dr. Bilal Waheed is a highly skilled and professional neurologist. He listens carefully, explains diagnoses clearly, and provides compassionate care. Highly recommended for anyone seeking quality neurological treatment."
              date="8 months ago"
            />
            <ReviewCard 
              name="Muhammad Haseeb Hameed"
              initial="M"
              text="I visited Dr. Bilal Waheed for my sister's treatment. The diagnosis was accurate, and her recovery was quick. Highly recommended!"
              date="3 months ago"
            />
            <ReviewCard 
              name="Hyder Wasim"
              initial="H"
              text="Your expertise and compassion made all the difference in my recovery. Thank you for listening to my needs. A great person with unexpected support for a patient."
              date="2 weeks ago"
            />
            <ReviewCard 
              name="Dr. Zainab Bilal"
              initial="Z"
              text="Dr. Bilal is beyond amazing. He provides very thorough and detailed care. Exceptionally patient, very knowledgeable, courteous, and does not rush through the visit."
              date="2 weeks ago"
              className="xl:col-span-1 xl:col-start-1"
            />
            <ReviewCard 
              name="Adnan B"
              initial="A"
              role="(Medical School Colleague)"
              text="Dr. Bilal's knowledge of Neurology has been extraordinary. My prayers and best wishes for this empathetic and caring doctor."
              date="Recent"
            />
          </div>
      </section>

      {/* 8. LOCATION SECTION */}
      <section className="lg:col-span-4 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,31,68,0.04)] p-6 sm:p-8 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1E90FF]"></div>
        <div className="flex-grow flex flex-col justify-center text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EEF4FF] text-[#1E90FF] mx-auto mb-4 shadow-sm border border-blue-100">
            <Building2 size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#0A1F44] mb-4 leading-tight">WAHEED NEURO &<br/>STROKE CENTRE</h3>
          
          <div className="space-y-3 mb-6 text-slate-600 text-sm flex-grow">
            <p className="flex items-start justify-center gap-2">
              <MapPin className="text-[#1E90FF] flex-shrink-0 mt-0.5" size={16} />
              <span className="text-left w-48">Prime Care Hospital, near Dewan-e-Hassan Banquet Hall, Madina Town, Faisalabad</span>
            </p>
            <p className="flex items-center justify-center gap-2 font-medium">
              <Clock className="text-[#1E90FF] flex-shrink-0" size={16} />
              Opens 8 PM Daily
            </p>
            <p className="flex items-center justify-center gap-2 font-medium">
              <Phone className="text-[#1E90FF] flex-shrink-0" size={16} />
              <a href="tel:+923309227583" className="hover:text-[#1E90FF] transition-colors">+92 330 9227583</a>
            </p>
          </div>

          <a 
            href="https://maps.google.com/?q=Prime+Care+Hospital+Madina+Town+Faisalabad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-[#1E90FF] hover:bg-blue-600 hover:shadow-lg transition-all focus:outline-none"
          >
            <MapPin className="mr-2" size={16} /> Get Directions
          </a>
        </div>
      </section>

      {/* 9. CONTACT / APPOINTMENT SECTION */}
      <section id="contact" className="lg:col-span-12 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,31,68,0.04)] p-6 sm:p-10 mb-8 w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0A1F44] mb-2 m-0">Book an Appointment</h2>
          <p className="text-sm text-slate-500 m-0">Send a WhatsApp message or call us direct to reserve your slot.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {/* Form Column */}
          <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-[#0A1F44] mb-6">Send us a Message</h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const phone = formData.get('phone');
                  const message = formData.get('message');
                  const whatsappMsg = `Hello Waheed Neuro Centre. My name is ${name}. Phone: ${phone}. Message: ${message}`;
                  window.open(`https://wa.me/923309227583?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-shadow outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-shadow outline-none" placeholder="03XXXXXXXXX" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Neurological Concern / Message</label>
                  <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-shadow outline-none resize-none" placeholder="Please describe your symptoms or reason for visit..."></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-[#0A1F44] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A1F44] transition-all">
                  Send Message via WhatsApp
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">Or call us directly:</p>
                <a href="tel:+923309227583" className="text-lg font-bold text-[#1E90FF] hover:underline block mt-1">+92 330 9227583</a>
              </div>
            </div>

            {/* Info Column */}
            <div className="flex flex-col gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center items-center text-center">
                 <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4">
                   <MessageCircle size={24} className="text-[#25D366]" fill="currentColor" />
                 </div>
                 <h3 className="text-xl font-bold text-[#0A1F44] mb-2 m-0">Quick WhatsApp</h3>
                 <p className="text-slate-600 text-sm mb-6 m-0">Get connected instantly for appointment bookings.</p>
                 <a 
                   href="https://wa.me/923309227583" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full inline-flex justify-center items-center px-6 py-2.5 text-sm font-semibold rounded-lg text-white bg-[#25D366] hover:bg-[#20bd5a] hover:shadow-lg transition-all focus:outline-none"
                 >
                   Chat on WhatsApp
                 </a>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                 <div className="flex items-start gap-4">
                   <Clock className="text-[#1E90FF] flex-shrink-0 mt-0.5" size={20} />
                   <div>
                     <h4 className="text-[#0A1F44] font-semibold mb-1 text-sm m-0">Clinic Hours</h4>
                     <p className="text-slate-600 text-xs m-0">Dr. Bilal is available from <strong className="text-[#0A1F44]">8 PM daily</strong> at Prime Care Hospital.</p>
                   </div>
                 </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-2xl flex-grow min-h-[160px] flex items-center justify-center relative overflow-hidden group border border-slate-200">
                 <div className="text-center p-4 z-10">
                   <MapPin className="text-slate-400 mx-auto mb-2" size={24} />
                   <p className="text-slate-500 font-medium text-xs m-0">Prime Care Hospital Map</p>
                   <a href="https://maps.google.com/?q=Prime+Care+Hospital+Madina+Town+Faisalabad" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[10px] font-semibold text-[#1E90FF] opacity-0 group-hover:opacity-100 transition-opacity">Open in Maps &rarr;</a>
                 </div>
              </div>
            </div>
          </div>
      </section>
      </main>

      {/* 10. FOOTER */}
      <footer className="bg-[#0A1F44] text-white pt-16 pb-8 border-t-[8px] border-[#1E90FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">WAHEED NEURO <br/><span className="text-[#1E90FF]">&</span> STROKE CENTRE</h3>
              <p className="text-slate-400 text-sm">Expert Neurological Care in Faisalabad.</p>
              <div className="mt-6 flex space-x-4">
                {/* Social icons could go here */}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-slate-400 hover:text-[#1E90FF] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1E90FF] rounded-full"></span> Home</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-[#1E90FF] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1E90FF] rounded-full"></span> Services</a></li>
                <li><a href="#reviews" className="text-slate-400 hover:text-[#1E90FF] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1E90FF] rounded-full"></span> Reviews</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-[#1E90FF] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#1E90FF] rounded-full"></span> Contact</a></li>
              </ul>
            </div>

            {/* Contact Data */}
            <div>
              <h4 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2 inline-block">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#1E90FF] mt-1 shrink-0" size={18} />
                  <span className="text-slate-400 text-sm leading-relaxed">Prime Care Hospital, near Dewan-e-Hassan Banquet Hall, Khayaban Colony #1, Madina Town, Faisalabad</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#1E90FF] shrink-0" size={18} />
                  <a href="tel:+923309227583" className="text-slate-400 hover:text-white transition-colors text-sm">+92 330 9227583</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 Waheed Neuro & Stroke Centre.</p>
            <p>Dr. Muhammad Bilal Waheed | Best Neurologist in Faisalabad</p>
          </div>
        </div>
      </footer>

      {/* 11. FLOATING ELEMENTS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Floating WhatsApp */}
        <a 
          href="https://wa.me/923309227583"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-white focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="fill-current" size={28} />
        </a>
      </div>
      
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        {/* Floating Call */}
        <a 
          href="tel:+923309227583"
          className="w-14 h-14 bg-[#0A1F44] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-white focus:outline-none"
          aria-label="Call Now"
        >
          <Phone className="fill-current" size={24} />
        </a>
      </div>

    </div>
  );
}

// Subcomponents
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function ServiceCard({ icon, title, desc, delay = 0 }: { icon: React.ReactNode, title: string, desc: string, delay?: number }) {
  return (
    <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border-t-[3px] border-[#0A1F44] hover:shadow-md transition-all group duration-300 h-full flex flex-col">
      <h4 className="text-sm font-bold text-[#0A1F44] mb-2 flex items-center gap-2 m-0">
        <span className="text-[#1E90FF]">{icon}</span> {title}
      </h4>
      <p className="text-xs text-slate-600 leading-relaxed m-0 flex-grow">{desc}</p>
    </div>
  );
}

function ReviewCard({ name, initial, text, date, role, className = "" }: { name: string, initial: string, text: string, date: string, role?: string, className?: string }) {
  return (
    <div className={`min-w-[280px] w-[85vw] sm:w-[320px] flex-shrink-0 snap-center bg-slate-50 p-5 rounded-2xl border-l-[3px] border-[#1E90FF] flex flex-col h-full ${className}`}>
      <p className="text-xs text-slate-700 italic mb-4 flex-grow line-clamp-4 hover:line-clamp-none transition-all cursor-default">
        &quot;{text}&quot;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div>
          <h5 className="font-bold text-[#0A1F44] text-[11px] leading-tight m-0">
            {name} <span className="font-normal text-slate-500 ml-1">{role}</span>
          </h5>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex text-[#1E90FF]">
               <Star className="fill-current w-3 h-3" />
               <Star className="fill-current w-3 h-3" />
               <Star className="fill-current w-3 h-3" />
               <Star className="fill-current w-3 h-3" />
               <Star className="fill-current w-3 h-3" />
            </div>
            <span className="text-[9px] font-bold text-slate-400">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
