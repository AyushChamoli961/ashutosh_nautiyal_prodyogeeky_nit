import { db } from "@/lib/db";
import { NextResponse } from "next/server"
export  async function POST(req: Request) {

    const { name }  = await req.json();

    try{
        if(!name ){
            return NextResponse.json({error: 'Please fill in all fields'});
        }

        const club = await db.club.create({
            data:{
                name,
            }
        });

        return  NextResponse.json(club)

    }
    catch(e){
        console.error(e);
        NextResponse.json({error: 'Something went wrong'});
    }


}
