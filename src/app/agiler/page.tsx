"use client"
import {useSession} from "next-auth/react";

export default function Dashboard() {
        // User session hook to get data about user session.
        const { data } = useSession()

        if(!data?.user) {
               return <div>Loading...</div>
        }

        console.log(data.user);
        return <div>
                {JSON.stringify(data.user)}
        </div>
}
