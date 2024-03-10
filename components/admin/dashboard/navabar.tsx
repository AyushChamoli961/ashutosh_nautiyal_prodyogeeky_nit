'use client'
import { MainNav } from "@/components/admin/dashboard/main-nav";
import ThemeChanger from "@/components/Navbar/DarkSwitch";
import { db } from "@/lib/db";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";

const Navbar =  () => {

  
  const {onOpen} = useModal();
  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Button onClick={() => onOpen("createClub")}>
              Add Club
            </Button>
            <Button onClick={() => onOpen("createEvent")}>
              Add Events
            </Button>
          <ThemeChanger/>
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;