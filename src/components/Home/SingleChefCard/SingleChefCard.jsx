// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ChefsInfo = () => {
    return (
        <div>
            <Card style={{ width: '25rem', marginTop: '90px' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefsInfo;