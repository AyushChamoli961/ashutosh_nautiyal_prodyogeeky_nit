import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"

export  async function POST(req: Request) {

    const { name, date, location, club, description }  = await req.json();



    try{

        console.log(name, date, location, club, description)



        const event = await db.event.create({

            data: {
                name,
                date,
                location,
                clubId: club,
                description
            }
        });

        return  NextResponse.json(event)

    }
    catch(e){
        console.log(e);
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




