import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <Link 
        className="w-24 h-4 p-4 rounded-[9px] bg-white text-black text-center"
        href="/view-expenses"
      >
        View Expenses
      </Link>
    </div>
  );
}
