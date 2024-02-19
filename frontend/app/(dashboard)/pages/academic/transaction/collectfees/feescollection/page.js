"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-feather";

const FeesCollection = () => {
    const hasMounted = useMounted();

    return (
        <Container fluid className="p-6">
            {/* Page Heading */}
            <PageHeading heading="Fees Collection" />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Transactionn</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Collect Fees</Breadcrumb.Item>
                <Breadcrumb.Item active>Fees Collection</Breadcrumb.Item>
            </Breadcrumb>
            <Row className="mb-8">
                <Col xl={12} lg={8} md={12} xs={12}>
                    <Card>
                        <Card.Body>
                            <Container fluid className="p-3">
                                <Row>
                                    <Col>
                                        <PageHeading heading="Student Details" />
                                        <Row className="mb-3">
                                            <Col xl={12} lg={8} md={12} xs={12}>
                                                <Card>
                                                    <Card.Body>
                                                        <div>
                                                            {hasMounted && (
                                                                <Form>
                                                                    <Col >
                                                                        <Row className="mb-3">
                                                                            <Form.Label
                                                                                className="col-sm-3 col-form-label form-label"

                                                                            >
                                                                                Search Crieteria<span className="text-danger">*</span>
                                                                            </Form.Label>
                                                                            <Col>
                                                                                <Form.Check
                                                                                    label="Student Id."
                                                                                    type="radio"
                                                                                />
                                                                            </Col>
                                                                            <Col>
                                                                                <Form.Check
                                                                                    label="Name"
                                                                                    type="radio"
                                                                                />
                                                                            </Col>
                                                                            <Col>
                                                                                <Form.Check
                                                                                    label="Roll No"
                                                                                    type="radio"
                                                                                />
                                                                            </Col>
                                                                            <Col>
                                                                                <Form.Check
                                                                                    label="User Field"
                                                                                    type="radio"
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Student<span className="text-danger">*</span>
                                                                        </Form.Label>
                                                                        <Col sm={6} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Please Enter Student ID."
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Col className="d-flex align-items-center justify-content-center" sm={3}>
                                                                            <Button variant="primary" type="submit">
                                                                                Show Balance
                                                                            </Button>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"

                                                                        >
                                                                            Course
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                disabled
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Full Name
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                disabled
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"

                                                                        >
                                                                            Fee Type
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                disabled
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Student Type
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                disabled
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"

                                                                        >
                                                                            Mobile No.
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"

                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Bal Fees
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                disabled
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Paid /Concession /Adjusted Fee
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                disabled
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Amount<span className="text-danger">*</span>
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                disabled
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Student Remark
                                                                        </Form.Label>
                                                                        <Col sm={9} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Remark
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                disabled
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Adm Through
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Select
                                                                                type="text"
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Payment Option
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Select
                                                                                type="text"

                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                        >
                                                                            Payment ID
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"

                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </Form>
                                                            )}
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid className="p-3">
                                <Row>
                                    <Col>
                                        <PageHeading heading="Payment Info" />
                                        <Row className="mb-3">
                                            <Col xl={12} lg={8} md={12} xs={12}>
                                                <Card>
                                                    <Card.Body>
                                                        <div>
                                                            {hasMounted && (
                                                                <Form>

                                                                    <Row className="mb-3">
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Payment Mode<span className="text-danger">*</span>
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Select
                                                                                type="text"
                                                                                placeholder="Please Select"
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                        <Form.Label
                                                                            className="col-sm-3 col-form-label form-label"
                                                                            htmlFor="fullName"
                                                                        >
                                                                            Amount<span className="text-danger">*</span>
                                                                        </Form.Label>
                                                                        <Col sm={3} className="mb-3 mb-lg-0">
                                                                            <Form.Control
                                                                                type="text"
                                                                                placeholder="Please Select"
                                                                                id="session"
                                                                                required
                                                                            />
                                                                        </Col>
                                                                    </Row>

                                                                    <Col className="d-flex align-items-center justify-content-center">
                                                                        <Button variant="primary" type="submit">
                                                                            Add
                                                                        </Button>
                                                                    </Col>
                                                                </Form>
                                                            )}
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                            <Col className="d-flex align-items-center justify-content-center">
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                                <Button variant="secondary" type="submit" style={{ marginLeft: "10px" }}>
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit" style={{ marginLeft: "10px" }}>
                                    Adjust
                                </Button>
                            </Col>
                            <Link /><a href=""> Click here for fees Concession</a><br/>
                            <Link /><a href=""> Click here for exam fees collection(subject fee)</a><br/>
                            <Link /><a href=""> Click here for get fees details</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FeesCollection;
