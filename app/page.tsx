import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is John Steven nicknamed Steve!</h1>
      <p>
        I am a third-year BSIT student at the Mater Dei College. 
        I am eager to learn about system development. 
        And I want to experience web development, mobile app development, and machine learning.
      </p>
      <Link href="/projects">See my projects</Link>
    </main>
  );
}