"use client"

import { useEffect, useState } from "react"
import { CreateClubModal } from "../modals/create-club";
import { SelectClub } from "../ui/select-club";

import { CreateEvent } from "../modals/create-event";

export const ModalProvider = () => {
    const [isMounted,  setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted){
        return null;
    }
    return(
        <>
            <CreateClubModal/>
            <CreateEvent/>
        </>
    )
}