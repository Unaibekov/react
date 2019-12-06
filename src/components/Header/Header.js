import React from "react";
import {
  Container,
  Icon,
  Link,
  List,
  ListItem,
  Offcanvas,
  OffcanvasContainer,
  Navbar,
  NavItem,
  NavbarDropdown,
  NavbarContainer,
  NavbarSticky,
  Section
} from "uikit-react";

const Header = () => {
    return (
        <NavbarSticky>
            <NavbarContainer>
                <Navbar left>
                    <NavItem>
                        <Link>Dropdown</Link>
                        <NavbarDropdown>
                        <NavItem>
                            <Link href="#">Link</Link>
                        </NavItem>
                        </NavbarDropdown>
                    </NavItem>
                    <NavItem>
                        <Link href="#">Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#">Link</Link>
                    </NavItem>
                </Navbar>
            </NavbarContainer>
        </NavbarSticky>
    );
}

export default Header;
