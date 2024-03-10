import { db } from "@/lib/db";
import { NextResponse } from "next/server"



export  async function GET(req: Request) {

    const { clubId }  = await req.json();

    
    // const user = await currentProfile();

    // if(!user){
    //     return redirectToSignIn()
    // }

    console.log("the club id is " , clubId);
    

    if(!clubId ){
        return new NextResponse("Please select the club", {status: 400});
    }
    
    try{

        const events = await db.event.findMany({
            where: {
                clubId
            }
        });

        return  NextResponse.json(events);

    }
    catch(e){
        console.error(e);
        NextResponse.json({error: 'Something went wrong'});
    }

}





