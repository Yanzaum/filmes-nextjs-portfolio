import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Sobre({author}) {
  return (
    <div>
      <Head>
        <title>Yan Filmes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="container mx-auto">
        <div class="flex h-screen justify-center items-center">
          <div class="text-center">
              <h1 class="text-center text-5xl text-purple-600 my-5 uppercase font-black">Sobre o sistema</h1>
              <p class="text-xl">O sistema foi feito por <a className="underline" href="https://www.linkedin.com/in/yanzaum/" target="_blank">{author}</a> para demonstrar um pouco das habilidades com o framework Next.JS</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      author: 'Yan David'
    }
  }
}
