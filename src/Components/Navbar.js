import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

export default class ButtonAppBar extends React.Component {
	render() {
		return (
			<Navbar expand="lg" style={{ backgroundColor: '#0066A7' }}>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/" style={{ color: '#fff', fontWeight: 'bold' }}>
							Ekart
						</Nav.Link>
						<Nav.Link href="/" style={{ color: '#fff', fontWeight: 'bold' }}>
							My Orders
						</Nav.Link>

						<Navbar.Collapse className="justify-content-end">
							<Nav.Link href="/login" style={{ color: '#fff', fontWeight: 'bold' }}>
								Login/Signup
							</Nav.Link>
						</Navbar.Collapse>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
