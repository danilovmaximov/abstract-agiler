import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {OPTIONS} from "@/app/api/auth/[...nextauth]/route";
import {prisma} from "@/db";

export async function GET(req: Request) {
    const session = await getServerSession(OPTIONS);
    if(session) {
        const projects = await prisma.user.findFirst({
            where: { email: session?.user?.email } as any
        }).projects();

        return NextResponse.json({projects: projects});
    }
    return NextResponse.json({message: "Fuck you"})
}

export async function POST(req: Request) {
    const session = await getServerSession(OPTIONS);
    if(session) {
       console.log(req.body)
    }
}