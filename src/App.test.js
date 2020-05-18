import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { data } from "./Data";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from "@testing-library/user-event";

jest.mock("./api/fetchShow");

// test("App renders", () => {
//     mockFetchShow.mockResolvedValueOnce(data);
//   render(<App />);
// });

test("renders data after API is called", async () => {
  mockFetchShow.mockResolvedValueOnce(data);
  //   console.log(mockFetchShow.mockResolvedValueOnce(data));

  const { getByText } = render(<App />);

  await waitFor(() => {
    const dropdown = getByText(/Select a season/i);
    dropdown.value = "Season 1";
    expect(dropdown).toHaveValue("Season 1");
  });
});
