
import 'tailwindcss/tailwind.css'
import '../styles/style.css'
import Layout from '../comps/layout'




function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-black'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
