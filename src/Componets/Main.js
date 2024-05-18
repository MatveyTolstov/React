import React from "react";

import logo from "../колдун.png"

import message from "../message-question.png"

class Main extends React.Component{
    render(){
        return(
            <div class="main">
                <div class="text">
                    <h1 class="h1">
                        sign up to unlock all features !
                    </h1>
                    <p class="maintext">
                        here you can see every thing about your clash of clants account, like clan wars , frindles activity and every thing activity and every thing. but you need to sign up first
                    </p>
                    <div class="buttons">
                        <p class="FAQ">
                            FAQ
                        </p>
                        <img class="messege" src={message} alt="Error"/>
                    </div>
                </div>
                <img class="koldun" src={logo} alt="Error"/>
            </div>
        )
    }
}
export default Main 