import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useUStore } from '../stores/ustore';

export default function NavBar() {

    const {userStore} = useUStore();

    return(

        <Menu inverted fixed='top'>
            <Container>
             <Menu.Item as={NavLink} to ='/' exact header>
                Library
            </Menu.Item >
                <Menu.Item as={NavLink} to='/users'name='Users'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createUser' positive content='Create User'/>
                </Menu.Item>

            </Container>
        </Menu>
    )
}