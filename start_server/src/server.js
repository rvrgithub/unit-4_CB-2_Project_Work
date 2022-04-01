// const { connect } = require("http2");
const connect = require("./configs/db");
const app =  require("./index");
const port = process.env.PORT || 5000
app.listen(5000, async(req,res)=>{
    try{
await connect ();
console.log(`server is running at port on ${port}`);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})


































//    import navbar from './components/navbar.js'
// document.querySelector("header").innerHTML=navbar();


// import footer from './components/footer.js'
// document.querySelector("footer").innerHTML=footer();

//   document.querySelector("form").addEventListener("submit", formSubmit);
//   var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];
//   async function  formSubmit(event) {

//     event.preventDefault();

// try{
//     let mail = {
//         name : document.querySelector("#usr").value,
//         phone_no : document.querySelector("#mbl").value,
//        email : document.querySelector("#email").value,
//        password : document.querySelector("#pass").value,

//     }
//        method:"POST",
//                 body:JSON.stringify(mail),
//                 headers:{
//                     'Content-Type': 'application/json'
//                 }
//             })
//             let data = await response.json()
//             console.log(data)
//             // alert("Registration Complete, Please LogIn to Explore")
//             // mod.style.visibility = "hidden";
//         } catch(err){
//             console.log(err.message)
//         }
    

//     var userData = {
//       emailAdd: email,
//       password: password,
//     //   userName: usr,
//     //   mblNum: mbl,
//     // };

//     userStack.push(userData);

//     //console.log(userStack);
//     // localStorage.setItem("userDataBase", JSON.stringify(userStack));
//     alert("signup success");
//     // window.location.href = "login.html";
//   }
