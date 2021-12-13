import Head from 'next/head'
import MainBanner from '../comps/mainBanner'

export default function Home() {
  return (
    <div className="bg-black">

      <Head>
        <title>Netflix | Free movies streaming, watch movies online</title>
        <meta name="title" content="Netflix - Free movies streaming, watch movies online" />
        <meta name="description" content="Watch HD Movies online and Stream latest tv-series, Over 200000 videos to stream in HD with English and Spanish subtitle. Join Netflix today to begin watching movies online" />
        <meta name="keywords" content="free movies streaming, watch movies online, watch tv-series, full hd movies online, free tv-series online, watch hd movies free, watch series online, watch the walking dead online, watch prison break online, watch family guy online" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="360 days" />
        <meta name="author" content="facebook" />
      </Head>


      <main >

        <div className="container sm:container mx-auto ">

          <MainBanner />

          <div className="grid gap-4 grid-cols-2 my-8 ">
            <div className="topies-heading p-2">Latest Movies</div>
            <div className="see-All p-2">See All</div>
          </div>

          <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-1 ">
            <div>
              <img src="https://img.yts.mx/assets/images/movies/encounter_2021/large-cover.jpg" />
            </div>

            <div>
              <img src="https://img.yts.mx/assets/images/movies/encounter_2021/large-cover.jpg" />
            </div>

            <div>
              <img src="https://img.yts.mx/assets/images/movies/encounter_2021/large-cover.jpg" />
            </div>

            <div>
              <img src="https://img.yts.mx/assets/images/movies/encounter_2021/large-cover.jpg" />
            </div>
          </div>


        </div>
      </main>
    </div>
  )
}
