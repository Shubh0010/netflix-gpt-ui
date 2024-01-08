
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 px-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:opacity-75">
        ▶️ Play
        </button>
        <button className="bg-gray-400 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle