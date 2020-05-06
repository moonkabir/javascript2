module.exports = function(app){
    app.get("/",(req,res)=>{
        res.end("Hellow World moon. how are you?");
    }) 
    app.post("/me",(req,res)=>{
        let myAnswer = {
            time:Date.now(),
            greeting:`hello ${req.body.name}! Have a good day`
        }
        res.json(myAnswer);
    }) 
}