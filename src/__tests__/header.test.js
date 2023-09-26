import React from "react";
import Header from "../components/Header";
import {render, screen } from "@testing-library/react";

test('Header component renders without errors',()=>{
    render(<Header/>)
    const headerElement=screen.getByText('header1');
    expect(headerElement).toBeInTheDocument();
})


