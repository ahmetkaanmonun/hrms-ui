import React from 'react'
import { Grid, GridRow } from 'semantic-ui-react'
import JobList from '../pages/JobList'
import JobSeekersList from '../pages/JobSeekersList'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>

            <Grid>

                <GridRow>

                    <Grid.Column width={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        
                        <JobSeekersList></JobSeekersList>
                    </Grid.Column>





                </GridRow>

            </Grid>

        </div>
    )
}
