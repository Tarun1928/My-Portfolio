import { act, render, screen } from "@testing-library/react";
import ResumeNew from "./ResumeNew";

const pdfMock = vi.hoisted(() => ({ props: null }));

vi.mock("../Particle", () => ({ default: () => null }));
vi.mock("react-pdf", () => ({
  pdfjs: { GlobalWorkerOptions: {} },
  Document: (props) => {
    pdfMock.props = props;
    return <div>{props.children}</div>;
  },
  Page: ({ pageNumber, width }) => (
    <div role="img" aria-label={`Résumé page ${pageNumber}`} style={{ width }} />
  ),
}));

let resize;
let disconnect;

beforeEach(() => {
  disconnect = vi.fn();
  vi.stubGlobal("ResizeObserver", class {
    constructor(callback) { resize = callback; }
    observe() {}
    disconnect = disconnect;
  });
});

afterEach(() => vi.unstubAllGlobals());

test("renders every PDF page and adapts to the available width", () => {
  const { unmount } = render(<ResumeNew />);
  act(() => {
    resize([{ contentRect: { width: 350 } }]);
    pdfMock.props.onLoadSuccess({ numPages: 2 });
  });
  expect(screen.getAllByRole("img")).toHaveLength(2);
  expect(screen.getByRole("img", { name: "Résumé page 1" })).toHaveStyle({ width: "350px" });
  act(() => resize([{ contentRect: { width: 1400 } }]));
  expect(screen.getByRole("img", { name: "Résumé page 2" })).toHaveStyle({ width: "1040px" });
  expect(pdfMock.props.options.isEvalSupported).toBe(false);
  unmount();
  expect(disconnect).toHaveBeenCalledOnce();
});

test("keeps the PDF accessible before the preview loads", () => {
  render(<ResumeNew />);
  for (const link of screen.getAllByRole("link", { name: /download cv/i })) {
    expect(link.getAttribute("href")).toMatch(/Tarun_Resume\.pdf$/);
    expect(link.rel).toContain("noreferrer");
  }
});
