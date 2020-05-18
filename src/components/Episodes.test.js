import React from "react";
import Episodes from "./Episodes";
import { render, fireEvent, wait } from "@testing-library/react";
import { data } from "../Data";

test("Season 1 data displays (only first 2 episodes)", async () => {
  const { getByText } = render(<Episodes episodes={data._embedded.episodes} />);

  getByText("Chapter Two: The Weirdo on Maple Street");
});
