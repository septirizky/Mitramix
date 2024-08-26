import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  const formatRupiah = (number: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <Banner />

      <section
        id="tentang"
        className="flex flex-col max-w-screen-xl gap-4 p-4 mx-auto bg-indigo-800 "
      >
        <div className="flex justify-center items-center">
          <h1 className="mt-4 text-2xl lg:text-4xl font-semibold text-neutral">
            Selamat Datang di
          </h1>
        </div>
        <div className="flex justify-center items-center bg-white">
          <Image src="/MitraMix.png" alt="MitraMix" width={460} height={460} />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
          <div className=" font-serif text-2xl text-white text-center">
            <p>
              Siap melayani berbagai proyek konstruksi besar dan kecil se
              Jabodetabek.
            </p>
          </div>
          <div className="text-white md:ml-16">
            <div className="flex m-5">
              <Image src="/check.png" alt="check" width={30} height={30} />
              <h4 className="ml-5">Supplier Beton Readymix</h4>
            </div>
            <div className="flex m-5 ">
              <Image src="/check.png" alt="check" width={30} height={30} />
              <h4 className="ml-5">Pompa Beton</h4>
            </div>
            <div className="flex m-5">
              <Image src="/check.png" alt="check" width={30} height={30} />
              <h4 className="ml-5">Vibrator</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex flex-col gap-10 md:gap-1 mx-5 lg:mx-44">
            <div className="flex flex-col md:flex-row gap-2 justify-center text-center">
              <picture className="flex justify-center items-center md:w-1/2">
                <img src="/truk.png" alt="truk" />
              </picture>
              <p className="font-semibold font-serif text-4xl text-white lg:text-lg text-balance my-auto ">
                Mutu, Servis dan Pelayanan lebih diutamakan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="layanan"
        className="flex flex-col max-w-screen-xl gap-4 p-4 mx-auto"
      >
        <div className="flex justify-center items-center">
          <h1 className="mt-4 text-2xl lg:text-4xl font-semibold">
            DAFTAR HARGA BETON COR MITRA MIX 2024
          </h1>
        </div>
        <div className="flex justify-center items-center m-7">
          <Image src="/truk2.jpg" alt="truk2" width={500} height={500} />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <Image src="/truk1.jpg" alt="truk1" width={500} height={500} />
          </div>
          <div>
            <table className="w-full text-center text-sm dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    MUTU
                  </th>
                  <th scope="col" className="px-6 py-3">
                    FA STD
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    K225
                  </td>
                  <td className="md:px-6 py-4">{formatRupiah(835000)}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    K250
                  </td>
                  <td className="md:px-6 py-4">{formatRupiah(855000)}</td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    K300
                  </td>
                  <td className="md:px-6 py-4">{formatRupiah(900000)}</td>
                </tr>

                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    K350
                  </td>
                  <td className="md:px-6 py-4">{formatRupiah(945000)}</td>
                </tr>
              </tbody>
            </table>
            <p>
              Penawaran harga diatas sewaktu-waktu dapat berubah, dan masih
              dapat anda nego, untuk melakukan negosiasi silahkan hubungi pada
              layanan chat Whatsapp atau telepon langsung
            </p>
          </div>
        </div>
      </section>

      <section
        id="kontak"
        className="min-h-screen py-6 flex flex-col justify-center sm:py-12"
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className=" font-bold text-3xl">Hubungi Kami</h1>
            </div>
            <ul className="mb-6 md:mb-0">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Alamat
                  </h3>
                  <p className="text-white">
                    Duta Bintaro Nusa Dua Blok F5/10 Pinang
                  </p>
                  <p className="text-white">Kota Tangerang, Banten.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Kontak
                  </h3>
                  <h4 className="font-bold text-gray-900">AMIR BAKHRUDIN</h4>
                  <p className="text-white">
                    <a
                      className="link link-hover"
                      href="https://wa.me/6281218300030?text=Hallo%20saya%20ingin%20bertanya%20terkait%20readymix"
                    >
                      0812 18 3000 30
                    </a>
                  </p>
                  <p className="text-white">
                    <a
                      className="link link-hover"
                      href="https://wa.me/6281218300030?text=Hallo%20saya%20ingin%20bertanya%20terkait%20readymix"
                    >
                      0878 71 2227 80
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mt-2 text-lg font-bold leading-6 text-gray-900">
                    Siap Melayani 24 Jam
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
