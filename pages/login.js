import Head from "next/head";
import styled from "styled-components";
import {Button} from "@material-ui/core"
import {auth, provider} from "../firebase"
function Login(){


    const signIn= function (){
        auth.signInWithPopup(provider).catch(alert);
    }


    return (

        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src= "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" /> 
                <Button  onClick={signIn}variant="outlined"> Sign in with Google Account</Button>
            </LoginContainer>
        </Container>
    );
}


export default Login;


const Container = styled.div`
display: grid;
place-items:center;
height:100vh;
background-color:lightgrey;

`;





const LoginContainer = styled.div`
padding: 100px;
background-color:white;
align-items:center;
border-radius:5px;
display: flex;
flex-direction:column;
box-shadow:0px 4px 14px -3px rgba(0,0,0,0,);

`;

const Logo = styled.img`
height: 200px;
width: 200px;
margin-bottom: 50px;
background-color:black;
`;


