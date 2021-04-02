const fs = require('fs')

getAllBooks = () => {
    let data
    try{
        data = JSON.parse(fs.readFileSync('books.json').toString())
    }
    catch(err){
        data = []
    }
    return data
}
setAllBook = (data)=>{
    try{
        if(typeof data !== 'object') throw new Error('invalid data')
        fs.writeFileSync('books.json', JSON.stringify(data))
    }
    catch(err){
        console.log(err)
    }
}
addNewBook = (book) =>{
    const books = getAllBooks()
    const isUsed = books.find((mybook)=> mybook.name == book.name)
    if(isUsed) console.log('name used before')
    else{
        books.push(book)
        setAllBook(books)
        console.log('book added')
    }
}
removeBook = (name)=>{
    const books = getAllBooks()
    const index = books.findIndex(book=> book.name==name)
    if(index==-1) return console.log('book not found')
    else{
        books.splice(index,1)
        setAllBook(books)
        console.log('deleted')
    }
}
searchBook = (searchKey, searchType, t) =>{
    const books = getAllBooks()
    const data = books.filter(book=>{
        if(t=="full") return book[searchType]==(searchKey)
        else return book[searchType].includes(searchKey)
    })
    console.log(data)
    return data
}
editBook = (bookName, newData)=>{
    books = getAllBooks()
    neededBook = books.findIndex(book=>book.name==bookName)
    if(neededBook!=-1){
        newDataKeys = Object.keys(newData)
        newDataKeys.forEach(key=>{
           if( newData[key]) books[neededBook][key] = newData[key]
        })
            setAllBook(books)
            console.log('edited!')
        }
        else {console.log('not found!')}
}
managePages = (bookName, operand, numOfPages)=>{
    books=getAllBooks()
    neededBook = books.findIndex(book=>book.name==bookName)
    if (operand=='+'){books[neededBook].numOfPages+=numOfPages}
    else{books[neededBook].numOfPages-=numOfPages}
    setAllBook(books)
    console.log('Done')
}

    

module.exports = {
    getAllBooks,
    setAllBook,
    addNewBook,
    removeBook,
    searchBook,
    editBook,
    managePages
}
