import Link from "next/link"
export default function FirstPost() {
    return <h1>

        hello{' '}
        <Link href="/">
            <a>this page!</a>
        </Link>
    </h1>
}
