import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard'

import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const categories = ["Choose a genre","Business","Fiction","Horror","Adventure"]

function TopSellers() {
    const [books,setBooks] = useState([])
    const [selectedCategory,setSelectedCategory] = useState("Choose a genre")
    useEffect(()=>{
        fetch("books.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
        .catch(err=>console.log(err))
    },[])

    const filteredBooks = selectedCategory === "Choose a genre" ?books:books.filter((book)=>{
        return book.category === selectedCategory.toLowerCase()
    })

    // console.log(filteredBooks)

  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        {/* category filtering */}
        <div className='mb-8 flex items-center'>
            <select name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'
                onChange={(e)=>{
                    setSelectedCategory(e.target.value)
                }}
            >
            {
                categories.map((category,index)=>{
                    return <option key={index} value={category}>{category}</option>
                })
            }
            </select>
        </div>
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
            filteredBooks.length>0 && filteredBooks.map((book,index)=>{
                return <SwiperSlide key={index}>
                            <BookCard book={book}/>
                        </SwiperSlide>
            })
        }
        </Swiper>
   
    </div>
  )
}

export default TopSellers