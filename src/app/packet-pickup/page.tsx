import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin, ShieldCheck } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Packet Pickup | Columbus Turkey Trot",
  description: "Packet pickup times and race-day pickup details for the Columbus Turkey Trot.",
};

const pickupDates = [
  "Race day - Thursday, Nov 27 | Pickup information announced pre-event",
  "Main event starts at 9:00 AM",
  "Tot Trot starts at 8:30 AM",
];

const checklistItems = [
  "Photo ID (recommended for faster check-in)",
  "Registration confirmation email on your phone",
  "Runner name and event choice (5-Mile, Walk N' Talk, or Tot Trot)",
  "Comfortable timing to avoid race-morning lines",
];

const proxyRules = [
  "A friend or family member may pick up your packet.",
  "Share your full name and registered distance with your proxy.",
  "Proxies should bring their own ID and your registration confirmation.",
  "Only the registered runner may race with their assigned bib.",
];

export default function PacketPickupPage() {
  return (
    <PageShell
      activeLabel="Packet Pickup"
      hero={{
        eyebrow: "Packet Pickup",
        title: "Packet Pickup & Race Morning",
        subtitle: "Use one of our pickup windows to save time and start race morning stress-free.",
        imageUrl:
          "https://scontent.fdel65-2.fna.fbcdn.net/v/t39.30808-6/481706957_1252847590180197_3677655623441193262_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xF7vgc4Dv_UQ7kNvwFbU24O&_nc_oc=AdqAjXd34YvUlKF9Lr_RwHnK5iVWuwZ0TkNKtOejurHnDQ6Be6Z501lnTpdFrvP3NytxnBRrTm_f9Nm3tvOJ3SUY&_nc_zt=23&_nc_ht=scontent.fdel65-2.fna&_nc_gid=ejK2xdsCikeTN9wo_mzfaw&_nc_ss=7b2a8&oh=00_Af1bsewVdxWp_h2VohFB50oX7822zGbBokBDCXYgDrZ-QA&oe=69F9483B",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
              Pickup Windows
            </h2>
            <ul className="mt-6 space-y-3">
              {pickupDates.map((item) => (
                <li key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white/90">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              If you cannot attend, a friend or family member may pick up your packet for you.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">Quick Notes</h3>
            <div className="mt-5 space-y-4 text-white/90">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#f3d27d]" /> Shops on Lane Avenue, Columbus
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[#f3d27d]" /> Arrive early for parking and warm-up
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#f3d27d]" /> Keep your bib handy on race day
              </p>
            </div>
            <div className="mt-7">
              <Link
                href="/questions"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
              >
                Questions?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
              Location And Parking
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Packet pickup details are communicated before race week. Plan to arrive a little early
              so you can park, check in, and review race-day details with our team.
            </p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white/90">
                <p className="flex items-center gap-2 font-semibold">
                  <MapPin className="h-4 w-4 text-[#f3d27d]" />
                  {siteContact.addressLines.join(" ")}
                </p>
              </div>
              <a
                href={siteContact.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
              >
                Open Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">What To Bring</h3>
            <ul className="mt-4 space-y-3">
              {checklistItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Picking Up For Someone Else
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            We support proxy pickup to make race weekend easier for participants.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {proxyRules.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-white/15 bg-[#1e252d] px-5 py-4 text-white/90"
              >
                {item}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-[#1e252d] p-5">
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#f3d27d]">
              <ShieldCheck className="h-4 w-4" />
              Important Policy Notes
            </p>
            <p className="mt-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Race entries are non-refundable. For safety and accurate timing, unofficial bib
              transfers are not allowed.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
            >
              Click Here To Register
            </Link>
            <Link
              href="/questions"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
            >
              Ask A Question
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
