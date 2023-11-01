const express=require("express");
const router=new express.Router();
const MenRanking=require("../models/men");

router.post("/men",async (req,res)=>{
    try{
       const addingMenRecords=new MenRanking(req.body)
       const addMenRecordToDb=await addingMenRecords.save();
       res.status(201).send(addMenRecordToDb);
   
    }catch(e){
   res.status(400).send(e);
    }
   })
   
   router.get("/men",async (req,res)=>{
       try{
          const getMenRecord=await MenRanking.find().sort({"ranking":1});
          res.status(201).send(getMenRecord);
      
       }catch(e){
      res.status(400).send(e);
       }
      })
   
   
      router.get("/men/:id",async (req,res)=>{
       try{
           const id=req.params.id;
          const getMenRecordById=await MenRanking.findById({_id:id});
          res.status(201).send(getMenRecordById);
      
       }catch(e){
      res.status(400).send(e);
       }
      })
   
      router.patch("/men/:id",async (req,res)=>{
       try{
           const _id=req.params.id;
          const updateRecordById=await MenRanking.findByIdAndUpdate(_id,req.body,{
           new:true
          });
          res.status(201).send(updateRecordById);
      
       }catch(e){
      res.status(500).send(e);
       }
      })
   
      router.delete("/men/:id",async (req,res)=>{
       try{
           const _id=req.params.id;
          const deleteRecordById=await MenRanking.findByIdAndDelete(_id);
          res.status(201).send(deleteRecordById);
      
       }catch(e){
      res.status(400).send(e);
       }
      }) 
   
module.exports=router;