import React from "react"
import { DropdownButton, DropdownBox } from "./style"
import {Link} from 'react-router-dom';

const Dropdown = () => (
  <DropdownBox>
    {/* <DropdownButton as={Link} to="/">Home</DropdownButton>
    <DropdownButton as={Link} to="/about">About</DropdownButton>
    <DropdownButton as={Link} to="/resume">Resume</DropdownButton>
    <DropdownButton as={Link} to="/contact">Contact</DropdownButton> */}
    <DropdownButton href="/">Home</DropdownButton>
    <DropdownButton href="/about">About</DropdownButton>
    <DropdownButton href="/resume">Resume</DropdownButton>
    <DropdownButton href="/contact">Contact</DropdownButton>
  </DropdownBox>
)

export default Dropdown