import { UserButton } from "@clerk/nextjs";
import { Button } from "@repo/ui/button";
import { Bell } from "lucide-react";
import { SideBarMobile } from "./sidebar-mobile";

export function Header() {
  return (
    <header className="flex h-14 bg-muted/40 items-center gap-4 px-4 lg:h-[60px] lg:px-6 py-3">
      <SideBarMobile />
      <div className="ml-auto flex gap-4">
        <Button
          variant="outline"
          size="icon"
          className="ml-auto size-8 rounded-full"
        >
          <Bell className="size-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <UserButton />
      </div>
    </header>
  );
}
