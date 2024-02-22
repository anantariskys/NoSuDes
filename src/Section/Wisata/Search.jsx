import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Search = () => {
  return (
    <section className="py-16">
        <label className="input border-2 mx-auto w-1/2 border-primary-500 rounded-2xl  focus-within:border-primary-500 focus-within:outline-none   text-primary-500 flex items-center gap-2">
          <FontAwesomeIcon  icon={faSearch}/>
          <input type="text" className="grow border-none  focus:ring-0 focus:outline-none font-Poppins text-lg font-semibold placeholder-poppins " placeholder="Cari yang sesuai budget" />
        </label>
      </section>
  )
}

export default Search