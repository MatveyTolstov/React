import React from "react";

import img2 from "../Frame 1.png"

class Header extends React.Component{
    render(){
        return(
            <div class="head">
                <img class="logo" src={img2} alt="Error"/>
                <p class="button">
                    Home
                </p>
                <p class="button">
                    News
                </p>
                <p class="button">
                    clan wars analyse
                </p>
                <p class="button">
                    frindes activity
                </p>
                <div class="button1">
                    <p class="signup">
                        sign up
                    </p>
                </div>
            </div>
        )
    }
}

export default Header