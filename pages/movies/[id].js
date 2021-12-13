import Link from 'next/link'
import Head from 'next/head'

export const getStaticPaths = async () => {
    const res = await fetch('https://yts.mx/api/v2/list_movies.json')
    const movie = await res.json()


    const paths = movie.data.movies.map(todo => {
        return {
            params: { id: todo.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id
    console.log("id of itrm in", id)
    const res = await fetch('https://yts.mx/api/v2/movie_details.json?movie_id=' + id)
    const movie = await res.json()
    console.log("🚀 ~ file: [id].js ~ line 26 ~ getStaticProps ~ movie", movie)

    return {
        props: { Todo: movie }
    }
}




export default function Details({ Todo }) {


    return (
        <>
            <Head>
                <title>Netflix | {Todo.data.movie.title_english}</title>

                <meta name="title" content={Todo.data.movie.title_english} />
                <meta name="description" content="Watch HD Movies online and Stream latest tv-series, Over 200000 videos to stream in HD with English and Spanish subtitle. Join Netflix today to begin watching movies online" />
                <meta name="keywords" content="free movies streaming, watch movies online, watch tv-series, full hd movies online, free tv-series online, watch hd movies free, watch series online, watch the walking dead online, watch prison break online, watch family guy online" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="360 days" />
                <meta name="author" content="facebook" />
            </Head>
            <main className="bg-black">
                <div className="container px-3 ">

                    <div className="grid md:grid-cols-2 grid-col-1 gap-4">
                        <div className="">
                            <img src={Todo.data.movie.large_cover_image} alt="movies-detail" />
                        </div>

                        <div className="">
                            <h2 className="movie-detail-heading pt-4">{Todo.data.movie.title_english}</h2>
                            <p className="movieDetail-year pt-4">{Todo.data.movie.year} </p>
                            <p className="movieDetail-category pt-4">{Todo.data.movie.genres}</p>

                            <p className="movieDetail-summary pt-4">{
                                Todo.data.movie.description_intro
                            }
                            </p>


                            <div className="grid  grid-cols-2 gap-4 pt-8">

                                {Todo.data.movie.torrents.map((todo, index) => (

                                    <Link key={index} href={todo.url}>
                                        <div className="">
                                            <button
                                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                                </svg>
                                                <span>{todo.quality}</span>
                                            </button>
                                        </div>
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </div>


                    <div className="grid  grid-col-1 pt-8">

                        <h4 className="movie-description pt-4">description</h4>

                        <p className="movieDetail-summary pt-4">{Todo.data.movie.description_full}
                        </p>

                    </div>

                </div>



            </main>
        </>
    )
}
