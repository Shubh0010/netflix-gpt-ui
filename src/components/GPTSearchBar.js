const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="grid grid-cols-12">
        <input
          type="text"
          className="m-4 p-4 col-span-8 rounded-md"
          placeholder="what do you want to watch today?"
        />
        <button
          className="m-4 py-2 px-4 rounded-lg bg-red-700 text-white col-span-2 "
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default GPTSearchBar