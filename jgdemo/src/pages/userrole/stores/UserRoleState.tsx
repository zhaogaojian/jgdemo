import { observable, action,configure } from 'mobx';
configure({enforceActions:true});
class UserRoleState {

    @observable timer = null;
    @observable secend = 0;
    @action
    add = () => {
            this.secend++
    }
}

export default new UserRoleState()