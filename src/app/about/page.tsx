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
            Columbus Turkey Trot
            <br />
            Thanksgiving Day Tradition
          </>
        ),
        subtitle:
          "The Columbus Turkey Trot brings runners, walkers, kids, and families together for a fun Thanksgiving morning tradition.",
        imageUrl: "https://scontent.fdel65-2.fna.fbcdn.net/v/t39.30808-6/488201443_1280358300762459_5014584882957390548_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=smK3cvsD-PwQ7kNvwGLKE9B&_nc_oc=AdokiklSRmXZiUI06wRSpKcrYWs93W4sj8RuWuxHFZs2HRCDoFlyYkB5nWvoGTB9JVCPHjCS7MXbz9VqZCCnsUat&_nc_zt=23&_nc_ht=scontent.fdel65-2.fna&_nc_gid=CzJqkU3yBI6jSeoj6kH5ig&_nc_ss=7b2a8&oh=00_Af1MNOZzMMI96yUoWCLBjhb0S217UwUa__Wx6RInAgrqOg&oe=69F924B5",
      }}
    >
      <section id="mission" className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            The Columbus Turkey Trot is one of Central Ohio&apos;s favorite holiday events. Choose the
            5-Mile race, 2.6-Mile Walk N&apos; Talk, Tot Trot, or virtual option and celebrate race
            morning with community spirit. Proceeds benefit Easterseals of Central and Southeast Ohio.
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
                src="https://scontent.fdel65-2.fna.fbcdn.net/v/t39.30808-6/481442902_1252848036846819_3317941550059060590_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=12QInHBrbBgQ7kNvwE3Btav&_nc_oc=AdpDeb-GMLCItqFq-TEF4XAG-mszdr-oSZ7_D-etdtPEBlHh5adKoO-7JYY6yqdXZ7iHCkjMfk2Dy0uGQGG5MV7y&_nc_zt=23&_nc_ht=scontent.fdel65-2.fna&_nc_gid=Vg3LTMHc2CDV-lLUR9KIOQ&_nc_ss=7b2a8&oh=00_Af2dHPBI4vFDDtYWXPokjOj3INyKsHJXf_R3lWWvfLTeEw&oe=69F932C9"
                alt="Women runners at the finish line"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
            What You Can Expect
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  {item.body}
                </p>
              </article>
            ))}
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

