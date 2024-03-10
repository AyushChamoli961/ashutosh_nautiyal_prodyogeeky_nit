"use client"

import { ColumnDef, FilterFn } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CellAction } from "./cell-action"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"
import { Role } from "@prisma/client"




export type LeadCloumn = {
  id: string | null
  name: string
  email : string
  role: Role
  
}

  const cities = ['Agra', 'Ajmer', 'Aligarh', 'Alwar', 'Bahror', 'Bansur', 'Beawar', 'Bhadra', 'Bhartapur', 'Bhilwara', 'Bikaner', 'Bundi', 'Churu', 'Dausa', 'Deedwana', 'Durgapur', 'Etawa', 'Fatehpur', 'Firozabad', 'Ganganagar', 'Gangapur', 'Gangapur', 'Hanumangarh', 'Hindone', 'Jhalawad', 'Jhujhunu', 'Jodhpur', 'Karoli', 'Kishangarh', 'Kota', 'Kotputti', 'Makrana', 'Mathura', 'Merta City', 'Nagaur', 'Narnaul', 'Neem ka thana', 'Nohar', 'Pali', 'Ratangarh', 'Saradarshahar', 'Shahpura', 'Sikar', 'Sojat', 'Suzargarh', 'Udaipur'];



const selectFilterFn : FilterFn<any> = (row, columnId, value, addMeta) => {
  if (value === undefined || value.length === 0) {
    return false;
  } else {
    const { someProp, otherProp } = mapOrConvertBackLabel(value);
    return someProp.includes(row.original.status?.someProp) && otherProp .includes(row.original.status?.otherProp );
  }
};
export const columns: ColumnDef<LeadCloumn>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
    
  {
    accessorKey: "name",
    header: "Name",
  },
   {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role"
  }
  ,
  {
    id: "actions",
    cell : ({row}) => <CellAction data={row.original}/>
  }
   

];

function mapOrConvertBackLabel(value: any): { someProp: any; otherProp: any } {
  throw new Error("Function not implemented.")
}
