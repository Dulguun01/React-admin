import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function CategoryCreat
(){
    return(
        <>
        <Form>
        <Form.Group className="mb-3" controlId="Form.name">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="name of the aricle" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.Descripition">
          <Form.Label>Descripition</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
        <Button variant="secondary">
            Close
          </Button>

          <Button variant="primary">
            Save Changes
          </Button>
        </>

        
    )
}