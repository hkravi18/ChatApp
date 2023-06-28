import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Robot from '../assets/robot.gif';



const Welcome = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const getUserName = async() => {
            const user = await JSON.parse(localStorage.getItem('chat-app-user')); 
            if (user) {
                setUserName(user.username);
            }
        }
        getUserName();
    }, []);

    return (
    <Container>
       <img src={Robot} alt="Robot"/>
       <h1>
          Welcome, <span>{userName}</span> 
       </h1>
       <h3>Please select a chat to Start Messaging</h3>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    img {
      height: 20rem;
    }
    span {
        color: #4e00ff;
    }
`;

export default Welcome