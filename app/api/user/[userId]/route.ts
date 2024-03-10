import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
     { params }: { params: { userId: string } }
)

{  
  try{ 
    const { role } = await req.json();


    const discussion  = await db.user.update({
        where:{
            id: params.userId
        },
        data:{
            role
        }
})
      
      return NextResponse.json(discussion);
  } catch (error) {
    console.log("DISCUSSION_PATCH", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}