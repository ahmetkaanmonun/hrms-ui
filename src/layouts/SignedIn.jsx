import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {

    
    return (
        <div>

            <Menu.Item>

                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/764476077355982848/TdoM02RH_400x400.jpg" />
            
                <Dropdown>
                    <DropdownMenu>
                        <DropdownItem text="Bilgilerim" icon="info" />
                        <DropdownItem onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
                    </DropdownMenu>
                </Dropdown>
            </Menu.Item>

        </div>
    )
}
