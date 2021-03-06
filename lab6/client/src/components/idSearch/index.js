
import React from "react";

class IdSearch extends React.Component{
     idClicker(event) {
        event.preventDefault();
       let element = document.querySelector("#id");

          fetch("/id/" + element.value).then((res) => {
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
    render(){
        return(
            <div>
                <form onSubmit = {this.idClicker}>
                <p>Enter Pokemon ID:</p>
                <input id = "id" type = "text" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default IdSearch;