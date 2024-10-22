import express from 'express';

const app=express();
const PORT=3000;

//ruta GET con parametro
app.get('/usr/:id', (req,res)=>{
    const userID=req.params.id;
    console.log(`ID del usuario recibido ${userID}`);
    res.send(`Perfil del usuario con ID ${userID}`);
})


app.listen( PORT, ()=>{
    console.log(`servidor corriendo en http://locahost:${PORT}`);
})

