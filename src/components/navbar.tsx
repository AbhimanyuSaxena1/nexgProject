"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const router = useRouter(); // Initialize useRouter

    const handleNavigate = (path: string) => {
        router.push(path); // Programmatic navigation
    };

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <div className="absolute left-5.5 top-5.5 text-xl">
                    <button onClick={() => handleNavigate("/")}>x</button> {/* Navigate to "/" */}
                </div>
                <button onClick={() => handleNavigate("/")}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        {/* Home Menu Item */}
                    </MenuItem>
                </button>
                <button onClick={() => handleNavigate("/AllProducts")}>
                    <MenuItem setActive={setActive} active={active} item="Products">
                        {/* Contact Us Menu Item */}
                    </MenuItem>
                </button>
                <MenuItem setActive={setActive} active={active} item="News">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem>
                <button onClick={() => handleNavigate("/ContactUs")}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                        {/* Contact Us Menu Item */}
                    </MenuItem>
                </button>
            </Menu>
        </div>
    );
}

export default Navbar;