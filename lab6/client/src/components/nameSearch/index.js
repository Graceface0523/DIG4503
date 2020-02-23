import React from "react";

class nameSearch extends React.Component {

    readName(event) {
        event.preventDefault();
            let pokeName = document.querySelector("#name");

            fetch("http://localhost:80/name/" + pokeName.value).then((res) =>{
                return res.json();
            }).then((processed) => {
                let pokeResponse = document.querySelector("#reportingArea");
                if(processed.error){
                    pokeResponse.innerHTML = processed.error;
                }
                else{
                    pokeResponse.innerHTML = processed.name;
                }
            });
        }

    render() {
        return(
            <div>
                <form onSubmit = {this.readName}>
                <p>Enter Pokemon Name:</p>
                <input id= "name" type="text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default nameSearch;