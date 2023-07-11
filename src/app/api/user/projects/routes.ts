import {prisma} from "@/db";
import {getSession} from "next-auth/react";
import {NextResponse} from "next/server";

export async function GET(req: Request, res: Response) {
    const session = await getSession({req} as any);
    console.log(session);
    NextResponse.json({message: "good"})
}
