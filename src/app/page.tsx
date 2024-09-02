import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Historical Figure Quiz</title>
        <meta
          name="description"
          content="Discover which historical figure you resemble the most!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-center items-center h-[80px]">
          <h1 className="text-4xl font-bold">Historical Figure Quiz</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 text-center flex-grow flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          What Historical Figure Are You?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Imagine you were born 300 years ago. Are you a prince? A king? A
          samurai? Take this quiz to find out and see which historical figure
          you resemble the most!
        </p>
        <Link href="/quiz">
          <button className="bg-blue-600 text-white py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-xl font-semibold">
            Start Quiz
          </button>
        </Link>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Mason Wong CityU. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
