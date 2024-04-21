import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center text-5xl px-2 pb-4">
        <span>SEEMS LIKE</span>
        <span>YOU GOT LOST :( </span>
      </div>
      <p className="px-2 pb-4">404 Error. The page you’re looking for does not exist.</p>
      <Link href="/"><button aria-label="Return Home"  className="py-3 px-5">Return Home</button></Link>
    </div>
  );
}
