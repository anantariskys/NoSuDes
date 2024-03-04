import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Rekomendasi = ({id}) => {
  const [data,setData] =useState([])
  const [isLoading,setIsLoading]=useState(true)



  useEffect(() => {

    const fetchData = async()=>{
      try {
        setIsLoading(true)
        const response = await axios.get('https://aws.dvnnfrr.my.id/articles')
        const filteredData = response.data.data.filter((item)=>item.id!==id)
        setData(filteredData)

        setTimeout(() => {
          setIsLoading(false)
        }, 500);

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])
  



  return (
    <div className="w-4/5 mx-auto gap-5 flex pb-20 ">
    {data.slice(0, 4).map((item, index) => (
      <Link to={`/artikel/${item.id}`} key={item.id}>
      <div className="card min-w-64 aspect-[4/5] bg-base-100 relative hover:-translate-y-1 duration-300 ease-in-out transition-transform " style={{ backgroundImage: `url(${item.photo})`, backgroundSize: "cover" ,backgroundRepeat:'no-repeat'}}>
        <div className="w-full h-1/4 px-3 items-center absolute font-Poppins rounded-b-xl text-primary-500 bg-neutral-300 bottom-0 left-0 opacity-75 flex">
          <h3 className="w-5/6  font-semibold text-sm ">{item.title}</h3>
          <FontAwesomeIcon icon={faArrowRight} size="2x" />
        </div>
      </div>
      </Link>
    ))}
  </div>
);
    }

export default Rekomendasi