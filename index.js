import express from "express"


const app=express()
app.set('port',process.env.PORT||400);
app.listen(app.get('port'),()=>{
   console.info("Se conecto al puerto"+app.get('port'))
});
