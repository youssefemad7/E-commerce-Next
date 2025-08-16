import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <div className="flex justify-between px-[5%] py-10 mt-[3%] mb-[6%] pl-[13%]">
        <div>
          Home / <span className="font-bold">404 Error</span>
        </div>
      </div>
      <h1 className="text-[6rem] font-bold">404 Not Found</h1>
      <p className="mb-5">Your visited page not found. You may go home page.</p>
      <Link
        href="/"
        className="inline-block bg-red-500 text-background px-6 py-3 text-lg mt-5"
      >
        Back to home page
      </Link>
    </main>
  );
}

export default NotFound;
