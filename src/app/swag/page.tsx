import type { Metadata } from "next";
import Image from "next/image";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Swag | Columbus Turkey Trot",
  description: "See what race-day swag you'll receive at the Columbus Turkey Trot.",
};

type SwagItem = {
  title: string;
  body: string;
  image: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  imageHref?: string;
};

const swagItems: SwagItem[] = [
  {
    title: "Custom Finisher Medal",
    body: "A larger preview of the race medal so participants can see the design details before race day.",
    image:"https://scontent.fdel65-3.fna.fbcdn.net/v/t39.30808-6/651228657_27353916834208366_1055685908025924740_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=mG2DkZJZRe4Q7kNvwF_sfOK&_nc_oc=AdrdTSGOx-nMs3W3xkBvRCtVVTXbdGlK4Lv85NjtTl2SzylBQLax8nEgziDl4_wfP5cxVFhWPMhP_c6_jJSVmPmy&_nc_zt=23&_nc_ht=scontent.fdel65-3.fna&_nc_gid=zoyJjTm6CxWMzj9YqSVkrQ&_nc_ss=7b2a8&oh=00_Af2x8UbUvxxUcU-JoIs-9B-nQn4ivwEWefrMDTVCgE5EOQ&oe=69F92FE1",
  },
  {
    title: "Official Race Shirt",
    body: "Commemorative long-sleeve race shirt included with registration while supplies last.",
    image: "https://scontent.fdel65-1.fna.fbcdn.net/v/t39.30808-6/651335902_27353946610872055_233127597016579799_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=IY5YHqecDTgQ7kNvwGV2F53&_nc_oc=Ado0Fo0KsQqWpqij_VNOpX5YoNR67rkuVa4su9p0m_5J_tTLW6zllb_JcF0vzg_OTO_yMXqvdk5EzEsfff8bqeIe&_nc_zt=23&_nc_ht=scontent.fdel65-1.fna&_nc_gid=iSQDf3XZiKRx2FKIFIAJFQ&_nc_ss=7b2a8&oh=00_Af0u3ASW64r7tASrDM3MIir5WmXOpuM1MlMqSznKmRcJAA&oe=69F93075",
  },
  {
    title: "Finish Line Keepsakes",
    body: "Custom finisher medal and holiday race-day memories to celebrate your Thanksgiving run.",
    image:
      "https://scontent.fdel65-2.fna.fbcdn.net/v/t39.30808-6/481098071_1252847966846826_8977792373764848354_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=T9pr04Bm6oIQ7kNvwH5qDKz&_nc_oc=Adp1AKSNeZJCkTobxuvz9BzzOIXmwC52yv4b_4kym_nO3n4Jaj6rbJWU7pNMuDM2-2WpjLy27kd8gSsQafrfO0-o&_nc_zt=23&_nc_ht=scontent.fdel65-2.fna&_nc_gid=R4Xqe7uA1Qus5AWfF413Rw&_nc_ss=7b2a8&oh=00_Af1eebEb1beVBcolfYA3A8eHTUsZcRmsGE_GjNW8qlUdKw&oe=69F91C66",
  },

];

export default function SwagPage() {
  return (
    <PageShell
      activeLabel="Swag"
      hero={{
        eyebrow: "Swag",
        title: "Run It. Celebrate It.",
        subtitle: "Thanksgiving race-day perks include participant shirt, finisher medal, and festive community energy.",
        imageUrl: "https://images.unsplash.com/photo-1774050021257-97b320f45f98?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
    >
      {/* <section className="px-4 pt-10 sm:px-8 sm:pt-14">
        <div className="container mx-auto">
          <article className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
            <div className="relative h-88 w-full bg-black/30 sm:h-120">
              <Image
                src="https://scontent.fdel65-3.fna.fbcdn.net/v/t39.30808-6/651228657_27353916834208366_1055685908025924740_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=mG2DkZJZRe4Q7kNvwF_sfOK&_nc_oc=AdrdTSGOx-nMs3W3xkBvRCtVVTXbdGlK4Lv85NjtTl2SzylBQLax8nEgziDl4_wfP5cxVFhWPMhP_c6_jJSVmPmy&_nc_zt=23&_nc_ht=scontent.fdel65-3.fna&_nc_gid=zoyJjTm6CxWMzj9YqSVkrQ&_nc_ss=7b2a8&oh=00_Af2x8UbUvxxUcU-JoIs-9B-nQn4ivwEWefrMDTVCgE5EOQ&oe=69F92FE1"
                alt="Columbus Turkey Trot race medal"
                fill
                className="object-contain p-6 opacity-95 sm:p-10"
                sizes="100vw"
                priority
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-200/90">Featured Swag</p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Custom Finisher Medal
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                A larger preview of the race medal so participants can see the design details before race day.
              </p>
              <a
                href="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-pink-200 transition hover:text-pink-100"
              >
                Open full-size medal image
              </a>
            </div>
          </article>
        </div>
      </section> */}

      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          {swagItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
            >
              <div
                className={`relative w-full border-b border-white/10 bg-black/20 ${
                  item.imageWrapperClassName ?? "min-h-96 md:min-h-190"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`${item.imageClassName ?? "object-contain md:object-cover"} opacity-80`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
                {item.imageHref ? (
                  <a
                    href={item.imageHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-pink-200 transition hover:text-pink-100"
                  >
                    View larger medal image
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
