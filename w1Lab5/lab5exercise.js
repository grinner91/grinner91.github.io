function eventFunc() {

}

function armBAM(waittime) {
 console.log("armbam: " + waittime )
 clearTimeout(armtimer)
}

console.log("setTimeout")
const armtimer = setTimeout(armBAM, 10000, 1000)



function armBAM(waittime) {
    console.log("armbam: " + waittime )
    clearTimeout(armtimer)
   }
   
   console.log("setInterval")
   const armint = setInterval(armBAM, 10000, 1000)
   
