import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const ProductDetails = () => {
  return (
    <Container>
      <Form>
        <div>
          <Row>
            <Col>
              <Card className="p-5">
                <h2>General Information :</h2>
                <Form.Group>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Card>
            </Col>
            <Col>
              <Card className="p-5 mt-5">
                <h3>Upload Images</h3>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Pricing :</h5>
              <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
              
              <h5>Category</h5>
              <Form.Group className="mb-3">
                <Form.Select>
                  <option>Refrigarator</option>
                  <option>Ceiling Fans</option>
                  <option>Telivisions</option>
                  <option>Lights</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </div>
      </Form>
    </Container>
  );
};

export default ProductDetails;
