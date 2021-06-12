import { Component } from "react";

function LoadScript(src) {
    let tagScript = document.createElement('script');
    tagScript.src=src;

    tagScript.addEventListener('load',e=>{
        console.log('ready');
    });

    tagScript.addEventListener('error',e=>{
        console.log(e);
    });

    document.getElementById('recaptcha_script').appendChild(tagScript);
}

class Home extends Component {
    componentDidMount(){
        LoadScript('https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit');
    }
    render(){
        function onSubmit(token) {
            console.log(token);
        }
        window.onloadCallback=function () {
            window.grecaptcha.render('box_recaptcha', {
                'sitekey' : process.env.REACT_APP_SITE_KEY,
                'callback' : onSubmit,
                'size':'invisible'
              });
        }
        return (
            <div>
                <h1>Home page</h1>
                <div id="recaptcha_script"></div>
                <div id="box_recaptcha"></div>
            </div>
        )
    }
}

export default Home;