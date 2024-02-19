'use client'
// import node module libraries
import { Breadcrumb, Container } from 'react-bootstrap';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import useMounted from 'hooks/useMounted';


const StudentDetailsExportToExcel = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">

            {/* Page Heading */}
            <PageHeading heading="Student Details Export" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Student Report</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Admission</Breadcrumb.Item>
                <Breadcrumb.Item active>Student Details Export To Excel</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <div>
                                {hasMounted &&
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Session<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Student Filter<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Course/Year/Standard<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                            <Form.Label className="col-sm-2 col-form-label form-label" >Order By<span className="text-danger">*</span></Form.Label>
                                            <Col sm={4} className="mb-3 mb-lg-0">
                                                <Form.Select type="text" placeholder="Please Enter " id="mothertongue" required />
                                            </Col>
                                        </Row>
                                       
                                        <Row className='mb-3'>
                                                <Form.Check className="ms-3 col-sm-3 col-form-label form-label" type="checkbox" id="active">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Export to Excel</Form.Check.Label>
                                                </Form.Check> 
                                        </Row>
                                        <Row className='mb-3'>
                                                <Form.Check className="ms-3 col-sm-3 col-form-label form-label" type="checkbox" id="active">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Export to Excel For OBE</Form.Check.Label>
                                                </Form.Check> 
                                        </Row>
                                        <Row className='mb-3'>
                                                <Form.Check className="ms-3 col-sm-3 col-form-label form-label" type="checkbox" id="active">
                                                    <Form.Check.Input type="checkbox" />
                                                    <Form.Check.Label >Export to Excel For ABC ID</Form.Check.Label>
                                                </Form.Check> 
                                        </Row>
                                        <Row className="mb-3">
                                            <Col className="d-flex align-items-center justify-content-center">
                                                <Button variant="primary" type="submit">
                                                    Cancel
                                                </Button>
                                               
                                                <Button
                                                    variant="secondary"
                                                    type=""
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    Show
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

export default StudentDetailsExportToExcel


