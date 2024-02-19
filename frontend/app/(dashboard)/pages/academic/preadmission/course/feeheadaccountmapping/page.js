'use client'
// import node module libraries
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import useMounted from 'hooks/useMounted';

const FeeHeadAccountMapping = () => {
    const hasMounted = useMounted();
    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Fee Head Account Mapping" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Master</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Academic Data</Breadcrumb.Item>
                <Breadcrumb.Item active>Fee Head Account Mapping</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-3 col-form-label form-label" htmlFor="fullName">Receipt Book</Form.Label>
                                            <Col sm={9} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter Session Name" id="sessionname" required />
                                            </Col>
                                        </Row>

                                      
                                        <Row className="align-items-center">

                                            <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                                                <Button variant="primary" type="submit" >
                                                    Add New Record
                                                </Button>
                                                <Button variant="secondary" type="" style={{ marginLeft: '10px' }}>
                                                    Cancel
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                }
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

        </Container>
    )
}

export default FeeHeadAccountMapping