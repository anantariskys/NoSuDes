import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "../../components/ReviewCard";

const Cerita = ({id}) => {
    const [active,setActive] = useState('cerita')

    const [data,setData] = useState([])

    useEffect(() => {

        fetchMyReview()
       
      
    
     
    }, [id,active])


    const fetchMyReview=async()=>{
        try {
            const response = await axios.get(`https://aws.dvnnfrr.my.id/reviews/${id}`)
            setData(response.data.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    

  return (
    <section className="w-full px-5 py-5">
      <div className="flex gap-5 font-Poppins">
        <div onClick={()=>{setActive('cerita')}} className={`${active==="cerita"?'bg-primary-300 rounded-lg text-baseColor-500':'text-primary-300'} py-1 font-semibold px-5 `}>Cerita anda</div>
        <div onClick={()=>{setActive('disukai')}} className={`${active==="disukai"?'bg-primary-300 rounded-lg text-baseColor-500':'text-primary-300'} py-1 font-semibold px-5 `}>Cerita yang disukai</div>
      </div>
    <div className="flex py-3 justify-center flex-wrap">
    {
    data && data.length < 1 && (
        <p>Tidak ada data</p>
    )
}
        {
            data&&data.map((item,index)=>(
                <ReviewCard date={item.date_created} id={item.review_id} name={item.attraction_detail.name} photo={item.photo_url} username={item.user_detail.username}/>
            ))
        }

    </div>
    </section>
  );
};

export default Cerita;
