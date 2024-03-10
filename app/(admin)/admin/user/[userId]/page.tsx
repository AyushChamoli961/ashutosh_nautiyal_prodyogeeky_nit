"use client";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {format} from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect, useParams, useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";

import { ScrollArea } from "@/components/ui/scroll-area";
import toast from "react-hot-toast";
import { db } from "@/lib/db";
import { Router } from "next/router";
interface changeRoleProps {
    params:{
        userId: string;
    }
}

const formSchema = z.object({
  role: z.string()
});


const role = ["President", "Vice president", "Secretary"]

const ChangeRole = ( {params} : changeRoleProps)  => {
  
  
  const { isOpen, onClose, type, data } = useModal();




  const isModalOpen = isOpen && type === "changeRole";
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:  {
      role: ""
    }
  });


  const router = useRouter()
  

  const isLoading = form.formState.isSubmitting;
  

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      console.log(values)
      const update = await axios.patch(`/api/user/${params.userId}`, values)

      console.log(update)

      toast.success("role updated successfully")
      router.push('/admin/user')
      router.refresh()
    
    }
    catch(error){
      console.log(error);
      
    }
};
  

  const handleClose = () => {
    form.reset();
    onClose();
  }

  return (


    
  
        <ScrollArea>

          
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
               

              <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Club</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
            role.map((rol, index) => (
                <SelectItem key={index} value={rol}>{rol}</SelectItem>
               
            ))
        }
                </SelectContent>
              </Select>

            </FormItem>
          )}
        />

               
              
            </div>


            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button className="mt-10"  disabled={isLoading}>
                Update
              </Button>
            </DialogFooter>
          </form>
        </Form>
        </ScrollArea>


    
  )
}

export default ChangeRole