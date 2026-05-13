import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Users } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "About | Columbus Turkey Trot",
  description: "Learn about the Columbus Turkey Trot Thanksgiving Day event in Columbus, Ohio.",
};

const values = [
  {
    title: "Community First",
    body: "A race day atmosphere built on encouragement, friendly competition, and shared goals.",
    icon: <Users className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Celebrate Every Finish",
    body: "Whether it’s your first 5K or your fastest 10-Mile, we celebrate the work you put in.",
    icon: <Sparkles className="h-5 w-5" strokeWidth={2.2} />,
  },
];

export default function AboutPage() {
  return (
    <PageShell
      activeLabel="About"
      hero={{
        eyebrow: "About",
        title: (
          <>
            The Columbus Turkey Trot: <br/>
            A Family Tradition
          </>
        ),
        subtitle:
          "The Columbus Turkey Trot brings runners, walkers, kids, and families together for a fun Thanksgiving morning tradition.",
        imageUrl: "/finishline.jpg",
      }}
    >
      <section id="mission" className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            The Columbus Turkey Trot serves to benefit Easterseals of Central and Southeast
            Ohio. Sponsored by Chase Bank, this family tradition includes both a 4-mile and 2.5
            mile run or walk. Don’t forget the kids! The Tot Trot is a 100 yard dash for children 9 and
            under.
            </p>
           

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Click Here To Register
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                View Event Details
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_18px_44px_rgba(0,0,0,0.30)] sm:min-h-[360px]">
              <Image
                src="/mission.jpg"
                alt="Women runners at the finish line"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">
          Overview
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-1">
           <p className="">The Columbus Turkey Trot is an annual event that welcomes runners and walkers of all
ages and experience levels. It serves as a cherished family tradition, inviting everyone to
join in the festivities.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#1e252d] px-4 py-4">
        <div className="container mx-auto">
          <h4 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">
          Participation         
           </h4>
          <div className="mt-6 grid gap-6 md:grid-cols-1">
           <p>Participants are encouraged to come out and meet new friends, explore new places, and
most importantly, have fun. Whether you’re looking to challenge yourself physically or
simply enjoy the festive atmosphere, the event offers something for everyone.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#1e252d] px-4 py-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#f3d27d]">
          Community Spirit       
           </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-1">
           <p>This event is open to all, making it easy to bring your family and friends along. It’s an
opportunity to create lasting memories and embrace the spirit of community that makes
the Columbus Turkey Trot so special.</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="flex lg:col-span-5">
              <div className="flex w-full flex-col rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                  Ready?
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Let’s make race day unforgettable.
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  If you’re registering, sponsoring, volunteering, or just have a question, reach out—we’ll help you get set.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
                  >
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[220px] overflow-hidden rounded-[24px] border border-white/15 bg-black/40 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:min-h-[280px] lg:min-h-0">
                {/* <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Run Like a Girl promotional video"
                >
                  <source src="/abouts/Run%20Like%20a%20Girl%202.mp4" type="video/mp4" />
                </video> */}
                <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/pfvsXLIAlwo?si=YXv7G_q-l6StBV9v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

