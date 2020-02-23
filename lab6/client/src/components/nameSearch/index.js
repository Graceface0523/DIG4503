import React from "react";

class nameSearch extends React.Component {

    nameClicker(event) {
        event.preventDefault();
        let element = document.querySelector("#name");

        fetch("/name/" + element.value).then((res) => {
            return res.json();
        }).then((processed) => {
            
        let reporting = document.querySelector("#reportingArea");

        if(processed.error) {
            reporting.innerHTML = processed.error;
        } else {
            reporting.innerHTML = processed.name;
        }

        });
        }

    render() {
        return(
            <div>
                <form onSubmit = {this.nameClicker}>
                <p>Enter Pokemon Name:</p>
                <input id= "name" type="text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default nameSearch;