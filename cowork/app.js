const e = require('express');
const express=require('express');
const app=express();

const db = require('./models');

const { Member }=db;
//미들웨어
app.use(express.json());

app.get('/api/members',async (req,res)=>{
    const { team }=req.query
    if(team){
        //filter -> 조건에 해당하는 요소들을 갖고 새로운 배열을 만듬
        const teamMembers=await Member.findAll({ where: { team } });
        res.send(teamMembers);
    }else{
        const members=await Member.findAll();
        res.send(members);
    }
    

});

app.get('/api/members/:id',async(req,res)=>{
    
    //같은 의미
    // const id = req.params.id;
    const{ id } = req.params;
    const member=await Member.findOne({where:{ id }});
    if (member){
        res.send(member);
    }else{
        //요청한 결과가 없음 -> 메세지라는 프로퍼티를 만들고 문장을 넣어준다
        res.status(404).send({message:'There is no such member'});
        
    }

});

// app.put('/api/members/:id',async(req,res)=>{
//     const{ id }=req.params;
//     const newInfo= req.body;
//     const result = await Member.update(newInfo,{ where:{ id } });
//     if(result[0]){
//         res.send({message:`${result[0]} row affected`})
//     }else{
//         res.status(404).send({message:'There is no member with the id'})
//     }

// });

app.put('/api/members/:id',async(req,res)=>{
    const { id }=req.params;
    const newInfo = req.body;
    const member = await Member.findOne({ where: { id } });
    Object.keys(newInfo).forEach((prop)=>{
        member[prop]=newInfo[prop];
    });
    await member.save();
    res.send(member);
});


app.post('/api/members',async(req,res)=>{
    const newMember=req.body;
    const member=Member.build(newMember);
    await member.save();
    res.send(member);
});

app.delete('/api/members/:id',async(req,res)=>{
    const{ id }=req.params;
    const deletedCount = await Member.destroy({ where: { id } });
    // filter 메소드로 삭제할 멤버와 일치하지 않는 객체만가지고 배열을 새로만든다
    if (deletedCount){
        res.send({ message:`${deletedCount} Deleted` });
    }else{
        res.status(404).send({ message:'There is no member with the id' });
    }
});


app.listen(3000,()=>{
    console.log('Server is listening...')
});

