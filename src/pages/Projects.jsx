import React from "react";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Over the past year, I've been fortunate to work on various projects
          that have challenged and inspired me. The ones featured here are
          particularly meaningful to me. Many are open-source, and I encourage
          you to dive into the code. If something catches your eye, I'd love to
          hear your thoughts or see your contributions. Let's collaborate and
          make these projects even better together!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div>
            <div className={`btn-black rounded-xl ${project.theme}`} />
            <div>
              <img />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
