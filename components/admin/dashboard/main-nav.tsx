"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/admin`,
      label: "Overview",
      active: pathname === `/admin`,
    },
    {
      href: `/admin/patients`,
      label: "Patients",
      active: pathname === `/admin/patients`,
    },
    {
      href: `/admin/appointment`,
      label: "Appointments",
      active: pathname === `/admin/appointment`,
    },

    {
      href: `/admin/closeddate/kota`,
      label: "Kota",
      active: pathname === `/admin/closeddate/kota`,
    },
    {
      href: `/admin/closeddate/chennai`,
      label: "Chennai",
      active: pathname === `/admin/closeddate/chennai`,
    },
    {
      href: `/admin/closeddate/rajasthan`,
      label: "Rajasthan",
      active: pathname === `/admin/closeddate/rajasthan`,
    },
    {
      href: `/admin/closeddate/jaipur`,
      label: "Jaipur",
      active: pathname === `/admin/closeddate/jaipur`,
    }, {
      href: `/admin/youtube`,
      label: "Youtube",
      active: pathname === `/admin/youtube`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
