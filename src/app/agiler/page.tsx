import {useSession} from "next-auth/react";

export default function Dashboard() {
        const session = useSession()
        return <div>
                {JSON.stringify(session)}
        </div>
}
