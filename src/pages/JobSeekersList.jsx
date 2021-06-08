import { useEffect, useState } from "react"
import JobSeekersService from "../services/jobseekerService"
import { Table, Menu,Icon } from 'semantic-ui-react'


export default function JobSeekersList(){

    const[jobseekers,setJobSeekers] = useState([])

    useEffect(()=>{
        let jobSeekersService = new JobSeekersService()
        jobSeekersService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
      },[])

      return (
        <div>
          <Table celled>
            <Table.Header>   
              <Table.Row>
                <Table.HeaderCell>JobSeeker Id</Table.HeaderCell>
                <Table.HeaderCell>Firstname</Table.HeaderCell>
                <Table.HeaderCell>Lastname</Table.HeaderCell>
                <Table.HeaderCell>Nationality Id</Table.HeaderCell>
                <Table.HeaderCell>Birth Year</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              {jobseekers.map((jobseekers) => (
                <Table.Row key={jobseekers.seekersId}>
                  <Table.Cell>{jobseekers.firstName}</Table.Cell>
                  <Table.Cell>{jobseekers.lastName}</Table.Cell>
                  <Table.Cell>{jobseekers.nationalityId}</Table.Cell>
                  <Table.Cell>{jobseekers.birthYear}</Table.Cell>
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