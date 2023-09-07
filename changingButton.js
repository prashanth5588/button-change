import React, {useState} from "react";

import "./changingButton.css" ;


function ChangeButton() {

    const [isLoggenIn, changeIsLoggenIn] = useState(false);

    const changeButtonStatus = () => {
        changeIsLoggenIn(!isLoggenIn);
    };

    return (

        <div className="main-container">

            <h1 className="heading2">Shop Your favourite brand Headphones here</h1>
            {isLoggenIn ? 
            ( <div>
                <h2 className="loginheading">Welcome user You are successfully LoggedIn</h2>
                <p>Now you can shop for Headphones</p>
                <img src="https://freepngimg.com/thumb/headphones/5-blue-headphones-png-image.png" height={120} width={90}/>
            </div>
                
             ) : 
            ( <div> 
                <h3 className="logoutheading2">Dear user you have to login</h3>
                <label for="name">Your Name :  </label>
                <input type="text" id="name" ></input><br></br>
                <label for="pass">Your password  :</label>
                <input type="password" id="pass"></input>
              </div>
            )
            };
            <button onClick={changeButtonStatus} className={isLoggenIn? "loginbtn" : "logoutbtn"}>{isLoggenIn ? ("Logout") : ("Login Now") }</button>
        </div>

    );


}

export default ChangeButton;  
