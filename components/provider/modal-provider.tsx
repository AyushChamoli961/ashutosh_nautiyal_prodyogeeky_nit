"use client"

import { useEffect, useState } from "react"
import { CreateClubModal } from "../modals/create-club";

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
        </>
    )
}