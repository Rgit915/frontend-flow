import developerImage from "./assets/images/developer.png";
import pcIcon from "./assets/images/pc-icon.png"


const App = () => {


  return (
    <>
<header>
    <div className="container min-h-screen bg-indigo-950 text-white px-28 py-5 relative">
      <nav className="flex items-center">
      <a href="#" className="flex items-center space-x-2">
      <img src={pcIcon} className="w-8 h-8 cursor-pointer rounded-full" alt="PC Icon" />
      <span className="text-xl font-semibold font-great-vibes">Frontend Flow</span>
    </a>

        <ul className="flex-1 text-center">
          <li className="list-none inline-block px-5"><a href="#" className="no-underline px-2">Home</a></li>
          <li className="list-none inline-block px-5"><a href="#" className="no-underline px-2">About</a></li>
          <li className="list-none inline-block  px-5"><a href="#" className="no-underline px-2">Projects</a></li>
          <li className="list-none inline-block  px-5"><a href="#" className="no-underline px-2">Contact</a></li>
        </ul>

      </nav>

      <div className="mt-48 max-w-xl">
        <h1 className="text-6xl font-semibold leading-normal"> Frontend <span className="font-light">Flow</span> </h1>
        <p>Below are the projects I've worked on for the Frontend Friday Challenge by Women Who Code. These projects showcase my frontend skills.</p>

        <div className="mt-10">
          <a href="#"
            className="bg-indigo-400 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-indigo-300 hover:text-white duration-300 hover:border border border-transparent">Read more...</a>
          </div>

      </div>
      <img src={developerImage}className="w-full xl:w-1/2 xl:absolute bottom-0 right-20" alt="Developer Image"/>
    </div>
    <main>
    <div className="grid grid-cols-2 gap-10 p-5 min-[400px]:grid-cols-3">
      <div className="w-full  aspect-video shadow-[0_0_10px_indigo] relative " ><span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg">Task #001</span><img src={pcIcon} alt="PC Icon"/></div>
      <div className="w-full  aspect-video shadow-[0_0_10px_indigo]"><span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg ">Task #002</span><img src={pcIcon} alt="PC Icon"/></div>
      <div className="w-full  aspect-video shadow-[0_0_10px_indigo]"><span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg">Task #003</span><img src={pcIcon} alt="PC Icon"/></div>
      <div className="w-full  aspect-video shadow-[0_0_10px_indigo]"><span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg">Task #004</span><img src={pcIcon} alt="PC Icon"/></div>
      <div className="w-full  aspect-video shadow-[0_0_10px_indigo]"><span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg">Task #005</span><img src={pcIcon} alt="PC Icon"/></div>
      <div className="w-full  aspect-video shadow-[0_0_10px_indigo]"><span className="absolute p-2 bg-indigo-950 text-white rounded-br-lg">Task #006</span><img src={pcIcon} alt="PC Icon"/></div>
    </div>

  </main>
  <footer>
  <div className="text-center text-sm mt-4 text-indigo-950 py-8 font-bold">
      Coded by <a href="https://www.linkedin.com/in/rora-alem" className=" underline hover:text-indigo-500">Rora Alem</a>
    </div>
  </footer>

  </header>

    </>
  )
}

export default App
