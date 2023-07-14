import Link from "next/link";

export default async function Home() {

    return (
        <div>
            <div>
                <h1>Agiler app {process.env.BUILD}</h1>
                <span>
          Collaboration app for fast and agile iteration.
        </span>
                <ul>
                    <li>
                        <Link href={"/agiler"}>Go to app</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
