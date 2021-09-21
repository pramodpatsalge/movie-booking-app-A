import "./Header.css";

class Header extends React.Component{
    constructor(){

    }
    
    render(){
        return(
            <div className="header">
                <img id="logo-img" src={logo} alt= "logo" />
            </div>
        )
    }
}