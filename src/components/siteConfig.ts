export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Event Details", href: "/event-details" },
  { label: "Our Beneficiary", href: "/our-beneficiary" },
  { label: "Swag", href: "/swag" },
  { label: "Packet Pickup", href: "/packet-pickup" },
  { label: "Questions", href: "/questions" },
];

export const siteContact = {
  emailShowroom: "info@columbusturkeytrot.com",
  emailOperations: "info@columbusturkeytrot.com",
  phone: "(614) 545-2268",
  phoneHref: "tel:+16145452268",
  addressLines: [
    "Shops on Lane Avenue",
    "1675 W Lane Ave,",
    "Columbus, OH 43221",
  ],
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=1675+W+Lane+Ave,+Columbus,+OH+43221",
  businessHours: [
    "Race day - Thursday, Nov 27 | Tot Trot 8:30am",
    "Race day - Thursday, Nov 27 | Main start 9:00am",
    "Date - Thanksgiving Day | Columbus, Ohio",
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      key: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      key: "instagram",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/",
      key: "x",
    },
  ],
} as const;
