import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        SMARTSHOPS
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
      SmartShops adalah platform e-commerce modern yang dirancang untuk memberikan pengalaman belanja online yang cerdas dan nyaman. Dengan antarmuka yang intuitif dan fitur-fitur canggih, SmartShops memudahkan pengguna menemukan produk favorit mereka dengan cepat dan efisien.
      
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}