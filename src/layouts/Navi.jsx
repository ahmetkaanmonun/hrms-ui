import React, { useState } from 'react'
import { Container, Menu, Button, Header, Image, MenuItem } from 'semantic-ui-react'
import Content from './LanguagePreferences'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'



export default function Navi() {

    
    

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut(params) {

        setIsAuthenticated(true)
    }
    function handleSignIn(params) {

        setIsAuthenticated(false)
    }

    return (


        <div>

            <Menu inverted pointing>
                <Container>
                    <Menu.Item>
                    <Image  src="hrms.png" size="tiny"></Image>
                    </Menu.Item>
                    <Menu.Item name="home" />
                    <Menu.Item name="info" />
                    <Menu.Item name="contact" />


                    <Menu.Menu position="right">
                        <MenuItem><Content></Content></MenuItem>
                        <Menu.Item>{isAuthenticated ? <SignedIn signOut={handleSignOut}></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>}</Menu.Item>

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>


    )
}
