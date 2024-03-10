"use client";

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


const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is Required",
  }),
  description: z.string().min(1, {
    message: "description is Required",
  }),
});


export const CreateClubModal = () => {
  
  
  const { isOpen, onClose, type, data } = useModal();

  const router = useRouter();



  const isModalOpen = isOpen && type === "createClub";
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:  {
      name: "",
      description: ""
    }
  });



  

  const isLoading = form.formState.isSubmitting;
  

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
    await axios.post(`/api/clubs`, values)
    toast.success("Club Created")
    router.refresh();
    handleClose();   
  } catch (error) {
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
            Create a club
          </DialogTitle>
        </DialogHeader>
        <ScrollArea>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
               <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
                    >
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter Name for Club"
                        {...field}
                        type="text"
                        
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
                    >
                       Description
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter description"
                        {...field}
                        type="text"
                        
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button className="mt-10"  disabled={isLoading}>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>

    
  )
}
