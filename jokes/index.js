let jokes=document.querySelector('.joke');
let btn=document.querySelector('.btns');

// using fetch api


// const generated =()=>{
//     jokes.innerHTML="Loading jokee....";
//     let setheader=
//     {  headers:{
//       Accept : "application/json"
//                }   
//     } 
//     fetch('https://icanhazdadjoke.com/', setheader).then((res)=> res.json() ).then((data)=>
//         {     
//             setTimeout(jokes.innerHTML=data.joke,3000);
//             // jokes.innerHTML=data.joke ; 
//         }
//     ).catch((err)=>
//         alert("error1 : "+err)
//     )
// }
// generated();
//     btn.addEventListener('click',generated);


//async await using


try{
    async function generated() {

        const setheader = {
            headers: {
                Accept: "application/json",
            }
        };

        const res = await fetch('https://icanhazdadjoke.com/', setheader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
       
    }
    generated();
    btn.addEventListener('click',generated);
}catch(err)
{
    jokes.innerHTML=`error is ${err}`;

}


