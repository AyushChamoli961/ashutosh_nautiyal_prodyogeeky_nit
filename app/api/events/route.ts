import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"

export  async function POST(req: Request) {

    const { name, date, location, clubId }  = await req.json();


    // const user = await currentProfile();

    // if(!user){
    //     return redirectToSignIn()
    // }

    try{
        if(!name ){
            return new NextResponse("Name is required", {status: 400});
        }
        if(!date ){
            return new NextResponse("date is required", {status: 400});
        }
        if(!location ){
            return new NextResponse("location is required", {status: 400});
        }
        if(!clubId ){
            return new NextResponse("Please select the club", {status: 400});
        }

        const event = await db.event.create({

            data: {
                name,
                date,
                location,
                clubId
            }
        });

        return  NextResponse.json(event)

    }
    catch(e){
        console.error(e);
        NextResponse.json({error: 'Something went wrong'});
    }


}


export  async function GET(req: Request) {

    // const { clubId }  = await req.json();

    
    // const user = await currentProfile();

    // if(!user){
    //     return redirectToSignIn()
    // }

    try{
        // if(!clubId ){
        //     return new NextResponse("Please select the club", {status: 400});
        // }
        

        const events = await db.event.findMany({
            // where: {
            //     clubId
            // }
        });

        return  NextResponse.json(events);

    }
    catch(e){
        console.error(e);
        NextResponse.json({error: 'Something went wrong'});
    }

}




