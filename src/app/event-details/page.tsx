import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Flag, MapPin, ShieldCheck, Trophy, Waves } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Event Details | Columbus Turkey Trot",
  description: "Race details for the Columbus Turkey Trot Thanksgiving Day event.",
};

const distances = [
  {
    title: "Columbus Turkey Trot 5-Mile",
    miles: "5 miles",
    startTime: "9:00AM",
    body: "Our signature Thanksgiving Day race distance for runners of all levels.",
  },
  {
    title: "Walk N' Talk",
    miles: "2.6 miles",
    startTime: "9:00AM",
    body: "A friendly walk option that keeps the holiday morning inclusive and social.",
  },
  {
    title: "Tot Trot",
    miles: "100 yards",
    startTime: "8:30AM",
    body: "A kids dash for participants under age 12 before the main race begins.",
  },
];

const eventFlow = [
  {
    title: "Thanksgiving Morning Start",
    body: "Arrive with enough time to warm up, find your group, and settle in before the countdown.",
    icon: <Flag className="h-4 w-4" />,
  },
  {
    title: "Holiday Community Energy",
    body: "Hydration and volunteer support are available on course to keep runners moving confidently.",
    icon: <Waves className="h-4 w-4" />,
  },
  {
    title: "Post-Race Celebration",
    body: "Cross the line, celebrate your effort, and enjoy post-race energy with the community.",
    icon: <Trophy className="h-4 w-4" />,
  },
];

const raceDayGuidelines = [
  "Runners and walkers are welcome across race and walk events.",
  "Follow event volunteers and posted race-day signage for safety.",
];
const raceMaps = [
  {
    title: "5K Course Map",
    href: "https://www.runningahead.com/maps/d94e12fb0fb64aa29ccb013eb7381597?unit=mi&map=roadmap",
  },
  {
    title: "10K / 10-Mile Course Map",
    href: "https://www.runningahead.com/maps/1ca85efadb23419189ee8130f8b6f0f1?unit=mi&map=roadmap",
  },
];

export default function EventDetailsPage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Event Details",
        title: "Choose Your Challenge",
        subtitle: "Run the distance that fits your goals and celebrate every mile with a supportive community.",
        imageUrl: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1400&q=80",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
          <p className="text-base uppercase tracking-[0.08em] text-white/90 sm:text-xl">
            Starting line for all events - Shops on Lane Avenue, Columbus
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {distances.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-[#1e252d] p-5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <h2 className="text-xl font-black tracking-tight text-white sm:text-xl">
                  {item.title} ({item.miles})
                </h2>
                <p className="mt-1 text-2xl font-black uppercase text-white sm:text-2xl">
                  Start Time at {item.startTime}
                </p>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  {item.body}
                </p>
                <div className="mt-4">
                  <Link
                    href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-[#1f7f56] bg-[#1c9a64] px-6 py-3 text-center text-lg font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
                  >
                    Register Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-12">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Race At A Glance
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <CalendarDays className="h-4 w-4" /> Date
              </p>
              <p className="mt-2 text-lg text-white">Thursday, November 27, 2026</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <MapPin className="h-4 w-4" /> Location
              </p>
              <p className="mt-2 text-lg text-white">Shops on Lane Avenue, Columbus</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <Trophy className="h-4 w-4" /> Start Time
              </p>
              <p className="mt-2 text-lg text-white">Main event 9:00AM (Tot Trot 8:30AM)</p>
            </div>
          </div>

          <div className="mt-7">
            <Link
              href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:text-base"
            >
              Click Here To Register
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-8">
        <div className="container mx-auto">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Race Day Flow
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {eventFlow.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#f3d27d]">
                  {item.icon}
                  Event Flow
                </p>
                <h4 className="mt-3 text-xl font-black uppercase tracking-tight text-white">{item.title}</h4>
                <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-8">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8 lg:col-span-7">
            <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
              Pace And Corrals
            </h3>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Arrive early, line up by event type, and follow race team guidance for a smooth start.
            </p>
            <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Whether you race, walk, or cheer, this event is built for a fun Thanksgiving morning
              shared with the Columbus community.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8 lg:col-span-5">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">Rules & Safety</h3>
            <ul className="mt-4 space-y-3">
              {raceDayGuidelines.map((rule) => (
                <li
                  key={rule}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 sm:text-base"
                >
                  {rule}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/85">
              <ShieldCheck className="h-4 w-4 text-[#f3d27d]" />
              Follow volunteer direction and official signage throughout race morning.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          {/* <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Race Maps
          </h3>
          <p className="mt-3 max-w-4xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Preview each course below. If your browser blocks embedded maps, use the open-map link
            to view the full interactive route in a new tab.
          </p> */}

          <div className="grid gap-6 lg:grid-cols-2">
           <div>
           <video
                  className="min-h-[240px] w-full object-cover md:min-h-[480px]"
                  src="/Marathon_Short_text.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
           </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
