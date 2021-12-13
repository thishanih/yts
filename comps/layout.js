import Navbar from '../comps/navbar'
import 'tailwindcss/tailwind.css'

export default function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />
            {children}
        </div>
    )
}
