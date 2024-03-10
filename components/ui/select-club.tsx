import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { db } from "@/lib/db"

export async function SelectClub() {

    const clubs = await db.club.findMany()


  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        {
            clubs.map((club) => (
                <SelectItem  key = {club.id} value={club.id}>{club.name}</SelectItem>
               
            ))
        }
      </SelectContent>
    </Select>
  )
}
