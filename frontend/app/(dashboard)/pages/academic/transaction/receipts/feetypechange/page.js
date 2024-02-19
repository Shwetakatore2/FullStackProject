'use client'
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const FeeTypeChange = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Fee Type Change" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transactionn</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Receipts</Breadcrumb.Item>
                <Breadcrumb.Item active>Fee Type Change</Breadcrumb.Item>
            </Breadcrumb>


            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Session<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Course<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">Basic Course<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Select Course" id="course" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" htmlFor="fullName">New Fee Type<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="session" required />
                                            </Col>
                                        </Row>
                                        
                                        <Row className="mb-3">
                                            <Container fluid className="p-3">
                                                <Row>
                                                    <Col>
                                                        <PageHeading heading="Search Student" />

                                                        <Row className="mb-8">
                                                            <Col xl={12} lg={8} md={12} xs={12}>
                                                                <Card>
                                                                    <Card.Body>
                                                                        <div>
                                                                            {hasMounted && (
                                                                                <Form>
                                                                                    <Row className="mb-3">
                                                                                        <Row className="mb-3">
                                                                                            <Form.Label
                                                                                                className="col-sm-4 col-form-label form-label"
                                                                                                htmlFor="fullName"
                                                                                            >
                                                                                                Search By
                                                                                                <span className="text-danger">
                                                                                                    *
                                                                                                </span>
                                                                                            </Form.Label>
                                                                                            <Col className="mb-3 mb-lg-0">
                                                                                                <Form.Select
                                                                                                    type="text"
                                                                                                    placeholder="Please Select Course"
                                                                                                    id="course"
                                                                                                    required
                                                                                                />
                                                                                            </Col>
                                                                                        </Row>
                                                                                        <Row className="mb-3">
                                                                                            <Form.Label
                                                                                                className="col-sm-4 col-form-label form-label"
                                                                                                htmlFor="fullName"
                                                                                            >
                                                                                                Enter Input
                                                                                                <span className="text-danger">
                                                                                                    *
                                                                                                </span>
                                                                                            </Form.Label>
                                                                                            <Col className="mb-3 mb-lg-0">
                                                                                                <Form.Control
                                                                                                    type="text"
                                                                                                    placeholder="Student ID Number"
                                                                                                    id="course"
                                                                                                    required
                                                                                                />
                                                                                            </Col>
                                                                                        </Row>
                                                                                    </Row>
                                                                                </Form>
                                                                            )}
                                                                        </div>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col></Col>
                                                </Row>
                                            </Container>
                                        </Row>
                                        <Row >
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
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

export default FeeTypeChange