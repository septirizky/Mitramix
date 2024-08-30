import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="flex justify-center max-w-screen-xl mx-auto">
      <div className="w-full carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <figure className="relative w-full overflow-hidden h-96 rounded-xl">
            <Image
              src="/slide1.jpeg"
              alt="banner1"
              sizes="100%"
              fill
              priority
              className="object-cover"
            />
          </figure>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide5"></Link>
            <Link href="#slide2"></Link>
          </div>
        </div>

        <div id="slide2" className="relative w-full carousel-item">
          <figure className="relative w-full overflow-hidden h-96 rounded-xl">
            <Image
              src="/slide2.jpeg"
              alt="banner2"
              sizes="100%"
              fill
              priority
              className="object-cover"
            />
          </figure>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide1"></Link>
            <Link href="#slide3"></Link>
          </div>
        </div>

        <div id="slide3" className="relative w-full carousel-item">
          <figure className="relative w-full overflow-hidden h-96 rounded-xl">
            <Image
              src="/slide3.jpeg"
              alt="banner3"
              sizes="100%"
              fill
              priority
              className="object-cover"
            />
          </figure>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide2"></Link>
            <Link href="#slide4"></Link>
          </div>
        </div>

        <div id="slide4" className="relative w-full carousel-item">
          <figure className="relative w-full overflow-hidden h-96 rounded-xl">
            <Image
              src="/slide4.jpeg"
              alt="banner4"
              sizes="100%"
              fill
              priority
              className="object-cover"
            />
          </figure>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide3"></Link>
            <Link href="#slide5"></Link>
          </div>
        </div>

        <div id="slide5" className="relative w-full carousel-item">
          <figure className="relative w-full overflow-hidden h-96 rounded-xl">
            <Image
              src="/slide5.jpeg"
              alt="banner5"
              sizes="100%"
              fill
              priority
              className="object-cover"
            />
          </figure>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide4"></Link>
            <Link href="#slide1"></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
