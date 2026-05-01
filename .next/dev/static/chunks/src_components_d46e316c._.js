(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/siteConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/siteConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SiteHeader({ activeLabel }) {
    _s();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (!isMobileMenuOpen) {
                return;
            }
            const { overflow } = document.body.style;
            document.body.style.overflow = "hidden";
            return ({
                "SiteHeader.useEffect": ()=>{
                    document.body.style.overflow = overflow;
                }
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        isMobileMenuOpen
    ]);
    const closeMenu = ()=>setIsMobileMenuOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed inset-x-0 top-0 z-30 px-4 pt-1 bg-[#232a33]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto flex items-center justify-between gap-4  px-3 py-1  sm:px-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex min-w-0 shrink-0 items-center",
                                "aria-label": "Columbus Turkey Trot",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-md bg-transparent h-24 w-60",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Logolatest.jpg",
                                        alt: "Columbus Turkey Trot logo",
                                        fill: true,
                                        className: "object-contain",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 37,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 32,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsMobileMenuOpen(true),
                                className: "inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-3 text-white transition hover:bg-white/20 sm:hidden",
                                "aria-label": "Open navigation menu",
                                "aria-expanded": isMobileMenuOpen,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-5 w-5",
                                    strokeWidth: 2.4
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 61,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 54,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden shrink-0 sm:block sm:w-auto",
                                "aria-label": "Primary navigation",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-end gap-2 xl:gap-7 text-[10px] font-black uppercase tracking-[0.04em] text-white md:text-[11px] lg:gap-5 lg:text-[12px] xl:text-[13px]",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteNav"].map((item)=>{
                                            const isActive = item.label === activeLabel;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "cursor-pointer list-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: [
                                                        "transition hover:text-[#f0d07a]",
                                                        isActive ? "text-[#f0d07a]" : ""
                                                    ].join(" "),
                                                    "aria-current": isActive ? "page" : undefined,
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://runsignup.com/Race/OH/Columbus/ColumbusTurkeyTrot",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "rounded-full border border-[#1f7f56] bg-[#1c9a64] px-3 py-2 text-[10px] text-[#f7d96f] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:brightness-110 md:px-4 md:text-[11px] lg:px-5 lg:text-[12px]",
                                            children: "Register Here"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 83,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 65,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 64,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 31,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            "pointer-events-none fixed inset-0 z-40 bg-black/55 opacity-0 transition duration-300 sm:hidden",
                            isMobileMenuOpen ? "pointer-events-auto opacity-100" : ""
                        ].join(" "),
                        onClick: closeMenu,
                        "aria-hidden": !isMobileMenuOpen
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 95,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            "fixed right-0 top-0 z-50 h-full w-[84vw] max-w-sm border-l border-white/20 bg-[#1f252d] shadow-[-18px_0_45px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out sm:hidden",
                            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        ].join(" "),
                        "aria-hidden": !isMobileMenuOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-white/15 px-5 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-black uppercase tracking-[0.18em] text-white",
                                        children: "Menu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 112,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: closeMenu,
                                        className: "inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-2 text-white transition hover:bg-white/20",
                                        "aria-label": "Close navigation menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5",
                                            strokeWidth: 2.4
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 119,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 113,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 111,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "px-5 py-6",
                                "aria-label": "Mobile navigation",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-base font-black uppercase tracking-[0.12em] text-white",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteNav"].map((item)=>{
                                            const isActive = item.label === activeLabel;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    onClick: closeMenu,
                                                    className: [
                                                        "block rounded-2xl border border-white/20 bg-white/5 px-4 py-4 transition hover:border-[#f0d07a]/45 hover:text-[#f0d07a]",
                                                        isActive ? "border-[#f0d07a]/55 text-[#f0d07a]" : ""
                                                    ].join(" "),
                                                    "aria-current": isActive ? "page" : undefined,
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                onClick: closeMenu,
                                                className: "block rounded-2xl border border-[#1f7f56] bg-[#1c9a64] px-4 py-4 text-[#f7d96f] transition hover:brightness-110",
                                                children: "Register Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 143,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 124,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 123,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 104,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "h-[92px] sm:h-[108px]"
            }, void 0, false, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SiteHeader, "gQOEbwLkKOhPX9CeqhbWWB3OzL4=");
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_d46e316c._.js.map