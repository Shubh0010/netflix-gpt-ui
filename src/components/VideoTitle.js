
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-24 px-4
      md:pt-72 md:px-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video
    ">
      <h1 className="text-sm
        md:text-4xl font-bold
      ">{title}</h1>
      <p className="md:py-6 md:text-lg md:w-1/3 py-1
        w-full text-sm">{overview}</p>
      <div className="">
        <button className="bg-white text-black md:p-4 md:px-12 md:text-xl rounded-lg hover:opacity-75 px-4">
        ▶️ Play
        </button>
        <button className="bg-gray-400 text-white md:p-4 md:px-12 md:text-xl bg-opacity-50 rounded-lg mx-2 px-4">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle