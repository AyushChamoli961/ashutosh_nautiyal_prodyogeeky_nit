import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"
export  async function POST(req: Request) {

    const { name }  = await req.json();

    console.log("hellop", name)

    const user = await currentProfile();

    if(!user){
        return redirectToSignIn()
    }

    try{
        if(!name ){
            return new NextResponse("Name is required", {status: 400});
        }

        const club = await db.user.update({
            where: {
                userId: user.userId
            },
            data:{
                clubName: name,
            }
        });

        return  NextResponse.json(club)

    }
    catch(e){
        console.error(e);
        NextResponse.json({error: 'Something went wrong'});
    }


}
