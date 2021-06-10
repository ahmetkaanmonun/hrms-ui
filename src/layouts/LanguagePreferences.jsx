import React from 'react'
import { Button, Dropdown, DropdownItem,Flag } from 'semantic-ui-react'

export default function LanguagePreferences() {

    
      
    return (
        <div>
        <Button.Group>
            <Button Flag circular><Flag name='uk' /></Button>
            <Button.Or />
            <Button Flag circular><Flag name='tr'/></Button>
        </Button.Group>
        </div>
    )
}
