function validation (){

    // get all input elements (name, email, password, confirm)
    var elements = document.querySelectorAll("input");
    
    // initialise valid elements
    var valid_elements = [];

    // iterate through input elements
    elements.forEach(element => {
        
        // create error message for empty fields in red
        var required_text = document.createElement("p");
        required_text.appendChild(document.createTextNode("Rellene este campo"));
        required_text.style.color = "red";

        // create validation error message in red
        var error_text = document.createElement('p');
        if (element.type === "text") {
            var validation_msg = "Debe tener entre 2 y 30 letras"
        }
        else if ( element.type === "email" ) {
            var validation_msg = "Email inválido"
        }
        else if (element.type === "password") {
            if (element.name === "password" ) {
                var validation_msg = "Debe tener más de 8 caracteres"
            }
            else if (element.name === "confirm") {
                var validation_msg = "Las contraseñas no coinciden"
            }
        }
        error_text.appendChild(document.createTextNode(validation_msg));
        error_text.style.color = "red";

        // get icons to show
        var success_icon = document.createElement("img");
        success_icon.setAttribute("src", "images/success-icon.svg");
        success_icon.className = "success";
        var error_icon = document.createElement("img");
        error_icon.setAttribute("src", "images/error-icon.svg");   
        error_icon.className = "error";

        // check if input field is empty
        const isEmpty = str => !str.trim().length;
        element.addEventListener("input", function() {
            // if it is empty
            if ( isEmpty(this.value) ) {
                // remove validation error message (if it exists)
                if (document.body.contains(error_text)){
                    element.parentNode.removeChild(error_text);
                }

                // remove error icon (if it exists)
                if (document.body.contains(error_icon)){
                    element.parentNode.removeChild(error_icon);
                }

                // show requirement error message
                element.parentNode.appendChild(required_text, element);

                // change element border color to red
                element.style.border = "3px solid red";  
                element.parentNode.appendChild(error_icon, element); 
            }
            // if it is not empty
            else {
                
                // remove requirement error message (if it exists)
                if (document.body.contains(required_text)){
                    element.parentNode.removeChild(required_text);
                }

                // remove error icon (if it exists)
                if (document.body.contains(error_icon)){
                    element.parentNode.removeChild(error_icon);
                }

                // remove success icon (if it exists)
                if (document.body.contains(success_icon)){
                    element.parentNode.removeChild(success_icon);
                }
          
                // get condition to change validation message for confirmation field
                if ( element.name === "confirm" ) {
                    condition = (document.getElementById('password').value !== element.value);
                }
                else {
                    condition = (element.checkValidity() === false);
                }

                // if input is invalid
                if ( condition ) {
                    // show validation error message (if it exists)
                    element.parentNode.appendChild(error_text, element);

                    // change element border color to red
                    element.style.border = "3px solid red";
                    element.parentNode.appendChild(error_icon, element);
                    
                    // remove field from valid elements
                    const index = valid_elements.indexOf(element.name);
                    if (index > -1) { 
                        valid_elements.splice(index, 1); 
                    }
                }
                // if input is valid
                else {
                    // remove validation error message (if it exists)
                    if (document.body.contains(error_text)){
                        element.parentNode.removeChild(error_text);
                    }

                    // remove error icon (if it exists)
                    if (document.body.contains(error_icon)){
                        element.parentNode.removeChild(error_icon);
                    }
                    
                    // change element border color to green
                    element.style.border = "3px solid green";
                    element.parentNode.appendChild(success_icon, element);
                    
                    // add field to valid elements
                    if ( !valid_elements.includes(element.name) ){
                        valid_elements.push(element.name)
                    }
                }
            }
        });

    });

    document.getElementById('button').addEventListener("click", function(){

        const all_elements = ["name", "email", "password", "confirm"]
        if ( all_elements.every(field => valid_elements.includes(field)) ) {
            alert("La inscripción se ha realizado con éxito.");
        }
        else {
           alert("La inscripción no es posible, por favor revisa los campos.");
        }
    });

    return valid_elements
}

window.onload = validation;