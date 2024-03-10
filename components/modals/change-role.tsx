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
import { useParams, useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";

import { ScrollArea } from "../ui/scroll-area";
import toast from "react-hot-toast";
import { Role } from "@prisma/client";


const formSchema = z.object({
  role: z.string()
});


export const ChangeRole = () => {
  
  
  const { isOpen, onClose, type, data } = useModal();

  const router = useRouter();



  const isModalOpen = isOpen && type === "changeRole";
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:  {
      role: ""
    }
  });



  

  const isLoading = form.formState.isSubmitting;
  

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      await axios.post(`/api/role/`, values)
      toast.success("Event Created")
      router.refresh();
      handleClose();   
    
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


    
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create an Event
          </DialogTitle>
          
        </DialogHeader>
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
                    <SelectValue placeholder="Select a Club" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
            (Object.keys(Role) as Array<keyof typeof Role>).map((role) => (
                <SelectItem  key = {role} value={role}>{role}</SelectItem>
               
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
      </DialogContent>
    </Dialog>

    
  )
}