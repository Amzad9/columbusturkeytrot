import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Questions | Columbus Turkey Trot",
  description: "Get answers for registration, packet pickup, and race-day questions.",
};

const faq = [
  {
    question: "Can I register online?",
    answer: "Yes. Registration is available through RunSignUp and opens in a new tab from our Register buttons.",
  },
  {
    question: "Can someone else pick up my packet?",
    answer: "Yes. A friend or family member may pick up your race packet if you cannot attend.",
  },
  {
    question: "What time does the race start?",
    answer: "Main event starts at 9:00 AM on Thanksgiving Day, with Tot Trot at 8:30 AM.",
  },
];

export default function QuestionsPage() {
  return (
    <PageShell
      activeLabel="Questions"
      hero={{
        eyebrow: "Questions",
        title: "We're Here To Help",
        subtitle: "Need help with registration, packet pickup, or race-day details? Reach out anytime.",
        imageUrl: "https://scontent-del3-1.xx.fbcdn.net/v/t39.30808-6/653971864_27357222310544485_3068443002176273656_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=QAK_pqKXc2QQ7kNvwEZYLaI&_nc_oc=AdrX6x3U-UG1s4PDZv-QgHcCBydlpnz2XoI4DDyXkGb-eFrpRXl1zQse8M_BNCSPloRqkrdwAGSHN2DLtFXckoom&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=DUkmMc8r6AJd1WJHQ_jDsg&_nc_ss=7b2a8&oh=00_Af5oYLzsgSoinCgdFsEgxlHfnSWtO8bdhAqlfHmKzxhDmg&oe=69FA2B66",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          <a
            href={siteContact.phoneHref}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <Phone className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Call Us</h2>
            <p className="mt-2 text-white/85">{siteContact.phone}</p>
          </a>
          <a
            href={`mailto:${siteContact.emailShowroom}`}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <Mail className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Email Us</h2>
            <p className="mt-2 text-white/85">{siteContact.emailShowroom}</p>
          </a>
          <Link
            href="/event-details"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <MessageCircle className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Event Info</h2>
            <p className="mt-2 text-white/85">See race details, distance options, and registration links.</p>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">FAQ</h3>
          <div className="mt-6 grid gap-4">
            {faq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h4 className="text-lg font-black text-white sm:text-xl">{item.question}</h4>
                <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
