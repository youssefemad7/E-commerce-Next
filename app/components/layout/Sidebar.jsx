// src/components/layout/Sidebar.jsx
"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-48 p-4 text-muted-foreground border-r border-border pt-[30]">
      <nav className="space-y-4 ">
        <Link href="/" className="block hover:text-primary">
          Woman’s Fashion
        </Link>
        <Link href="/" className="block hover:text-primary">
          Men’s Fashion
        </Link>
        <Link href="/" className="block hover:text-primary">
          Electronics
        </Link>
        <Link href="/" className="block hover:text-primary">
          Home & Lifestyle
        </Link>
        <Link href="/" className="block hover:text-primary">
          Medicine
        </Link>
        <Link href="/" className="block hover:text-primary">
          Sports & Outdoor
        </Link>
        <Link href="/" className="block hover:text-primary">
          Baby’s & Toys
        </Link>
        <Link href="/" className="block hover:text-primary">
          Groceries & Pets
        </Link>
        <Link href="/" className="block hover:text-primary">
          Health & Beauty
        </Link>
      </nav>
    </aside>
  );
}
