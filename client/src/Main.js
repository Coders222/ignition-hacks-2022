import { useState } from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import './Main.css';
import gitLogo from './images/gitLogo.png';


function Main (){
    const colors = theme.colors;
    const Container = styled.div`
        background-color: ${colors.lightBeige};
        height: 1080px;
        border-top:1px ${colors.lightBeige} solid;
    `;

    const Dropbox = styled.div`
        position: relative;
        height: 500px;
        width: 500px;
        top: 300px;
        left: 150px;
        background-color: #FFFFFF; 
    `

    const Footer = styled.div`
        height: 75px;
        background-color: ${colors.mocha};
        text-align: center;
        position: relative;
        bottom: 0px;
        border:1px ${colors.mocha} solid;
    `
    const Logo = styled.div `
        float:left;
        background-image: url(${props => props.img});
        width:60px;
        height: 60px;
        margin: 10px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    `;
    const UploadFile = styled.div `
        display:flex;
        flex-direction: column;
        width = 100%;
        justify-content:center;
    `;
    const UploadButton = styled.button`
    
    `;
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => {
        setFiles(e.target.files)
    };
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(files);
    }
    return (
        <body>
            <Container>
                <Dropbox>
                    <h1 font-size= "10px">
                        dropbox
                    </h1>
                    <form method="post" onSubmit={onSubmit}>
                        <UploadFile>
                            <label>Upload File:</label>
                            <input type="file" onChange = {onInputChange} accept="video/*"/>
                        </UploadFile>
                        <UploadButton>Submit</UploadButton>
                    </form>
                </Dropbox>
                
            </Container>
            <Footer>
                <Logo img = {gitLogo} >

                </Logo>
            </Footer>
        </body>
    );
}
export default Main;