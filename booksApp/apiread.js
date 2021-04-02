const request = require('request')
x='hello'
var url =`https://jsonplaceholder.typicode.com/`
const getApi = (cb)=>{
    request({ url, json:true },(err, {body})=>{
        if(err) cb(err, false)
        else cb(false, body)
    })
}

getApi((err,data)=>{
    if(err) console.log(err)
    else console.log(data)
})
updateLink=(update)=>{
    url+=update
}
module.exports ={
    getApi,
    updateLink
}