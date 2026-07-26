"use client";

import {
  Globe,
  Network,
  ShieldCheck,
  Camera,
  PhoneCall,
  Cloud,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const technologies = [
  { icon: Globe, title: "Web" },
  { icon: Network, title: "Networking" },
  { icon: ShieldCheck, title: "Security" },
  { icon: Camera, title: "CCTV" },
  { icon: PhoneCall, title: "VoIP" },
  { icon: Cloud, title: "Cloud" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-green-400/10 blur-3xl" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            Trusted by Businesses Across Pakistan
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Complete
            <span className="block text-blue-400">
              IT Solutions
            </span>

            Under One Roof
          </h1>

          <p className="mt-6 text-xl text-green-400">
            Design • Connect • Secure • Grow
          </p>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            AK IT Solutions delivers professional Website Development,
            Networking, CCTV, VoIP, Cloud Infrastructure and Cyber Security
            solutions for businesses of every size.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold hover:bg-blue-700">
              Get Free Consultation
              <ArrowRight size={18}/>
            </button>

            <button className="rounded-xl border border-white/30 px-7 py-4 hover:bg-white/10">
              View Portfolio
            </button>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>
              <div className="text-4xl font-black text-blue-400">
                <CountUp end={100} duration={2}/>
                +
              </div>

              <p className="mt-2 text-slate-300">
                Projects
              </p>
            </div>

            <div>
              <div className="text-4xl font-black text-green-400">
                <CountUp end={40} duration={2}/>
                +
              </div>

              <p className="mt-2 text-slate-300">
                Clients
              </p>
            </div>

            <div>
              <div className="text-4xl font-black text-blue-400">
                24/7
              </div>

              <p className="mt-2 text-slate-300">
                Support
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity:0, x:40 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
        >

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h3 className="mb-8 text-2xl font-bold">
              Our Expertise
            </h3>

            <div className="grid grid-cols-2 gap-5">

              {technologies.map((item)=>{

                const Icon=item.icon;

                return(

                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-2 hover:border-blue-400"
                  >

                    <Icon className="mb-5 text-blue-400" size={34}/>

                    <h4 className="font-semibold">
                      {item.title}
                    </h4>

                  </div>

                )

              })}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}