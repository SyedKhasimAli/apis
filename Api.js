var express=require('express')
const app=express();
app.use(express.json())
app.listen(9000,()=>{
    console.log(`Server is running on http://localhost:${9000}`)
})
let  users=[
        {
            id:001,
            firstname: "Rohit",
            lastname: "Sharma",
        
        },
        {
            id:002,
            firstname: "MS",
            lastname: "Dhoni",
           
        },
        {
            id:003,
            firstname: "Virat",
            lastname: "Kohli",
           
        }
]
var id =3
function ids(){
   id+=1;
   return id;
}
app.get('/',(req,res)=>{
    res.send("API is healthy")
    })
app.get('/users',(req,res)=>{
    res.send(
       users
    )
})
app.post('/users',(req,res)=>{

    const user=
        {
        id:ids(),
        firstname: req.body.firstname,
        lastname:req.body.lastname, 
        };

        users.push(user);
        res.send(user)
        res.send("User added succesfully")
})
app.get('/users/:id',(req,res)=>{
    let first=req.params.id;
    console.log(first);
    for(i=0;i<users.length;i++){
        if(users[i].id==first){
            res.send(users[i])
        }       
    }
    for(i=0;i<users.length;i++){
    if(users[i].id!=first){
        res.send("Please provide valid identification number for retreiving data")
    }
}

})

app.patch('/users/:id',(req,res)=>{
    const first=req.params.id;
    console.log(first);
    for(i=0;i<users.length;i++){
        if(users[i].id==first){
            users[i]= {
                id:users[i].id,
                firstname: req.body.firstname,
                lastname:req.body.lastname, 
                };
            res.send(users[i])
        }       
    }  
    for(i=0;i<users.length;i++){
    if(users[i].id!=first){
        res.send("Please provide valid identification number for updating")
    } 
}
})

app.delete('/users/:id',(req,res)=>{
    const first=req.params.id;
   
    console.log(first);
    for(i=0;i<users.length;i++){
        if(users[i].id==first){
           users.splice(i,1);
           res.send(`Successfully deleted id ${first}`)
        }       
    } 
    for(i=0;i<users.length;i++){
    if(users[i].id!=first){
        res.send(`There is no matching "id":"${first}" to delete record`)
    } 
} 
})