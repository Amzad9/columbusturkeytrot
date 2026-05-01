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
          className="relative overflow-hidden px-4 bg-[#1e252d] pt-8 pb-8"
        >
          {/* <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1400&q=80"
              alt="Columbus Turkey Trot event background"
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#171b22]/95 via-[#1c232b]/85 to-[#1c232b]/35" />
          </div> */}
          <div className="container mx-auto">
            <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:items-center">
              <div className="max-w-7xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase leading-[0.92] text-[#00a2e7]">
                  2026 Columbus Turkey Trot
                </h1>
              
                <p className="mt-3 text-2xl font-semibold text-[#f3d27d] sm:text-4xl">
                  Thanksgiving Day | Columbus, Ohio | 11/27/2026
                </p>
                <p className="mt-5 max-w-4xl text-lg leading-9 text-white/95 sm:text-2xl sm:leading-[1.3]">
                  Join one of Columbus's favorite Thanksgiving traditions. Choose your event and
                  celebrate race morning with family, friends, and the local running community.
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
                body: "5-Mile, 2.6-Mile Walk N' Talk, Tot Trot for kids, plus a virtual option.",
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

        <section id="services" className="mt-5 bg-[#1d232b] px-4 py-6 sm:px-8">
          <div className="container mx-auto grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="md:text-4xl font-black uppercase leading-none text-[#f3d27d] text-2xl">
                Featured Event Details
              </h2>
              <ul className="mt-5 space-y-4 text-xl leading-tight text-white/95 sm:text-xl">
                <li>
                  <span className="font-semibold">Choose your challenge:</span> 5-Mile race, 2.6-Mile
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
                src="https://scontent.fdel65-1.fna.fbcdn.net/v/t39.30808-6/481246877_1252847743513515_83710218392544829_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=S4zioeVDHmEQ7kNvwFIWHuN&_nc_oc=Ado9uWhpBOsrqx2kZZfMNLeB-V3KXIWrazmgBJl_k6w4Nu8PO0Aknpn-tRw_SM1jI9YztvHV5vUxSMDCi73qIhZk&_nc_zt=23&_nc_ht=scontent.fdel65-1.fna&_nc_gid=nVY_38GrjRM5jU6p5Sokjw&_nc_ss=7b2a8&oh=00_Af25AxwkHaf13_OkLP5HrlaLPiIkawGVntRnqFcl4DK-lQ&oe=69F9519B"
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
                src="https://scontent.fdel65-3.fna.fbcdn.net/v/t39.30808-6/481115497_1252847920180164_4878413604730860644_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=oPBRj_zzxXYQ7kNvwFV_3E7&_nc_oc=AdpyMlHXfsyEMdCbBo_Vu4mAF7G_6Be2_hivzo5dkHMATjSqa9EBYuBbelUt_WQzQ8iA3YTr5zCCNjdgqV4cLp4p&_nc_zt=23&_nc_ht=scontent.fdel65-3.fna&_nc_gid=-asyoCmZH07qfQyZdWkwgA&_nc_ss=7b2a8&oh=00_Af0bPGcocnn7OPuUvGEA42AmGuk5VZjF3w1g4GkyogmeTQ&oe=69F94926"
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
