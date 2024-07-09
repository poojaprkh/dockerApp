const express= require('express');
const app= express();

app.get('/home',(req,res)=>{
	res.json({message:'Home page sourabh '})
});
app.get('/',(req,res)=>{
res.json({message:'this is docker file'})

})
app.listen(3300,()=>console.log('server running on 3300'))
