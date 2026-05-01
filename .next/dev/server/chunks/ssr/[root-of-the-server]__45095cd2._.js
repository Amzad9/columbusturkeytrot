module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/siteConfig.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteContact",
    ()=>siteContact,
    "siteNav",
    ()=>siteNav
]);
const siteNav = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Event Details",
        href: "/event-details"
    },
    {
        label: "Our Beneficiary",
        href: "/our-beneficiary"
    },
    {
        label: "Swag",
        href: "/swag"
    },
    {
        label: "Packet Pickup",
        href: "/packet-pickup"
    },
    {
        label: "Questions",
        href: "/questions"
    }
];
const siteContact = {
    emailShowroom: "info@columbusturkeytrot.com",
    emailOperations: "info@columbusturkeytrot.com",
    phone: "(614) 545-2268",
    phoneHref: "tel:+16145452268",
    addressLines: [
        "Shops on Lane Avenue",
        "1675 W Lane Ave,",
        "Columbus, OH 43221"
    ],
    directionsHref: "https://www.google.com/maps/search/?api=1&query=1675+W+Lane+Ave,+Columbus,+OH+43221",
    businessHours: [
        "Race day - Thursday, Nov 27 | Tot Trot 8:30am",
        "Race day - Thursday, Nov 27 | Main start 9:00am",
        "Date - Thanksgiving Day | Columbus, Ohio"
    ],
    socials: [
        {
            label: "Facebook",
            href: "https://www.facebook.com/",
            key: "facebook"
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/",
            key: "instagram"
        },
        {
            label: "X (Twitter)",
            href: "https://x.com/",
            key: "x"
        }
    ]
};
}),
"[project]/src/components/SiteFooter.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-rsc] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-rsc] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-rsc] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/siteConfig.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const socialIcons = {
    facebook: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
    instagram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
    x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"]
};
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "mt-0 pt-4 border-t border-white/10 bg-[  #2a3138] px-3 md:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 pb-8 pt-8 lg:grid-cols-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col w-full gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-36 w-38 border border-white rounded-md overflow-hidden  bg-transparent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "Columbus Turkey Trot logo",
                                        fill: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteFooter.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-36 w-38 border border-white rounded-md overflow-hidden  bg-transparent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        playsInline: true,
                                        className: "object-contain w-full h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                src: "/Turkey-Trot-2026-Animation-1.mp4.mp4",
                                                type: "video/mp4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteFooter.tsx",
                                                lineNumber: 36,
                                                columnNumber: 3
                                            }, this),
                                            "Your browser does not support the video tag."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SiteFooter.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SiteFooter.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xl font-black uppercase text-white",
                                    children: "Address"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-lg leading-7 text-[#d7dee2] sm:text-xl sm:leading-8",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContact"].addressLines[0],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/SiteFooter.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContact"].addressLines[1],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/SiteFooter.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContact"].addressLines[2]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SiteFooter.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xl font-black uppercase text-white",
                                    children: "Links"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 space-y-1 text-lg font-medium capitalize text-[#d7dee2] sm:text-md",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteNav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "transition hover:text-[#f0d07a]",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteFooter.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/src/components/SiteFooter.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SiteFooter.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xl font-black uppercase text-white",
                                    children: "Follow Us"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex gap-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContact"].socials.map(({ key, href, label })=>{
                                        const Icon = socialIcons[key];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": label,
                                            className: "grid h-12 w-12 place-items-center rounded-full bg-white/10 text-[#ffffff] transition hover:bg-white/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-6 w-6",
                                                strokeWidth: 2.25
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteFooter.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        }, key, false, {
                                            fileName: "[project]/src/components/SiteFooter.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SiteFooter.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xl font-black uppercase text-white",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContact"].emailShowroom}`,
                                    className: "mt-3 block text-lg text-[#d7dee2] transition hover:text-[#f0d07a] sm:text-xl",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContact"].emailShowroom
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContact"].phoneHref,
                                    className: "mt-2 block text-lg text-[#d7dee2] transition hover:text-[#f0d07a] sm:text-xl",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContact"].phone
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteFooter.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SiteFooter.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteFooter.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SiteFooter.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/10 bg-[#131920] py-4 text-center text-sm font-semibold text-[#c7d1d6]",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Columbus Turkey Trot. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SiteFooter.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SiteFooter.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SiteHeader.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/SiteHeader.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SiteHeader.tsx <module evaluation>", "default");
}),
"[project]/src/components/SiteHeader.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/SiteHeader.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SiteHeader.tsx", "default");
}),
"[project]/src/components/SiteHeader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/SiteHeader.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/SiteHeader.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/PageShell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteFooter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SiteFooter.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SiteHeader.tsx [app-rsc] (ecmascript)");
;
;
;
function PageShell({ activeLabel, hero, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top,#2a3138,#1a2027_50%,#161b22)] text-[#f1f4f6]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pb-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    activeLabel: activeLabel
                }, void 0, false, {
                    fileName: "[project]/src/components/PageShell.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                hero ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: [
                        "relative overflow-hidden px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16",
                        hero.videoUrl ? "bg-[#1e252d]" : hero.imageUrl ? "bg-cover bg-center" : "bg-[#1e252d]"
                    ].join(" "),
                    style: hero.videoUrl ? undefined : hero.imageUrl ? {
                        backgroundImage: `url('${hero.imageUrl}')`
                    } : undefined,
                    children: [
                        hero.videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            className: "pointer-events-none absolute inset-0 z-0 h-full w-full object-cover",
                            autoPlay: true,
                            loop: true,
                            muted: true,
                            playsInline: true,
                            poster: hero.imageUrl,
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: hero.videoUrl,
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageShell.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageShell.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-1 bg-linear-to-r from-[#171b22]/95 via-[#1c232b]/70 to-[#1c232b]/20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageShell.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container relative z-10 mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-w-4xl",
                                children: [
                                    hero.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white sm:text-sm",
                                        children: hero.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageShell.tsx",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-5 text-4xl md:text-5xl font-black uppercase leading-[0.92] tracking-[-0.02em] text-[#f3d27d]",
                                        children: hero.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageShell.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    hero.subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8",
                                        children: hero.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PageShell.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PageShell.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageShell.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageShell.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this) : null,
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SiteFooter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/PageShell.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PageShell.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PageShell.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/swag/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SwagPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PageShell.tsx [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Swag | Columbus Turkey Trot",
    description: "See what race-day swag you'll receive at the Columbus Turkey Trot."
};
const swagItems = [
    {
        title: "Custom Finisher Medal",
        body: "A larger preview of the race medal so participants can see the design details before race day.",
        image: "https://scontent.fdel65-3.fna.fbcdn.net/v/t39.30808-6/651228657_27353916834208366_1055685908025924740_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=mG2DkZJZRe4Q7kNvwF_sfOK&_nc_oc=AdrdTSGOx-nMs3W3xkBvRCtVVTXbdGlK4Lv85NjtTl2SzylBQLax8nEgziDl4_wfP5cxVFhWPMhP_c6_jJSVmPmy&_nc_zt=23&_nc_ht=scontent.fdel65-3.fna&_nc_gid=zoyJjTm6CxWMzj9YqSVkrQ&_nc_ss=7b2a8&oh=00_Af2x8UbUvxxUcU-JoIs-9B-nQn4ivwEWefrMDTVCgE5EOQ&oe=69F92FE1"
    },
    {
        title: "Official Race Shirt",
        body: "Commemorative long-sleeve race shirt included with registration while supplies last.",
        image: "https://scontent.fdel65-1.fna.fbcdn.net/v/t39.30808-6/651335902_27353946610872055_233127597016579799_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=IY5YHqecDTgQ7kNvwGV2F53&_nc_oc=Ado0Fo0KsQqWpqij_VNOpX5YoNR67rkuVa4su9p0m_5J_tTLW6zllb_JcF0vzg_OTO_yMXqvdk5EzEsfff8bqeIe&_nc_zt=23&_nc_ht=scontent.fdel65-1.fna&_nc_gid=iSQDf3XZiKRx2FKIFIAJFQ&_nc_ss=7b2a8&oh=00_Af0u3ASW64r7tASrDM3MIir5WmXOpuM1MlMqSznKmRcJAA&oe=69F93075"
    },
    {
        title: "Finish Line Keepsakes",
        body: "Custom finisher medal and holiday race-day memories to celebrate your Thanksgiving run.",
        image: "https://scontent.fdel65-2.fna.fbcdn.net/v/t39.30808-6/481098071_1252847966846826_8977792373764848354_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=T9pr04Bm6oIQ7kNvwH5qDKz&_nc_oc=Adp1AKSNeZJCkTobxuvz9BzzOIXmwC52yv4b_4kym_nO3n4Jaj6rbJWU7pNMuDM2-2WpjLy27kd8gSsQafrfO0-o&_nc_zt=23&_nc_ht=scontent.fdel65-2.fna&_nc_gid=R4Xqe7uA1Qus5AWfF413Rw&_nc_ss=7b2a8&oh=00_Af1eebEb1beVBcolfYA3A8eHTUsZcRmsGE_GjNW8qlUdKw&oe=69F91C66"
    }
];
function SwagPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PageShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        activeLabel: "Swag",
        hero: {
            eyebrow: "Swag",
            title: "Run It. Celebrate It.",
            subtitle: "Thanksgiving race-day perks include participant shirt, finisher medal, and festive community energy.",
            imageUrl: "https://images.unsplash.com/photo-1774050021257-97b320f45f98?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "px-4 py-10 sm:px-8 sm:py-14",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto grid gap-6 md:grid-cols-3",
                children: swagItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative w-full border-b border-white/10 bg-black/20 ${item.imageWrapperClassName ?? "min-h-96 md:min-h-190"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.image,
                                    alt: item.title,
                                    fill: true,
                                    className: `${item.imageClassName ?? "object-contain md:object-cover"} opacity-80`,
                                    sizes: "(min-width: 768px) 33vw, 100vw"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/swag/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/swag/page.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black uppercase tracking-tight text-white",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swag/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8",
                                        children: item.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swag/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    item.imageHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.imageHref,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-pink-200 transition hover:text-pink-100",
                                        children: "View larger medal image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/swag/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/swag/page.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.title, true, {
                        fileName: "[project]/src/app/swag/page.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/swag/page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/swag/page.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/swag/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/swag/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/swag/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__45095cd2._.js.map