import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useUStore } from "../../../app/stores/ustore";

export default function UserDetails(){

  const {userStore} = useUStore();
  const {selectedUser: users, openForm, cancelSelectedUser, deleteUser} = userStore;

  if(!users) return <LoadingComponent />;

    return(

        <Card fluid>
        <Image src='https://i1.wp.com/afa.org.sg/wp-content/uploads/2014/05/icon-user-default-copy.png?ssl=1' />
        <Card.Content>
          <Card.Header>User ID: {users.user_id}</Card.Header>
          <Card.Description>
                Email: {users.email}<br/>
                Password: {users.password}<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='2'>
              <Button onClick={() => openForm(users.user_id)}basic color="green" content="Edit"/>          
              <Button onClick={cancelSelectedUser} basic color="yellow" content="Cancel"/>          
              
          </Button.Group>
        </Card.Content>
      </Card>

    )
}