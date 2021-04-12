import { useRef } from 'react'
import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'

export default function Home() {

  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return;

    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen" >
      <Head>
        <title>Google</title>
        <link rel="icon" href="https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://media-exp1.licdn.com/dms/image/C5103AQFE74YaU-0acA/profile-displayphoto-shrink_200_200/0/1521792249204?e=1622678400&v=beta&t=Cc5IXcaFqMd6wMtQa1qt5gEadWImnLlV6SkK5Dxdc5I" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
          height={100} width={300}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input 
            ref={searchInputRef} 
            type="text" 
            className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 ml-3 text-gray-500" />
        </div>

        <div className="flex flex-col space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>

          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />

    </div>
  )
}
