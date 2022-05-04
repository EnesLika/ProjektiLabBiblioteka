import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Segment } from "semantic-ui-react";
import { useUStore } from "../../../app/stores/ustore";

export default observer(function UserList(){
    
    const {userStore} = useUStore();
    const [target, setTarget] =useState('');

    const { deleteUser, loading, users } = userStore;

    function handleUserDelete(e: SyntheticEvent<HTMLButtonElement>, user_id: number){
        setTarget(e.currentTarget.name);
        deleteUser(user_id);
    }

    return(
        <Segment>
            <Item.Group divided>
            {
                 users.map((user) => (
                  <Item key={user.user_id}>
                      <Item.Content>
                        <Item.Header as='a'>User ID: {user.emri}</Item.Header>
                        <Item.Meta>Email:{user.email}</Item.Meta>
                        <Item.Description>
                            <div>
                                 Password: {user.password}, <br></br>
                                 First Name: {user.emri}, <br></br>
                                 Last Name: {user.mbiemri}, <br></br>
                            </div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => userStore.selectUser(user.user_id)} floated='right' content='View' color="blue"/>
                            <Button 
                                name={user.user_id}
                                loading={loading} 
                                onClick={(e) => handleUserDelete(e, user.user_id)} 
                                floated='right' content='Delete' color="red"
                            />
                        </Item.Extra>
                  </Item.Content>
                  </Item>
                ))
              }
            </Item.Group>
        </Segment>
    )
})