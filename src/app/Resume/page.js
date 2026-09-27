export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white md:pl-20 pt-20 md:pt-0">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12 h-[calc(100vh-5rem)] md:h-screen flex flex-col">

        <div className="flex-1 rounded-xl overflow-hidden border border-gray-800 bg-gray-900/80 backdrop-blur-xl">
          <iframe
            src="/Roshan_Ganesh.pdf"
            className="w-full h-full"
            title="Resume"
          />
        </div>

      </div>
    </main>
  );
}