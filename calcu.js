function appendToDisplay(value) { //diba sir, function kaya yan function kasi tinatawag mo tas sinundan ng "append" ito naman para mag display
    document.getElementById('display').value += value;  // kaya document.getElementById, kasi sa file na html, kumukuha siya ron para ma append o ma display yung p-pindutin na numero tapos
                                                        // yung value, value ng numero tas kaya += yan, kasi ayan yung need para ma display ang isang numero
}


function clearDisplay() { //from the word clear, tinatanggal niya
    document.getElementById('display').value = ''; //kaya walang value yan kasi, once na clinick yan nag eentry siya new string, kaya empty para pag clinick empty o wala 
}

 
function calculateResult() {
    //dito na nag sisimula mag calculate yung mga numero,  sa eval, sa js kasi ito ay built-in function sa js at ito ang dahilan kung bakit nag c-calculate.
    //halimbawa, nag input tayo dito ng 5+3, itinuturing ni eval() ang string na '5+3' at kinokompute niya.
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        
        


        //kapag may mali sa pag calculate ng calcu, sasaluhin siya ng catch at mag pprint ang error
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
