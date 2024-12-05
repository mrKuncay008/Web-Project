import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button}  from "@nextui-org/react";
import { Link, Head } from '@inertiajs/react';
import kelLogo from "../../../../public/image/logoNew.png"

function Nav ({canLogin, canRegister}) {
    return(
        <>
        <Navbar className="bg-gray-800 text-gray-200">
          <NavbarBrand>
          <img src={kelLogo} width={100}  />
            <p className="font-bold">KELOMPOK 7</p>
          </NavbarBrand>
          <NavbarContent className="text-gray-200 font-bold sm:flex gap-4" justify="center">
            <h1>LANDING PAGE</h1>
          </NavbarContent>
          <NavbarContent justify="end">
            {canLogin && (
            <NavbarItem className="font-bold  lg:flex">
              <Link  href="/login">
                <Button className="text-white font-bold" as="" color="dark" variant="flat">
                        Login
                </Button>
              </Link>
            </NavbarItem>
            )}

            {canRegister && (
            <NavbarItem>
                <Link href="/register">
                    <Button className="text-white font-bold" as="" color="primary" variant="flat">
                        Sign Up
                    </Button>
                </Link>
            </NavbarItem>
            )}
          </NavbarContent>
        </Navbar>
        </>
    );
}

export default Nav;