import { useEffect, useState } from "react"

import { Table, Menu,Icon } from 'semantic-ui-react'
import UserService from "../services/userService"


export default function UsersList(){

    const[users,setUsers] = useState([])

    useEffect(()=>{
        let usersService = new UserService()
        usersService.getUsers().then(result=>setUsers(result.data.data))
      },[])

      return (
        <div>
          <Table celled>
            <Table.Header>   
              <Table.Row>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Password</Table.HeaderCell>
                
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              {users.map((users) => (
                <Table.Row key={users.id}>
                  <Table.Cell>{users.email}</Table.Cell>
                  <Table.Cell>{users.password}</Table.Cell>
                  
                </Table.Row>
              ))}
            </Table.Body>
    
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      );



}