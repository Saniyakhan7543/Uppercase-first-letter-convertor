

    function capital(){
        var input,uppercase;
        input= document.getElementById("first").value;

        uppercase= input.charAt(0).toUpperCase() + input.slice(1);
        // Extract characters from index 1 to the end of the string



        
        document.getElementById("result").innerText= uppercase;
        }


        