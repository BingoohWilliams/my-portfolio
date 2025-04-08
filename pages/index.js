import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
      <Head>
        <title>William Soko | Software Developer</title>
        <meta name="description" content="Portfolio website of William Soko" />
      </Head>

      <main className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">William Soko</h1>
        <p className="text-xl text-center text-gray-600 mb-6">
          ICT student and aspiring software developer. Learning to build modern web apps using AI.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
          <ul className="space-y-4">
            <li>
              <a href="https://github.com/yourusername/yourproject1" className="text-blue-500 hover:underline">Project 1: React App</a>
              <p className="text-gray-600">Description of your project.</p>
            </li>
            <li>
              <a href="https://github.com/yourusername/yourproject2" className="text-blue-500 hover:underline">Project 2: Next.js Blog</a>
              <p className="text-gray-600">Description of your project.</p>
            </li>
          </ul>
        </section>

        <footer className="text-center text-gray-500 text-sm">
          <p>Contacts:</p>
          <p>Email: williamsoko03@email.com</p>
          <P>Phone: +265 987 33 66 83</P>
        </footer>
      </main>
    </div>
  );
}
