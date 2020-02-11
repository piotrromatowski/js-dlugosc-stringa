let tekst1 = "Uwielbiam JavaScript!!"
let tekst2 = "Jestem świetnym programistą"

function longertext (tekst1,tekst2) {
    if (tekst2.length>tekst1.length){
        console.log(tekst2)}
        else if (tekst1.length>tekst2.length){
            console.log(tekst1)
        }
}

longertext(tekst1,tekst2)