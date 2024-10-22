import express from 'express';

const app=express();
const PORT=3000;

//solicitud ejemplo http://localhost:3000/profile?edad=21
    app.get('/profile', (req,res)=>{
        const edad=req.query.edad;
        console.log(`edad recibida: ${edad}`);
        res.send(`edad del perfil: ${edad}`);        
    });

    app.listen(PORT,()=> {
        console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`);
    })