import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function MovieItem({info}) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Yan Filmes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="container mx-auto">
        <h1 className="text-center text-3xl text-black mt-5 uppercase font-black">
          {info.title}
        </h1>

        <div className="flex items-center justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <p className="text-center text-yellow-300 text-3xl">{info.vote_average}</p>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-10">
          <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} className="rounded lg:max-w-5xl" alt={info.title} />
          <p className="mt-4 text-center text-xl">{info.overview}</p>
        </div>

      </main>
      
      <Footer />

    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://${context.req.headers.host}/api/movie/${context.params.id}`)
  const json = await res.json()

  return {
    props: {
      info: json.info
    }
  }
}
