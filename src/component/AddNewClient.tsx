import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
import TOTPCodeModel from "../model/TOTPCodeModel";

const AddNewClient = () => {

    const [newName, setNewName] = useState("");
    const [newCode, setNewCode] = useState("");

    function SaveNewCode(){
        let newCodeModel: TOTPCodeModel = {name: newName, code: newCode}
        localStorage.setItem(newName, JSON.stringify(newCodeModel))
    }

    return (<Form>
        <Form.Group className="mb-3" controlId="formAddNewCode">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter code name" onChange={(e) => {setNewName(e.target.value)}}/>
            <Form.Text className="text-muted">
                The text that you will see as description to your one-time code
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCode">
            <Form.Label>Code</Form.Label>
            <Form.Control type="text" placeholder="Enter your code" onChange={(e) => {setNewCode(e.target.value)}}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={SaveNewCode}>
            Save
        </Button>
    </Form>)
}

export default AddNewClient;