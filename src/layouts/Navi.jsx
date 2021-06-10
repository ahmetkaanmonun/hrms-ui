import React, { useState } from 'react'
import { Container, Menu, Button } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'



export default function Navi() {

    const[isAuthenticated,setIsAuthenticated] = useState(false)

    function handleSignOut(params) {
            
        setIsAuthenticated(true)
    }
    function handleSignIn(params) {
        
        setIsAuthenticated(false)
    }

    return (

        
        <div>

            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name="home" />
                    <Menu.Item name="messages" />

                    <Menu.Menu position="right">
                        
                        {isAuthenticated?<SignedIn signOut={handleSignOut}></SignedIn>:<SignedOut signIn={handleSignIn}></SignedOut>}

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>

       
    )
}
