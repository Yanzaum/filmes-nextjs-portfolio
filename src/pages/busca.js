import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Busca({}) {

  const [searchText, setSearchText] = useState('')
  const [movieList, setMovieList] = useState([])
  const router = useRouter()

  const handleSarch = async () => {
    if (searchText !== '') {
      const result = await fetch(`${router.basePath}/api/search?q=${searchText}`)
      const json = await result.json()
      setMovieList(json.list)
    }
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Yan Filmes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="container mx-auto mt-4">
        <div className="flex items-center max-w-md mx-auto mb-5 bg-white rounded-full w-full border border-black">
          <input type="text" onChange={e=>setSearchText(e.target.value)} className="bg-white w-full px-4 py-1 text-black rounded-full outline-none" placeholder="Insira o nome do filme aqui" />
          <button type="button" onClick={handleSarch} className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3">
          {movieList.map(item=>(
            <li className="list-none mx-2 lg:mx-8 mb-8 bg-gray-300 rounded-lg overflow-hidden lg:shadow-2xl">
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className="" alt={item.title} />
              <div className="p-4">
                <h5 className="uppercase">{item.title}</h5>
                <p className=""><small className="">Lançado em {item.release_date}</small></p>
                <a href={`/movie/${item.id}`} className="no-underline hover:underline">Ler mais</a>
              </div>
            </li>
          ))}
        </div>

      </main>

      <Footer />
      
    </div>
  )
}
