import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('https://yts.mx/api/v2/list_movies.json')
    const data = await res.json()

    return {
        props: { movie: data }
    }
}



export default function DisplayMovie({ movie }) {

    return (
        <>
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




            <main className="bg-black">
                <div className='container '>
                    <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-1 px-2 pb-4">

                        {movie.data.movies.map((todo, key) => (

                            <Link key={todo.id} href='/movies/[id]' as={`/movies/${todo.id}`}>
                                <a>
                                    <div>
                                        <img src={todo.large_cover_image} alt='movie' />
                                        <h3 className='movieTopies p-2'>{todo.title}</h3>
                                    </div>
                                </a>
                            </Link>
                        ))}

                    </div>
                </div >
            </main>
        </>

    )
}
