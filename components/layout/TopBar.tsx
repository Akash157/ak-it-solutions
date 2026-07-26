import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden border-b bg-slate-950 text-sm text-white lg:block">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-8">

          <a
            href="tel:+923054353729"
            className="flex items-center gap-2 hover:text-[#39D353]"
          >
            <Phone size={15} />
            0305 4353729
          </a>

          <a
            href="mailto:contact@ak-it-sol.com"
            className="flex items-center gap-2 hover:text-[#39D353]"
          >
            <Mail size={15} />
            contact@ak-it-sol.com
          </a>

          <div className="flex items-center gap-2">
            <MapPin size={15} />
            Henry K Colony, Gulberg III, Lahore
          </div>

        </div>

        <Link
          href="https://web.facebook.com/AKITSolution"
          target="_blank"
          className="font-medium hover:text-[#39D353]"
        >
          Facebook
        </Link>

      </div>
    </div>
  );
}