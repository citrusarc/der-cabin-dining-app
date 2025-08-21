export default function HomePage() {
  return (
    <>
      <div
        className="hidden md:flex items-center justify-center h-screen w-screen bg-zinc-900 overflow-hidden"
        style={{
          backgroundImage: "url('/Images/bg-brand-logo.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "120px auto",
        }}
      >
        <div className="w-[460px] h-[880px]">
          <iframe
            src="child"
            title="Der Cabin Dining App"
            className="w-full h-full rounded-2xl"
            allowFullScreen
          />
        </div>
      </div>

      <div className="md:hidden w-full h-screen bg-zinc-900">
        <iframe
          src="child"
          title="Der Cabin Dining App"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    </>
  );
}
