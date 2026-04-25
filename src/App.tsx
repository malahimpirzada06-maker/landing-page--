/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Trash2, 
  AlertTriangle, 
  Mail, 
  Stethoscope,
  ShieldCheck,
  Package,
  FileText,
  Coffee,
  MessageCircle,
  Truck,
  Lock,
  Banknote
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-moss-green/20 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
      >
        <span className="font-heading text-lg text-moss-green">{question}</span>
        {isOpen ? <ChevronUp className="text-moss-green" /> : <ChevronDown className="text-moss-green" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-lg py-4 text-black/80">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="grain-overlay overflow-x-hidden">
      {/* SECTION 1: NAV */}
      <nav className="sticky top-0 bg-beige border-b border-moss-green/20 z-50 py-8 shadow-sm">
        <div className="container mx-auto px-12 max-w-7xl flex justify-between items-center">
          <a href="#" className="font-heading text-3xl text-moss-green tracking-tighter">Hurb</a>
          <div className="flex gap-8 items-center">
            <span className="hidden md:inline text-sm uppercase tracking-widest font-heading opacity-60 italic">Premium Dental Care</span>
            <a href="#order" className="bg-moss-green text-beige px-8 py-3 rounded-full font-heading text-sm hover:scale-105 transition-transform cta-shadow uppercase tracking-wider">
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION 2: HERO */}
      <header className="container mx-auto px-12 py-12 md:py-24 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-[64px] font-heading font-bold leading-[0.95] text-moss-green tracking-tight">
                Sirf 20 Din Mein<br/><span className="italic font-serif font-light text-dark-green">Confident Smile.</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/80 italic max-w-lg leading-relaxed">
                Pakistan ka sabse safe teeth whitening system — chai, turmeric, aur spice stains ke liye specifically tested.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/40 border border-moss-green/10 p-5 rounded-2xl flex-1 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-moss-green flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-beige" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-moss-green">Guarantee</span>
                </div>
                <p className="text-sm italic">20-Din Money Back Guarantee. Koi sawal nahi.</p>
              </div>
              <div className="bg-white/40 border border-moss-green/10 p-5 rounded-2xl flex-1 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-moss-green flex items-center justify-center">
                    <Coffee className="w-4 h-4 text-beige" />
                  </div>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-moss-green">Effortless</span>
                </div>
                <p className="text-sm italic">Roz sirf 30 minute. Enamel-safe formula.</p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-beige bg-moss-green text-[10px] flex items-center justify-center font-bold text-white uppercase">AJ</div>
                <div className="w-10 h-10 rounded-full border-2 border-beige bg-dark-green text-[10px] flex items-center justify-center font-bold text-white uppercase">FK</div>
                <div className="w-10 h-10 rounded-full border-2 border-beige bg-mid-green text-[10px] flex items-center justify-center font-bold text-white uppercase">SM</div>
              </div>
              <p className="text-sm italic opacity-70">"5 din mein fark dikhne laga... Sensitivity bilkul nahi hui." <span className="font-bold font-heading not-italic text-xs ml-2">— Arham, Lahore</span></p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-moss-green rounded-full opacity-[0.05] blur-3xl"></div>
            <div className="bg-white p-8 rounded-[40px] sleek-shadow relative z-10 border border-moss-green/5">
              <div className="aspect-square bg-beige rounded-[32px] overflow-hidden flex items-center justify-center relative mb-6 group">
                <Package size={120} className="w-48 h-48 text-moss-green opacity-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="bg-moss-green text-beige text-[10px] px-3 py-1 rounded-full font-heading font-bold uppercase tracking-widest mb-4">Product Bundle</div>
                  <div className="font-heading font-bold text-3xl text-moss-green">HURB STRIPS</div>
                  <div className="text-sm italic mt-2">20-Day Complete Kit</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-sm italic">Full Treatment Kit</span>
                  <span className="font-heading font-bold text-lg">Rs. 2,499</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                  <span className="text-sm italic">Delivery Charges</span>
                  <span className="font-heading font-bold text-xs uppercase text-green-600">FREE</span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <span className="font-heading font-bold uppercase tracking-widest text-[10px] opacity-60">Estimated Arrival</span>
                  <span className="text-sm italic">2-3 Working Days</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* SECTION 3: VSL */}
      <section className="bg-moss-green text-beige py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-10">
          <span className="uppercase tracking-[3px] text-sm font-heading opacity-80">Dekho pehle, phir decide karo</span>
          <div 
            className="aspect-video bg-[#2b3614] rounded-2xl border border-beige/20 flex items-center justify-center cursor-pointer hover:border-beige/40 transition-all group relative overflow-hidden"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            {isVideoPlaying ? (
              <div className="text-beige italic p-4 text-center">
                [Video starts playing: Demonstration of Hurb technology in a local context]
              </div>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }} className="bg-beige text-moss-green p-6 rounded-full shadow-lg">
                <Play fill="currentColor" size={40} />
              </motion.div>
            )}
          </div>
          <p className="text-xl italic">3 minute mein samjho ke Hurb kaise alag hai har cheez se jo aapne pehle try ki.</p>
        </div>
      </section>

      {/* SECTION 4: PROBLEM SECTION */}
      <section className="container mx-auto px-12 py-24 max-w-7xl">
        <h2 className="text-3xl md:text-5xl mb-12">Ye sirf daanton ka masla nahi hai</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-lg md:text-xl text-black/90">
            <p>Sach toh ye hai ke Pakistan mein chai, turmeric, aur mirch ke baghair zindagi possible nahi. Hum sab ek ya do cup chai pe nahi rukte, aur phir uski wajah se daant yellow hote hain. <span className="text-moss-green font-semibold">Ye normal hai. Ye aapki galti nahi.</span></p>
            <p>Magar problem tab shuru hoti hai jab duniya us yellow ko dekh ke aapke baare mein kuch aur soch leti hai.</p>
            <p>Log yad nahi rakhte ke aapne kya pehna tha. Wo yad rakhte hain aapki smile, ya uski ghaiboodgi.</p>
            <p className="bg-white/40 p-8 rounded-3xl border border-moss-green/10 sleek-shadow backdrop-blur-sm italic">Job interview mein HR manager ka pehla impression, rishta meeting mein in-laws ki nazar... unke liye aapki smile ek signal hai. Yahi wajah hai ke ye sirf vanity ka masla nahi. Ye aapki pehli impression hai.</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
               {[
                 { icon: <Trash2 />, label: "Colgate Optic", sub: "Koi result nahi" },
                 { icon: <AlertTriangle />, label: "Charcoal Powder", sub: "Sink kala ho gaya" },
                 { icon: <Coffee />, label: "Lemon + Soda", sub: "Hafta bhar dard" },
                 { icon: <Stethoscope />, label: "Clinic", sub: "40,000 PKR cost" }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ scale: 1.05 }}
                   className="bg-white/40 border border-moss-green/10 p-6 rounded-2xl text-center flex flex-col items-center justify-center space-y-2 backdrop-blur-sm"
                 >
                   <div className="text-moss-green mb-2">{item.icon}</div>
                   <h4 className="text-sm font-heading">{item.label}</h4>
                   <p className="text-xs opacity-60 italic">{item.sub}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT INTRO */}
      <section className="bg-white py-24 px-6 border-y border-moss-green/5">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative aspect-square bg-beige rounded-2xl flex items-center justify-center p-12 overflow-hidden shadow-inner">
                <Package size={120} className="text-moss-green/20 absolute -bottom-4 -right-4" />
                <div className="relative z-10 space-y-4 text-center">
                  <div className="bg-moss-green text-white px-4 py-1 rounded-full text-xs font-heading inline-block">AUTHENTIC</div>
                  <h3 className="text-4xl text-moss-green">20-Day Treatment</h3>
                  <p className="text-black/60">Enamel-safe Hydrogen Peroxide Formula</p>
                </div>
             </div>
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl leading-tight">Hurb kya hai aur ye alag kyun hai</h2>
            <div className="space-y-4 text-lg text-black/80">
              <p>Hurb Whitening Strips Pakistan ka sabse safe confidence upgrade hai. Koi abrasive powder nahi. Koi bleach nahi. Koi clinic level chemical nahi.</p>
              <p>Hurb enamel-safe hydrogen peroxide formula use karta hai — same ingredient jo dentists use karte hain, lekin safe concentration mein jo ghar par use ki ja sake.</p>
              <p className="font-heading text-moss-green">Roz sirf 30 minute. 20 din. Bas.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["🕐 Roz sirf 30 min", "🦷 Enamel-Safe", "✅ 1,000+ Users"].map((tag, i) => (
                <span key={i} className="bg-moss-green text-beige px-6 py-2 rounded-full font-heading text-sm uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Real log, real results</h2>
          <p className="text-xl opacity-60 italic">"Hum aapko American models wali before/after photos nahi dikhayenge. Kyunki aap wahan se nahi hain."</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Arham, 23", 
              city: "Lahore", 
              text: "5 din mein fark dikhne laga. 20 din baad meri ammi ne khud notice kiya. Sensitivity bilkul nahi hui.",
              img: "https://picsum.photos/seed/65/150/150"
            },
            { 
              name: "Fatima, 26", 
              city: "Karachi", 
              text: "Presentation mein mujhe pehli baar ye nahi socha ke main kaise dikh rahi hoon. Normally ye background mein chalta rehta hai.",
              img: "https://picsum.photos/seed/88/150/150"
            },
            { 
              name: "Sana, 24", 
              city: "Islamabad", 
              text: "MadDental wale waaqiye ke baad mujhe darr tha. Lekin Hurb ne genuinely koi taqleef nahi di.",
              img: "https://picsum.photos/seed/42/150/150"
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-beige p-10 rounded-r-3xl rounded-bl-3xl border-l-4 border-moss-green testimonial-shadow space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-moss-green/10 rounded-full overflow-hidden border border-moss-green/20">
                  <img 
                    src={t.img} 
                    alt={t.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-moss-green leading-none">{t.name}</h4>
                  <p className="text-sm opacity-50">{t.city}</p>
                </div>
              </div>
              <p className="text-xl italic line-clamp-4">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
           <a href="#order" className="inline-block bg-moss-green text-beige px-10 py-5 rounded-full font-heading text-xl cta-shadow hover:bg-dark-green transition-all transform hover:-translate-y-1">
              Abhi Order Karein — Rs. 2,499
           </a>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="bg-white/30 py-24 px-6 border-t border-moss-green/5">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl text-center mb-16">Aapke common sawaal, seedhe jawab</h2>
          <div className="space-y-4">
            <FAQItem 
              question="Original hai ya Daraz wala duplicate?" 
              answer="Hurb sirf official website aur verified sellers se milta hai. Har pack mein ek verification code hota hai jo aap directly check kar sakte hain. Sirf yahan se order karo, duplicate ka koi chance nahi." 
            />
            <FAQItem 
              question="Enamel kharab nahi hoga?" 
              answer="Hurb ka formula enamel-safe hai. 1,000+ users mein se koi bhi structural damage report nahi ki. Aur agar pehle 3 dinon mein koi bhi taqleef ho, poora refund milega." 
            />
            <FAQItem 
              question="Ye chai ke daagon par kaam karta hai?" 
              answer="Haan. Ye specifically Pakistani diet ke stains ko target karne ke liye tested hai. Chai, turmeric, aur spice stains sab included hain." 
            />
            <FAQItem 
              question="Mujhe sensitive teeth hain?" 
              answer="Formula gentle hai aur sensitive teeth ke liye tested hai. Lekin agar koi existing dental condition hai, pehle dentist se baat kar lena better ho ga." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 8: OFFER STACK */}
      <section className="container mx-auto px-6 py-24 max-w-7xl text-center">
        <h2 className="text-4xl mb-12">Aap Rs. 2,499 mein ye sab le rahe hain</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Package />, title: "Full 20-Day Treatment", desc: "Hurb Whitening Strips" },
            { icon: <FileText />, title: "Dual Usage Guide", desc: "Urdu & English Steps" },
            { icon: <Coffee />, title: "Maintenance Guide", desc: "Post-Chai Protection" },
            { icon: <MessageCircle />, title: "Direct WhatsApp", desc: "Real human support" }
          ].map((item, i) => (
            <div key={i} className="bg-beige p-8 rounded-2xl border border-moss-green/10 text-left space-y-4">
              <div className="text-moss-green">{item.icon}</div>
              <div>
                <h4 className="font-heading text-moss-green italic">{item.title}</h4>
                <p className="text-sm opacity-60 leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-moss-green/60 italic">Free delivery. Cash on Delivery available across Pakistan.</p>
      </section>

      {/* SECTION 9: GUARANTEE */}
      <section className="bg-moss-green text-beige py-24 px-6 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10 space-y-10">
          <motion.div 
            initial={{ rotate: -10, scale: 0.8 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ShieldCheck size={120} strokeWidth={1} className="text-beige/30" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl text-beige leading-tight uppercase font-heading">
            FAMOUS 20-Din Guarantee
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-beige/90 italic leading-relaxed">
            <p>Hurb use karo, poore 20 din. Roz sirf 30 minute. Agar aapko koi visible difference nazar nahi aaya, ek message karo. Poora 2,499 PKR wapas. Koi sawal nahi. Koi proof nahi maangenge. Koi argument nahi.</p>
            <p className="opacity-70">Ye guarantee isliye dete hain kyunke hum jaante hain ye kaam karta hai.</p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section id="order" className="container mx-auto px-6 py-32 max-w-5xl text-center space-y-12">
        <h2 className="text-5xl md:text-7xl">20 din baad ek naya moqa — ya paisa wapas</h2>
        <div className="space-y-8">
          <p className="text-2xl italic opacity-70">"Dono taraf se aap win kar rahe hain."</p>
          <a href="#" className="inline-block bg-moss-green text-beige px-12 py-6 rounded-full font-heading text-2xl cta-shadow hover:bg-dark-green transition-all transform hover:-translate-y-1 w-full md:w-auto">
            Haan, Mujhe Meri Smile Wapas Chahiye — Rs. 2,499
          </a>
          <div className="flex justify-center gap-8 text-sm font-heading text-moss-green uppercase tracking-widest pt-8">
            <span className="flex items-center gap-2"><Truck size={18} /> Free Delivery</span>
            <span className="flex items-center gap-2"><Banknote size={18} /> COD Available</span>
            <span className="flex items-center gap-2"><Lock size={18} /> Secure Order</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: FOOTER */}
      <footer className="bg-moss-green text-beige py-12 px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="flex flex-col sm:flex-row gap-16">
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-heading font-bold tracking-[0.2em] opacity-60">Formula</div>
                <div className="text-sm italic">Dentist-Tested & Safe</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-heading font-bold tracking-[0.2em] opacity-60">Support</div>
                <div className="text-sm italic">Direct WhatsApp Support</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-heading font-bold tracking-[0.2em] opacity-60">Payment</div>
                <div className="text-sm italic">Cash on Delivery (COD)</div>
              </div>
            </div>
            <div className="md:text-right space-y-1">
              <div className="text-[10px] uppercase font-heading font-bold tracking-[0.2em] opacity-60">Available in</div>
              <div className="text-sm italic">Lahore, Karachi, Islamabad & Nationwide</div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-beige/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40">
            <span>© 2025 Hurb Pakistan</span>
            <a href="#" className="hover:opacity-100 transition-opacity">WhatsApp: wa.me/hurb</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
