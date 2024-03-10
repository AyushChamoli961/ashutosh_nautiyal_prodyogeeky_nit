
import { MainNav } from "@/components/admin/dashboard/main-nav";
import ThemeChanger from "@/components/Navbar/DarkSwitch";
import { db } from "@/lib/db";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import AddClubEvent from "./select-modal";

const Navbar =  async() => {

  const clubs = await db.club.findMany()

  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <AddClubEvent data={clubs}/>
      </div>
    </div>
  );
};
 
export default Navbar;