import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV MITRA MIX",
  description:
    "CV Mitra Mix adalah penyedia readymix beton terkemuka di Jabodetabek, menawarkan beton siap pakai berkualitas tinggi untuk berbagai proyek konstruksi. Dengan pengalaman bertahun-tahun dalam industri ini, kami menyediakan solusi beton yang andal, efisien, dan sesuai dengan standar tertinggi. Layanan kami mencakup pengiriman tepat waktu, pengadukan beton dengan formula yang optimal, dan dukungan teknis dari tim ahli kami. Produk readymix beton kami cocok untuk berbagai aplikasi, termasuk pembangunan rumah, gedung komersial, jalan raya, dan infrastruktur lainnya. Kami menggunakan bahan baku terbaik dan teknologi terbaru untuk memastikan kualitas dan kekuatan beton yang tahan lama. Komitmen kami terhadap kepuasan pelanggan tercermin dalam setiap proyek yang kami tangani. Pilih Mitra Mix untuk kebutuhan readymix beton Anda dan nikmati hasil yang luar biasa dengan layanan profesional yang dapat diandalkan. Hubungi kami di 0812 18 3000 30 untuk informasi lebih lanjut dan penawaran harga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer">
          <input id="public-drawer" type="checkbox" className="drawer-toggle" />

          <div className="flex flex-col drawer-content">
            <header className="sticky top-0 z-10 w-full border-b backdrop-blur bg-base-100/80">
              <nav className="max-w-screen-xl px-4 mx-auto navbar">
                <div
                  className="navbar-start mr-2
                 lg:hidden"
                >
                  <label
                    htmlFor="public-drawer"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>

                <div
                  className="navbar-start justify-center
                gap-3 lg:justify-start"
                >
                  <Image
                    src="/MitraMix.png"
                    alt="MitraMix"
                    width={180}
                    height={180}
                  />
                </div>

                <div className="hidden navbar-center lg:flex">
                  <ul className="gap-2 font-bold menu menu-horizontal text-indigo-800">
                    <li>
                      <a href="#">Beranda</a>
                    </li>
                    <li>
                      <a href="#tentang">Tentang</a>
                    </li>
                    <li>
                      <a href="#layanan">Layanan</a>
                    </li>
                    <li>
                      <a
                        href="#kontak"
                        className="text-white bg-indigo-800 hover:bg-secondary"
                      >
                        Kontak
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>

            <main>{children}</main>
          </div>

          <aside className="drawer-side">
            <label
              htmlFor="public-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            />

            <ul className="min-h-full gap-2 p-4 pt-24 font-bold menu w-44 bg-indigo-400 text-neutral">
              <li>
                <a href="#">Beranda</a>
              </li>
              <li>
                <a href="#tentang">Tentang</a>
              </li>
              <li>
                <a href="#layanan">Layanan</a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className="w-32 text-indigo-800 bg-neutral hover:bg-secondary"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <Footer />
        <div className="fixed bottom-10 left-10">
          <a href="https://wa.me/6281218300030?text=Hallo%20saya%20ingin%20bertanya%20terkait%20readymix">
            <button
              type="button"
              data-twe-ripple-init=""
              data-twe-ripple-color="light"
              className="mb-2 inline-block rounded-full bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <span className="[&>svg]:h-7 [&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </body>
    </html>
  );
}
