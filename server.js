const express=require('express');

const cors=require('cors');

const app=express();

app.use(cors());

const data=[{
    Companyname:"Amz",
    category:"laptop",
    price:"2222",
    rating:"4.2",
    discount:"24",
    availability:"yes"
},
{
    Companyname:"FLP",
    category:"laptop",
    price:"3829",
    rating:"3.2",
    discount:"45",
    availability:"out-of-stock"
},{
    Companyname:"SNP",
    category:"laptop",
    price:"4326",
    rating:"5",
    discount:"20",
    availability:"yes"
},{
    Companyname:"MYO",
    category:"laptop",
    price:"4567",
    rating:"4.8",
    discount:"27",
    availability:"out-of-stock"
},{
    Companyname:"AZO",
    category:"laptop",
    price:"5678",
    rating:"5",
    discount:"12",
    availability:"yes"
}
]

app.get("/product",(req,res)=>{
    
    res.send(data);
})

app.listen(3000,()=>{
    console.log("serVer running");
})