'use client'
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
interface AddClubEventProps {
    data : any
}
const AddClubEvent = (
    {data} : AddClubEventProps
) => {
    const {onOpen} = useModal();

    return ( 
        <div className="ml-auto flex items-center space-x-4">
          <Button onClick={() => onOpen("createClub")}>
              Add Club
            </Button>
            <Button onClick={() => onOpen("createEvent", {data})}>
              Add Events
            </Button>
        </div>
     );
}

export default AddClubEvent;
 
