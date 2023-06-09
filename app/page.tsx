'use client'
import { useContext } from "react"
import { Data } from "./context"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Aside from "@/components/Aside"
import Link from "next/link"

const APP_ID: string = 'a97ace78'
const APP_KEY: string = '863bd860c767c75ee638af0ae2cc518c'

let a:string = `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`

export default function Page() {
  const {} = useContext(Data)
  // console.log(hi)

return <>
    <Header />
    <main>
      <section>
        <article>
          <div className="left">
            <h1>Lorem ipsum dolor sit amet.</h1>      
            <button>
              <Link href='/register'>Register now</Link>
            </button>
            <button>
              <Link href='/login'>Login</Link>
            </button>
          </div>
          <div className="right">
            <img 
            className="main-img" alt="pic" 
            src="https://picsum.photos/id/237/800/800" 
            />
          </div>
        </article>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
