import Image from "next/image";
import Link from "next/link";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
// const testimonials = [
//   {
//     name: "Chloe L.",
//     message: "The sense of community was amazing! So supportive for my first 5K.",
//     image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Maria R.",
//     message: "Completing the 10-Mile was a proud moment. A well-organized, friendly competition.",
//     image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Janet P.",
//     message: "Loved the non-profit focus and the custom medal is beautiful!",
//     image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
//   },
// ];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#2a3138,#1a2027_50%,#161b22)] text-[#f1f4f6]">
      <div className="">
        <SiteHeader activeLabel="Home" />

        <section
          id="home"
          className="relative overflow-hidden px-4 bg-[#1e252d] pt-18 pb-8"
        >
         
          <div className="container mx-auto">
            <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:items-center">
              <div className="max-w-7xl">
              <div className="mb-1 flex items-center gap-2">
            
              <div className="relative h-16 w-64 overflow-hidden border-2 border-black">
                <Image
                  src="/chase.png"
                  alt="Chase logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative h-16 w-26 overflow-hidden border-2 border-black">
                <Image
                  src="/Chaselogo1.jpg"
                  alt="Chase logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
                <h1 className="text-4xl md:text-4xl font-black uppercase leading-[0.92] text-[#00a2e7]">
                2026 Columbus Turkey Trot
                </h1>
              
                <p className="mt-3 text-2xl font-semibold text-[#f3d27d] sm:text-4xl">
                  Thanksgiving Day
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#f3d27d] sm:text-4xl">Columbus, Ohio 11/26/2026</p>
                <p className="mt-5 max-w-4xl text-lg leading-9 text-white/95 sm:text-2xl sm:leading-[1.3]">
                  Join one of Columbus&apos;s favorite Thanksgiving traditions as we celebrate our 40th
                  Anniversary with a new 4-mile course. Choose your event and celebrate race morning
                  with family, friends, and the local running community.
                </p>
                <div className="mt-7">
                  <Link
                    href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-10 py-4 text-md md:text-xl font-black uppercase tracking-[0.05em] text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
                  >
                    Click Here To Register
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#83a73d]">
                <video
                  className="min-h-[240px] w-full object-cover md:min-h-[480px]"
                  src="/120683-721759770_medium.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
               

                {/* <Image
                  src="https://images.unsplash.com/photo-1497294815431-9365093b7331?auto=format&fit=crop&w=1200&q=80"
                  alt="Women runners smiling"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>
        </section>

       

        <section id="swag" className="mt-4  bg-[#212831]">
          <div className="container mx-auto grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Race Morning Events",
                body: "New 4-Mile course, 2.4-Mile Walk N' Talk, Tot Trot for kids, plus a virtual option.",
              },
              {
                title: "Thanksgiving Tradition",
                body: "A festive holiday atmosphere with costumes, family participation, and community spirit.",
              },
              {
                title: "Community Impact",
                body: "Race proceeds support Easterseals of Central and Southeast Ohio.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/5 p-4">
                <h3 className="text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-2 text-xl leading-8 text-white/90">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="finish-line-food" className="mt-4 bg-[#1d232b] px-4 py-10 sm:px-8">
          <div className="container mx-auto">
            <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 sm:p-10">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                    Finish Line Celebration
                  </p>
                  <h2 className="mt-2 text-3xl font-black uppercase leading-none text-[#f3d27d] sm:text-4xl">
                    Finish Line Food Celebration
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
                    Cross the line, grab your medal, and keep the holiday vibes going with a family-friendly food
                    celebration powered by our sponsors.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/90">
                  <span className="h-2 w-2 rounded-full bg-[#1c9a64]" aria-hidden />
                  Finisher Perks Included
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <article className="group overflow-hidden rounded-3xl border border-white/15 bg-[#1e252d] shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-video w-full">
                    <Image src="/dominoz.png" alt="Domino's Pizza sponsor placeholder" fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">
                      Domino&apos;s Pizza
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                      Every finisher gets a 12-inch pizza
                    </h3>
                    <ul className="mt-4 space-y-2 text-base leading-7 text-white/85 sm:text-lg">
                      <li>
                        <span className="font-semibold text-white">12-inch pizza</span> for every finisher.
                      </li>
                      <li>
                        Pizza box includes a <span className="font-semibold text-white">redemption certificate</span>.
                      </li>
                      <li>
                        Redeem at your <span className="font-semibold text-white">local Domino&apos;s location</span>.
                      </li>
                    </ul>
                  </div>
                </article>

                <article className="group overflow-hidden rounded-3xl border border-white/15 bg-[#1e252d] shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-video w-full">
                    <Image src="/Skyline.png" alt="Skyline Chili sponsor placeholder" fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">
                      Skyline Chili
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                      Famous coney dogs at the finish line
                    </h3>
                    <ul className="mt-4 space-y-2 text-base leading-7 text-white/85 sm:text-lg">
                      <li>
                        Served <span className="font-semibold text-white">at the finish line</span>.
                      </li>
                      <li>
                        Enjoy their <span className="font-semibold text-white">classic coney dogs</span>.
                      </li>
                      <li>
                        Perfect for a <span className="font-semibold text-white">holiday family celebration</span>.
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="whats-new" className="mt-5 bg-[#1d232b] px-4 py-8 sm:px-8">
          <div className="container mx-auto">
            <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.30)] sm:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/75">
                What&apos;s New In &apos;26
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#f3d27d] sm:text-4xl lg:text-5xl">
                40th Anniversary Updates
              </h2>
              <p className="mt-4 max-w-5xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                Join us in celebrating our 40th Year Anniversary with exciting changes to the 2026
                Chase Columbus Turkey Trot, benefiting Easterseals of Central and Southeast Ohio.
                We&apos;re thrilled to announce updates that will enhance your experience while making
                a meaningful impact on the lives of those with disabilities.
              </p>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#1e252d] shadow-[0_18px_44px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src="/40.jpg"
                      alt="What's new in 2026 announcement"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 backdrop-blur">
                    <span className="relative h-7 w-7 overflow-hidden rounded-full border border-white/15 bg-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/40.jpg" alt="" className="h-full w-full object-cover" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.12em] text-[#f0d07a]">
                      40th Anniversary
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <article className="rounded-3xl border border-white/15 bg-[#1e252d] p-6">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                    New 4-Mile Course
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                    Our new course design will feature an &ldquo;out and back&rdquo; 4-mile route that
                    will turn around in front of the historic Ohio State University
                    &ldquo;Horseshoe&rdquo;.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/event-details"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
                    >
                      Click For Map Of The Course
                    </Link>
                  </div>
                </article>

                <article className="rounded-3xl border border-white/15 bg-[#1e252d] p-6">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                    Walk N&apos; Talk (About 2.4 Miles)
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                    This year&apos;s Walk N&apos; Talk route is designed for the more casual runner or
                    walker. It&apos;s ideal for family and friends who prefer to take their time as
                    they enjoy a morning of fun and exercise. The route will include the Ohio State
                    Waterman Agriculture and Natural Resources Complex.
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                    Please, no dogs allowed as a courtesy to other participants.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/event-details"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
                    >
                      Click For Map Of The Course
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-5 bg-[#1d232b] px-4 py-6 sm:px-8">
          <div className="container mx-auto grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="md:text-4xl font-black uppercase leading-none text-[#f3d27d] text-2xl">
                Featured Event Details
              </h2>
              <ul className="mt-5 space-y-4 text-xl leading-tight text-white/95 sm:text-xl">
                <li>
                  <span className="font-semibold">Choose your challenge:</span> 4-Mile race, 2.4-Mile
                  Walk N&apos; Talk, Tot Trot, or virtual participation.
                </li>
                <li>
                  <span className="font-semibold">Race morning schedule:</span> Tot Trot starts at 8:30
                  AM and the main event starts at 9:00 AM.
                </li>
                <li>
                  <span className="font-semibold">Location:</span> Shops on Lane Avenue 1675 W Lane Ave,
                  Columbus, OH 43221.
                </li>
              </ul>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-white/15">
              <Image
                src="/features.jpg"
                alt="Women at finish line"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* <section id="packet-pickup" className="mt-5 bg-[#212831] px-4 py-6 sm:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                testimonials[0],
                testimonials[1],
                testimonials[2],
              ].map((item) => (
                <article
                  key={item.name}
                  className="grid gap-4 rounded-2xl border border-white/12 bg-white/5 p-4 sm:grid-cols-[96px_1fr]"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/20">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-1 text-[#f3d27d]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-2xl leading-[1.2] text-white/95">&ldquo;{item.message}&rdquo;</p>
                    <p className="mt-2 text-2xl font-semibold text-white">- {item.name}</p>
                  </div>
                </article>
              ))}
            </div>
            </div>
        </section> */}

        <section id="projects" className="mt-0 bg-[#1e252d] px-4 py-6 sm:px-8 sm:py-12">
          <div className="container mx-auto grid gap-6 lg:grid-cols-[0.5fr_1fr]">
            <div className="relative min-h-[250px] overflow-hidden rounded-3xl border border-white/15">
              <Image
                src="/event.jpg"
                alt="Event director"
                fill
                className="object-cover"
              />
            </div>
            <div>
                <h3 className="md:text-4xl font-black uppercase leading-none text-[#f3d27d] text-2xl">
                About The Columbus Turkey Trot
              </h3>
              <p className="mt-4 max-w-6xl text-xl leading-8 text-white/95 sm:text-xl sm:leading-[1.3]">
                The Columbus Turkey Trot is a Thanksgiving Day event bringing runners and walkers
                together for a fun, energetic start to the holiday.
              </p>
              <p className="mt-3 max-w-6xl text-xl leading-8 text-white/95 sm:text-xl sm:leading-[1.3]">
                Participants receive festive race-day perks, including a commemorative event shirt
                and a custom finisher medal.
              </p>
              <p className="mt-3 max-w-6xl text-xl leading-8 text-white/95 sm:text-xl sm:leading-[1.3]">
                This event also supports a meaningful local cause, with proceeds benefiting
                Easterseals of Central and Southeast Ohio.
              </p>
              <p className="mt-5 text-xl text-white sm:text-xl">
                Celebrate Thanksgiving morning with movement, community, and purpose.
              </p>
              <div className="mt-6">
                <Link
                  href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-xl font-black uppercase tracking-[0.05em] text-[#f7d96f] transition hover:brightness-110"
                >
                  Click Here To Register
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mt-5">
          <div className="container mx-auto px-3">
            <div className="flex flex-col gap-4 border-b border-white/15 py-8 sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&q=80"
                  alt="Columbus Turkey Trot logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div id="contact">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                  Shops on Lane Avenue
                </h3>
                <p className="mt-1 max-w-7xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-2xl">
                  1675 W Lane Ave, Columbus, OH 43221 | Main event starts at 9:00 am on
                  10/04/2026.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <SiteFooter />
      </div>
    </main>
  );
}
