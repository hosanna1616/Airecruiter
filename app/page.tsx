import Contact from "../Components/Home/Contact"
import {Navbar} from "@/Components/Layout/Navbar"
import { Footer } from "@/Components/Layout/Footer"
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
       <Contact />
     <Footer />
    </main>
  )
}
