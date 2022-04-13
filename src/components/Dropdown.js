import React from "react"
import { DropdownButton, DropdownBox } from "./style"

const Dropdown = () => (
  <DropdownBox>
    <DropdownButton href="/">Home</DropdownButton>
    <DropdownButton href="/about">About</DropdownButton>
    <DropdownButton href="/resume">Resume</DropdownButton>
    <DropdownButton href="/contact">Contact</DropdownButton>
  </DropdownBox>
)

export default Dropdown