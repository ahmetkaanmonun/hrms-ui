import { useEffect, useState } from "react"

import { Table, Menu,Icon } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService"



export default function JobAdveritesementList(){

    const[jobadvertisements,setJobAdvertisements] = useState([])

    useEffect(()=>{
        let jobadvertisementsService = new JobAdvertisementService()
        jobadvertisementsService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
      },[])

      return (
        <div>
          <Table celled>
            <Table.Header>   
              <Table.Row>
                <Table.HeaderCell>Employer</Table.HeaderCell>
                <Table.HeaderCell>Job</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Min Wage</Table.HeaderCell>
                <Table.HeaderCell>Max Wage</Table.HeaderCell>
                <Table.HeaderCell>Deadline Date</Table.HeaderCell>
                <Table.HeaderCell>Posting Date</Table.HeaderCell>
                <Table.HeaderCell>Position No</Table.HeaderCell>
                <Table.HeaderCell>State</Table.HeaderCell>
                
                
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              {jobadvertisements.map((jobadvertisements) => (
                <Table.Row key={jobadvertisements.id}>
                  <Table.Cell>{jobadvertisements.employer}</Table.Cell>
                  <Table.Cell>{jobadvertisements.job}</Table.Cell>
                  <Table.Cell>{jobadvertisements.city}</Table.Cell>
                  <Table.Cell>{jobadvertisements.description}</Table.Cell>
                  <Table.Cell>{jobadvertisements.minWage}</Table.Cell>
                  <Table.Cell>{jobadvertisements.maxWage}</Table.Cell>
                  <Table.Cell>{jobadvertisements.deadlineDate}</Table.Cell>
                  <Table.Cell>{jobadvertisements.postingDate}</Table.Cell>
                  <Table.Cell>{jobadvertisements.positionNumber}</Table.Cell>
                  <Table.Cell>{jobadvertisements.isActive}</Table.Cell>
                  
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