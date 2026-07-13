"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center transition hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="DSD Germany"
            width={520}
            height={180}
            priority
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* MENU */}
        <div className="hidden lg:flex items-center gap-10 text-[16px] font-semibold">

          <Link
            href="/"
            className="text-slate-700 transition hover:text-blue-700"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/#services"
            className="text-slate-700 transition hover:text-blue-700"
          >
            Hizmetler
          </Link>

          <Link
            href="/is-ilanlari"
            className="text-slate-700 transition hover:text-blue-700"
          >
            İş İlanları
          </Link>

          <Link
            href="/#contact"
            className="text-slate-700 transition hover:text-blue-700"
          >
            İletişim
          </Link>

          <a
            href="https://wa.me/905550341617"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-3 font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Hemen Başvur
          </a>

        </div>
      </nav>
    </header>
  );
}