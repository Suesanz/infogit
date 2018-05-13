import React from 'react';
import '../../App.css'
const UserForm = (props) => {

    return (
        <form  onSubmit={props.getuser}>
            <input  id={"input"} className="input-field" type="text" name={"username"} placeholder={"Enter Username"}/>

            <button id={"submit"} className="btn-large waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
            </button>
        </form>
    )
}
export default UserForm;