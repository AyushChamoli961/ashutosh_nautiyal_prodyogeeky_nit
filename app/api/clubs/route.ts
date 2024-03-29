import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"
export  async function POST(req: Request) {

    const { name , description}  = await req.json();

    // const user = await currentProfile();

    // if(!user){
    //     return redirectToSignIn()
    // }

    try{
        if(!name ){
            return new NextResponse("Name is required", {status: 400});
        }

        const club = await db.club.create({
            data: {
                name,
                description,
            
            }
        });

        return  NextResponse.json(club)

    }
    catch(e){
        console.log(e);
        NextResponse.json({error: 'Something went wrong'});
    }


}

export async function GET(req: Request) {
    const clubs = await db.club.findMany();
    return NextResponse.json(clubs);
}


