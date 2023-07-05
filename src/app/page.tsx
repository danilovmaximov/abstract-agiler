export default function Home() {

    return (
        <main>
            <div>
                <h1>Agiler app {process.env.BUILD}</h1>
                <span>
          Collaboration app for fast and agile iteration.
        </span>
                <ul>

                    <li>
                        <a href="/agiler">Go to client</a>
                    </li>
                    <li>

                        <a href="/test">Go to test</a>
                    </li>

                </ul>
            </div>
        </main>
    )
}
