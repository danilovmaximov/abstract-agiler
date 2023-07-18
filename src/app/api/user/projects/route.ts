import {prisma} from "@/db";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {OPTIONS} from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: Request) {
    const session = await getServerSession(OPTIONS);
    if(session) {
        console.log(session);
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
        console.log(session)
        console.log(req.body)
        // const User = prisma.project.create({
        //     data: {
        //         name: "New Project Test",
        //         description: "new project test description",
        //     }
        // });
    }
}