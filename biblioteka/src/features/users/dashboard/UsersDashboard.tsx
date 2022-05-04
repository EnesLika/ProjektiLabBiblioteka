import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useUStore } from "../../../app/stores/ustore";
import UserDetails from "../details/UserDetails";
import UserForm from "../form/UserForm";
import UserList from "./UserList";

export default observer(function UsersDashboard() {

    const {userStore} = useUStore();
    const {selectedUser, editMode } = userStore;

    useEffect(() => {
        userStore.loadUsers();
    }, [userStore])
    
    if (userStore.loadingInitial) return <LoadingComponent content='Loading APP'/>
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <UserList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedUser && !editMode &&
                <UserDetails /> }
                {editMode &&
                <UserForm />}
            </Grid.Column>
        </Grid>
    )
})