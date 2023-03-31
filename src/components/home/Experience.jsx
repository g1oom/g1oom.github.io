import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron fluid id="experiences" className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>

          <div className="container">
            <div className="main-timeline">
              {
                experiences.data.map((data, index) => {
                  return <ExperienceCard key={index} data={data} />
                })
              }
            </div>
          </div>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;