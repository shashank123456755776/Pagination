const express = require("express");
const cors = require("cors");
const products = require("./products.json");
const app = express();
let perpagepost = 1;
let currentPage = 1;
app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  let {limit, page} = req.query;
  perpagepost = limit;
  currentPage = page;
  let totalLength = products.length
  const indexOflastPage = currentPage * perpagepost;
  const indexOffirstProduct = indexOflastPage - perpagepost;
  const currentProduct = products.slice(
    indexOffirstProduct,
    indexOflastPage
  );
  res.status(200).send({data:{products:currentProduct},totalLength });
});
app.post("", (req, res) => {
  res.status(200).send("post method is working");
});
app.post("",(req,res)=>{
  res.status(200).send("post method has been ommited")
})
app.listen(5000, () => {
  console.log("server is running on port 5000");
});