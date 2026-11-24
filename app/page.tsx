import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello, my name is John Steven nicknamed Steve!</h1>
      <p className="mt-2">
        I am a third-year BSIT student at the Mater Dei College. 
        I am eager to learn about system development. 
        And I want to experience web development, mobile app development, and machine learning.
      </p>
      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}