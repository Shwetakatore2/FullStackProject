"use client";
// import node module libraries
import { Alert, Badge, Breadcrumb, Container } from "react-bootstrap";
import { Col, Row, Form, Card, Button } from "react-bootstrap";

// import widget as custom components
import { PageHeading } from "widgets";

// import sub components
import useMounted from "hooks/useMounted";

const SelectedFieldReport = () => {
  const hasMounted = useMounted();

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Selected Field Report" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Transaction</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Data Entry</Breadcrumb.Item>
        <Breadcrumb.Item active>Selected Field Report</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mb-8">
        <Col xl={12} lg={8} md={12} xs={12}>
          <Card>
            <Card.Body>
              <div>
                {hasMounted && (
                  <Form>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Session<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select"
                          id="session"
                          required
                        />
                      </Col>
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Courses<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={3} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Select"
                          id="session"
                          required
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Form.Label
                        className="col-sm-2 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        CashBook<span className="text-danger">*</span>
                      </Form.Label>
                      <Col sm={4} className="mb-3 mb-lg-0">
                        <Form.Select
                          type="text"
                          placeholder="Please Enter "
                          id="session"
                          required
                        />
                      </Col>
                      
                      <Col sm={3} >
                        
                      </Col>
                    </Row>
                    
                    <Row className="align-items-center">
                      <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Button
                          variant="primary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Export to Excel
                        </Button>
                        <Button
                          variant="primary"
                          type=""
                          style={{ marginLeft: "10px" }}
                        >
                          Report
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
                    <Form.Label
                        className="col-sm-12 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Fields
                      </Form.Label>
                      <Form.Label
                        className="col-sm-12 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Order By
                      </Form.Label>
                      <Form.Label
                        className="col-sm-12 col-form-label form-label"
                        htmlFor="fullName"
                      >
                        Condition
                      </Form.Label>
                  </Form>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectedFieldReport;
