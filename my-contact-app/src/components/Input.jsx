import React from "react";


function Input(props){
     return(
            <div className="header">
              {/* below sets the input component to practice DRY */}
              <input type={props.type} placeholder={props.placeholder} />
            </div>
        );
}


export default Input;