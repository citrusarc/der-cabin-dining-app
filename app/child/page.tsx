import Image from "next/image";

export default function ChildHomePage() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-row p-6 gap-6 w-full items-center  rounded-2xl bg-zinc-900">
        <Image
          src="/Images/brand-logo.png"
          alt="Brand Logo"
          height={72}
          width={72}
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Der&apos; Cabin Bistro</h1>
          <p className="text-lg text-yellow-500">Comfort food, cozy moments</p>
        </div>
      </div>
      <div>Filter</div>
    </div>
  );
}
