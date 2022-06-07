const { request } = require('express');
const express = require('express')
const app = express();
const PORT = 8000

const rappers ={
    '21 savage' : {
        'age' : 29,
        'birthName' : "whattt" ,
        'birthLocation' : 'London, UK'
    },
    'chance the rapper' : {
        'age' : 28,
        'birthName' : "chance malli" ,
        'birthLocation' : 'Chicago, Illinois'
    },
    'Dylan' : {
        'age' : 29,
        'birthName' : 'Dylan' ,
        'birthLocation' : 'Dylan'
    },
    
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=> {
    const rapperName = request.params.name.toLowerCase();
    // console.log(rappers[rapperName].age)
    if(rappers[rapperName]){
        response.json(rappers[rapperName]);    
    }else{
        response.json(rappers['Dylan'])
    }
})


app.listen(PORT, () =>  {
    console.log(`The server is now running on port ${PORT}`)
})

 