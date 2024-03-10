import { InitialProfile } from "@/lib/initial-profile";
import { SignUp } from "@clerk/nextjs";
 
export default async function Page() {
  const user = await InitialProfile()

  console.log(user)
  return <SignUp />;
}