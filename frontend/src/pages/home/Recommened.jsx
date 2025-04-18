import React, { useEffect, useState } from 'react'

import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import BookCard from '../books/BookCard'

function Recommened() {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch("books.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation= {true}
            breakpoints={{
                640:{
                    slidesPerView:1,
                    spaceBetween:5,
                },
                768:{
                    slidesPerView:2,
                    spaceBetween:15
                },
                1024:{
                    slidesPerView:2,
                    spaceBetween:25,
                },
                1180:{
                    slidesPerView:3,
                    spaceBetween:35
                }
            }} 
            modules={[Pagination,Navigation]}
            className='mySwiper' 
        >
        {
            books.length>0 && books.slice(8,18).map((book,index)=>{
                return <SwiperSlide key={index}>
                            <BookCard book={book}/>
                        </SwiperSlide>
            })
        }
        </Swiper>
    </div>
  )
}

export default Recommened