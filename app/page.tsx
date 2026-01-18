"use client";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* CTA Section */}
      <section className="w-full max-w-[1280px] px-6 py-24 @container">
        <div className="flex flex-col gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-[#121617] dark:text-white text-4xl @[480px]:text-5xl font-extrabold tracking-tight">
              Ready to Shape the Future?
            </h2>
            <p className="text-[#658086] dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you are an aspiring student leader or a visionary corporation, there is a seat
              at the table for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Path A: Students */}
            <div className="relative group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8 @[480px]:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-primary">school</span>
              </div>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#121617] dark:text-white">
                    For Students
                  </h3>
                  <p className="text-[#658086] dark:text-gray-400 leading-relaxed">
                    Join our community of over 5,000 future leaders. Access exclusive mentorship,
                    workshops, and high-impact networking opportunities.
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-[#156b7c] text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-[1.02]">
                  <span>Become a Member</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Path B: Partners */}
            <div className="relative group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8 @[480px]:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-primary">handshake</span>
              </div>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">corporate_fare</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#121617] dark:text-white">
                    For Partners
                  </h3>
                  <p className="text-[#658086] dark:text-gray-400 leading-relaxed">
                    Collaborate with the next generation of top-tier talent. Drive innovation and
                    build your brand presence among elite students globally.
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-[#f0f3f4] dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-[#121617] dark:text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-[1.02]">
                  <span>Partner with Us</span>
                  <span className="material-symbols-outlined text-sm">business_center</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="w-full max-w-[1280px] px-6 -mb-24 z-20">
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-bold text-[#121617] dark:text-white">
              Stay Ahead of the Curve
            </h4>
            <p className="text-[#658086] dark:text-gray-400">
              Subscribe for leadership insights and program updates.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              className="min-w-[280px] px-4 py-3 bg-[#f0f3f4] dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-[#121617] dark:text-white placeholder:text-[#658086]"
              placeholder="Enter your email address"
              type="email"
            />
            <button className="bg-primary hover:bg-[#156b7c] text-white px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full footer-textured pt-48 pb-12 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="size-8 text-primary">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight">StudentsxCEOs</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Empowering the next generation of global leaders by bridging the gap between
                exceptional students and industry pioneers.
              </p>
              <div className="flex gap-4">
                <a
                  className="size-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </a>
                <a
                  className="size-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                </a>
                <a
                  className="size-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </a>
              </div>
            </div>

            {/* Programs Column */}
            <div className="space-y-6">
              <h5 className="text-white font-bold uppercase tracking-widest text-xs">Programs</h5>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    International Student Summit
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    CEO Talks Series
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    Internship Portal
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    Mentorship Program
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h5 className="text-white font-bold uppercase tracking-widest text-xs">Company</h5>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    The Team
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    Partner Network
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-6">
              <h5 className="text-white font-bold uppercase tracking-widest text-xs">Support</h5>
              <ul className="space-y-4">
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    href="#"
                  >
                    Resource Hub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© 2026 StudentsxCEOs. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <span>Back to top</span>
              <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">
                arrow_upward
              </span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
