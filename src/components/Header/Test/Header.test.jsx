import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

describe("render header component", () => {
  test("with nav links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getByText(/home/i);

    expect(homeLink).not.toBeNull();
  });
});
