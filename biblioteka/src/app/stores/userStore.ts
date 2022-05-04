import  { makeAutoObservable, runInAction } from "mobx"
import agent from "../api/agent";
import { User } from "../models/user";
import { Userce } from "../models/userce";


export default class UserStore{

    users: User[] = [];
    usersRegistry = new Map<number, User>();
    usersce: Userce[] = [];
    selectedUser: User | undefined = undefined ;
    selectedUserce: Userce | undefined = undefined ;

    editMode = false;
    loading = false;
    loadingInitial=false;

    constructor(){
        makeAutoObservable(this)
    }

    loadUsers = async () =>{
        this.setLoadingInitial(true);
        try {
            const users = await agent.Users.list();
            users.forEach((user: User)=>{
                this.users.push(user);
                this.usersRegistry.set(user.user_id, user);
            })
            this.setLoadingInitial(false);
        }
        catch (error){
            console.log(error);
            this.setLoadingInitial(false);
        }

    }
    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state
    }
    selectUser = (user_id: number) => {
        this.selectedUser = this.usersRegistry.get(user_id);
    }
    cancelSelectedUser = () => {
        this.selectedUser = undefined;
    }
    openForm = (user_id?: number) => {
        user_id ? this.selectUser(user_id) :this.cancelSelectedUser();
        this.editMode = true;
    }
    closeForm = () => {
        this.editMode = false;
    }
    createUser = async(userce: Userce) => {
        this.loading = true;
        try {
            await agent.Users.create(userce);
            runInAction (() =>
            {
                this.usersce.push(userce);
                this.selectedUserce = userce;
                this.editMode=false;
                this.loading=false;
            })
        } catch (error) {
            console.log(error);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }
    updateUser = async(user: User) => {
        this.loading = true;
        try {
            await agent.Users.update(user);
            runInAction (() =>
            {
                this.usersRegistry.set(user.user_id, user);
                this.selectedUser = user;
                this.editMode=false;
                this.loading=false;
            })
        } catch (error) {
            console.log(error);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }
    deleteUser = async(user_id: number) => {
        this.loading = true;
        try {
            await agent.Users.delete(user_id);
            runInAction (() =>
            {
                this.usersRegistry.delete(user_id)
                if(this.selectedUser?.user_id === user_id) this.cancelSelectedUser();
                this.editMode=false;
                this.loading=false;
            })
        } catch (error) {
            console.log(error);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }

}