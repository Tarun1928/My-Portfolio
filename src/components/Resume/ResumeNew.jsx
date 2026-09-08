import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Tarun_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const pdfOptions = { isEvalSupported: false };

function ResumeNew() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.min(1040, Math.floor(entry.contentRect.width)));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            role="link"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div ref={containerRef} className="resume-document">
            <Document
              file={pdf}
              options={pdfOptions}
              onLoadSuccess={({ numPages: pages }) => setNumPages(pages)}
              loading={<p role="status">Loading résumé…</p>}
              error={<p role="alert">The résumé preview could not load. Please use the Download CV link.</p>}
              className="d-flex flex-column align-items-center gap-3"
            >
              {width > 0 && Array.from({ length: numPages }, (_, index) => (
                <Page key={index + 1} pageNumber={index + 1} width={width} />
              ))}
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            role="link"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
