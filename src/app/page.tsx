import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  )
}
