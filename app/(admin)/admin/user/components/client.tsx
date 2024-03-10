"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


import { columns, LeadCloumn } from "./column";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
  data: LeadCloumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        
        <Button onClick={() => router.push(`/admin/adduser`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data}
      />

    </>
  );
};