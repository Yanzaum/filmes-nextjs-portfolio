import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home({list}) {
  return (
    <div>
      <Head>
        <title>Yan Filmes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="container mx-auto">

        <h1 className="text-center text-5xl text-purple-600 my-5 uppercase font-black">
          Abaixo alguns filmes em destaque
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3">
            {list.map(item=> (
              <li className="list-none mx-2 lg:mx-8 mb-8 bg-gray-300 rounded-lg overflow-hidden lg:shadow-2xl" key={item}>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className="" alt={item.title} />
                <div className="p-4">
                  <h5 className="">{item.title}</h5>
                  <p className=""><small className="">Lançado em {item.release_date}</small></p>
                  <a href={`/movie/${item.id}`} className="no-underline hover:underline">Ler mais</a>
                </div>
              </li>
            ))}
        </div>

      </main>

      <Footer />

      <style jsx global>{`

      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending')
  const json = await res.json()

  return {
    props: {
      list: json.list
    }
  }
}
