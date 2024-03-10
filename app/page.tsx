import { InitialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await InitialProfile();

  if(user) {
    return redirect('/home')
  }

  else{
    return redirectToSignIn()
  }

}
