// import node module libraries
import Link from 'next/link';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
    Image,
    Dropdown,
    ListGroup,
    Form,
    Badge,
    Button,
} from 'react-bootstrap';

// simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// import data files
// import NotificationList from 'data/Notification';

// import hooks
import useMounted from 'hooks/useMounted';

const QuickMenu = () => {

    const hasMounted = useMounted();

    // const today = new Date().toDateString();
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;

    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const collegeName = "Sinhgad Academy of Engineering Kondhwa Bk, Pune";

    const Notifications = () => {
        return (
            <SimpleBar style={{ maxHeight: '300px' }}>
                <ListGroup variant="flush">
                    {/* {NotificationList.map(function (item, index) {
                        return (
                            <ListGroup.Item className={index === 0 ? 'bg-light' : ''} key={index}>
                                <Row>
                                    <Col>
                                        <Link href="#" className="text-muted">
                                            <h5 className=" mb-1">{item.sender}</h5>
                                            <p className="mb-0"> {item.message}</p>
                                        </Link>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        );
                    })} */}
                </ListGroup>
            </SimpleBar>
        );
    }

    const QuickMenuDesktop = () => {

        const buttonStyle = {
            background: '#959595',  // Fallback color in case gradients are not supported
            background: 'linear-gradient(to right, #959595 0%, #0D0D0D 46%, #010101 50%, #0A0A0A 53%, #4E4E4E 76%, #383838 87%, #1B1B1B 100%)',
            color: 'white',  // Text color

        };

        return (
            <ListGroup as="ul" bsPrefix='navbar-nav' className="navbar-right-wrap ms-auto d-flex nav-top-wrap">
                <Form.Label className='mt-2' style={{ marginRight: '15px' }} >{collegeName}</Form.Label>
                <Dropdown as="li" className="stopevent">
                    <Dropdown.Toggle as="a"
                        bsPrefix=' '
                        id="dropdownNotification"
                        className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted">
                        <i className="fe fe-bell"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end py-0"
                        aria-labelledby="dropdownNotification"
                        align="end"
                        show
                    >
                        <Dropdown.Item className="mt-3" bsPrefix=' ' as="div"  >
                            <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                                <span className="h4 mb-0">Notifications</span>
                                <Link href="/" className="text-muted">
                                    <span className="align-middle">
                                        <i className="fe fe-settings me-1"></i>
                                    </span>
                                </Link>
                            </div>
                            <Notifications />
                            <div className="border-top px-3 pt-3 pb-3">
                                <Link href="/dashboard/notification-history" className="text-link fw-semi-bold">
                                    See all Notifications
                                </Link>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as="li" className="ms-2">
                    <Dropdown.Toggle
                        as="a"
                        bsPrefix=' '
                        className="rounded-circle"
                        id="dropdownUser">
                        <div className="avatar avatar-md avatar-indicators avatar-online">
                            <Image alt="avatar" src='/images/avatar/avatar-4.jpg' className="rounded-circle" />
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-end "
                        align="end"
                        aria-labelledby="dropdownUser"
                        show
                    >
                        <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=' '>
                            <div className="lh-1 ">
                                <h4 className="mb-2 " style={{ whiteSpace: 'nowrap' }}>Hello, Shweta M. Katore</h4>

                                <div className="avatar avatar-xxl avatar-online ms-7 mb-2">
                                    <Image alt="avatar" src='/images/avatar/avatar-4.jpg' className="rounded-circle" />
                                </div>
                                <h5 className="mb-2 ms-1">shweta@gserp.gmail.com</h5>
                                <h5 className="mb-2 ms-1">Session: 2023-2024</h5>
                                <h5 className="mb-2 ms-1">Working Date: {today}</h5>
                                <h5 className="mb-2 ms-1">Counter: <Badge bg="secondary">25</Badge></h5>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link href="#" style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                        <Button style={buttonStyle} >My Profile</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" dropdown-divider mt-3 mb-2"></div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                            <i className="fe fe-activity me-2"></i> Activity Log
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <i className="fe fe-settings me-2"></i> Account Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="fe fe-power me-2"></i>Sign Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ListGroup>
        )
    }

    const QuickMenuMobile = () => {
        return (
            <ListGroup as="ul" bsPrefix='navbar-nav' className="navbar-right-wrap ms-auto d-flex nav-top-wrap">
                <Dropdown as="li" className="stopevent">
                    <Dropdown.Toggle as="a"
                        bsPrefix=' '
                        id="dropdownNotification"
                        className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted">
                        <i className="fe fe-bell"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end py-0"
                        aria-labelledby="dropdownNotification"
                        align="end"
                    >
                        <Dropdown.Item className="mt-3" bsPrefix=' ' as="div"  >
                            <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                                <span className="h4 mb-0">Notifications</span>
                                <Link href="/" className="text-muted">
                                    <span className="align-middle">
                                        <i className="fe fe-settings me-1"></i>
                                    </span>
                                </Link>
                            </div>
                            <Notifications />
                            <div className="border-top px-3 pt-3 pb-3">
                                <Link href="/dashboard/notification-history" className="text-link fw-semi-bold">
                                    See all Notifications
                                </Link>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as="li" className="ms-2">
                    <Dropdown.Toggle
                        as="a"
                        bsPrefix=' '
                        className="rounded-circle"
                        id="dropdownUser">
                        <div className="avatar avatar-md avatar-indicators avatar-online">
                            <Image alt="avatar" src='/images/avatar/avatar-1.jpg' className="rounded-circle" />
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        className="dropdown-menu dropdown-menu-end "
                        align="end"
                        aria-labelledby="dropdownUser"
                    >
                        <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=' '>
                            <div className="lh-1 ">
                                <h5 className="mb-1">Shweta M. Katore</h5>
                                <Link href="#" className="text-inherit fs-6">View my profile</Link>
                            </div>
                            <div className=" dropdown-divider mt-3 mb-2"></div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                            <i className="fe fe-user me-2"></i> Edit Profile
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                            <i className="fe fe-activity me-2"></i> Activity Log
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <i className="fe fe-settings me-2"></i> Account Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <i className="fe fe-power me-2"></i>Sign Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ListGroup>
        )
    }

    return (
        <Fragment>
            {hasMounted && isDesktop ? <QuickMenuDesktop /> : <QuickMenuMobile />}
        </Fragment>
    )
}

export default QuickMenu;