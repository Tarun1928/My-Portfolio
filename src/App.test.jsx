import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

vi.mock("./components/Particle", () => ({ default: () => null }));
vi.mock("./components/Home/Type", () => ({ default: () => "Software Developer" }));

beforeEach(() => {
  window.history.replaceState({}, "", "/");
});

test("renders primary navigation links", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
});

test("navigates to the lazy-loaded Projects page", async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole("link", { name: "Projects" }));
  expect(await screen.findByRole("heading", { name: /my recent works/i })).toBeInTheDocument();
  expect(window.location.pathname).toBe("/project");
});

test("replaces an unknown route without adding a history entry", () => {
  window.history.replaceState({}, "", "/missing-page");
  const historyLength = window.history.length;
  render(<App />);
  expect(window.location.pathname).toBe("/");
  expect(window.history.length).toBe(historyLength);
});

test("all home page links have accessible names and new tabs suppress the referrer", () => {
  render(<App />);
  for (const link of screen.getAllByRole("link")) {
    expect(link).toHaveAccessibleName();
    if (link.target === "_blank") {
      expect(link.rel.split(" ")).toContain("noreferrer");
    }
  }
});
