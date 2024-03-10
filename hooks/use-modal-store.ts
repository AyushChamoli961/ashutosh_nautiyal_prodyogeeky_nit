
import {create} from "zustand"
import { RowModel } from "@tanstack/react-table";
import { Club , User} from "@prisma/client";


export type ModalType = "createClub" | "createEvent"

interface ModalData{
    club? : Club
    user? : User
}

interface ModalStrore{
    type: ModalType | null
    isOpen:  boolean
    data: ModalData
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStrore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({isOpen: true, type, data}),
    onClose: () => set({type: null, isOpen: false})
}))