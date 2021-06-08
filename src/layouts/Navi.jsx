import React from 'react'
import { Container, Menu, Button } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>

            <Menu inverted fixed size = "tiny">
                <Container>
                    <Menu.Item>
                        <img src="https://www.mashura.co/site/wp-content/uploads/2018/09/HRMS-New.jpg" />
                    </Menu.Item>
                    <Menu.Item
                        name='editorials'

                    >
                        Editorials
                    </Menu.Item>

                    <Menu.Item
                        name='reviews'

                    >
                        Reviews
                    </Menu.Item>

                    <Menu.Item
                        name='upcomingEvents'

                    >
                        Upcoming Events
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Button.Group position="right">
                            <Button primary>Sign In</Button>
                            <Button.Or />
                            <Button positive>Sign Up</Button>
                        </Button.Group>
                    </Menu.Menu>

                </Container>
            </Menu>

        </div>
    )
}
