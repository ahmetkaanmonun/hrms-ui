import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>

            <Menu pointing vertical>
                <Menu.Item
                    name="Employers"
                />
                <Menu.Item
                    name="JobSeekers"
                />
                <Menu.Item
                    name="Employees"
                />
            </Menu>


        </div>
    )
}
