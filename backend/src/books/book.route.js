const express = require("express")
const Book = require("./book.model")

const router = express.Router()

//post a book
router.post("/create-book",async (req,res)=>{
    // console.log(req.body)
    try
    {
        const newBook = await Book(req.body);
        await newBook.save();
        res.status(200).send({message:"book posted successfully",book:newBook})
    }
    catch(err)
    {
        console.error("Error while creating book",err)
        res.status(500).send({message:"Failed to create book"})
    }
})


module.exports = router;


