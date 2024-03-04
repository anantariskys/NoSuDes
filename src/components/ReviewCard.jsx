import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const ReviewCard = ({photo,name,username,review,date,id}) => {
    const [isLike,setIsLike]=useState(true)
    const handleLike = async()=>{
        try {
            if (isLike) {
                const response = await axios.post(`https://aws.dvnnfrr.my.id/reviews/likes/${id}`,{
                    headers: {
                        Authorization: `Bearer : ${window.localStorage.getItem("token")}`,
                      },
                })
                console.log(response)
            }else{

                const response =await axios.delete(`https://aws.dvnnfrr.my.id/reviews/likes/${id}`,{
                    headers: {
                        Authorization: `Bearer : ${window.localStorage.getItem("token")}`,
                    },
                })
                console.log(response)
                
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={`card card-compact w-96 ${photo!==""?"h-auto":"h-auto"}bg-base-100 border border-neutral-400 `}>
    {photo !=="" && (
      <figure className="relative">
        <label onClick={handleLike} className="swap absolute top-2 right-2 h-14 aspect-square rounded-full bg-neutral-100">
          <input type="checkbox" className="hidden" />

          <FontAwesomeIcon className="swap-off fill-current text-error-700" size="2x" icon={faHeart} />

          <FontAwesomeIcon className="swap-on fill-current text-error-700" size="2x" icon={faHeartSolid} />
        </label>
        <img src={photo} className="w-full object-cover aspect-square" alt="ini gambar" />
      </figure>
    )}
    <div className="card-body font-Poppins text-secondary-300">
      <div className="flex justify-between ">
        <div className="flex justify-start w-1/2 items-center gap-2">
          <img className="rounded-full w-1/5 aspect-square " src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          <p>{username}</p>
        </div>
        {photo !=="" ? (
          <div className="flex items-center gap-2">
            <FontAwesomeIcon size="1x" icon={faLocationDot} />
            <p className="w-full">{name}</p>
          </div>
        ) : (
          <label onClick={handleLike} className="swap absolute top-2 right-2 h-8 aspect-square rounded-full bg-neutral-100">
            <input type="checkbox" className="hidden" />
            <FontAwesomeIcon className="swap-off fill-current text-error-700" size="2x" icon={faHeart} />
            <FontAwesomeIcon className="swap-on fill-current text-error-700" size="2x" icon={faHeartSolid} />
          </label>
        )}
      </div>
      <p>{review}</p>
      <p>{date}</p>
    </div>
  </div>
  )
}

export default ReviewCard