const express=require("express");
const menRouter=require("./routers/men");
const MenRanking=require("../src/models/men")
require("../src/db/conn")

const app=express();
app.use(menRouter);
app.use(express.json());
const port=process.env.PORT || 8000;


app.listen(port,()=>{
    console.log(`Successfully listening at port ${port}`);
})