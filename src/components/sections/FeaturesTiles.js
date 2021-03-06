import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const highlight = {
    color: "#A7DAD9",
  };

  const LinkHover = styled(Link)`
    color: #a7dad9;
    font-weight: bold;
    line-height: 14px;
    text-decoration: underline;

    &:link {
      color: #a7dad9;
      text-decoration: underline;
    }

    &:visited {
      color: #a7dad9;
      text-decoration: underline;
    }

    &:hover {
      color: white;
      font-size: 20px;
      text-decoration: underline;
    }
  `;

  const sectionHeader = {
    title: "About Me",
    paragraph:
      "Graduated from Otago University in 2019 with a BSc in Information Science and Computer Science. Started as an iOS developer at Trade Me later that year. ",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <FontAwesomeIcon icon="mobile-alt" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Mobile Experience</h4>
                  <p className="m-0 text-sm">
                    My mobile experience primarily constists of native{" "}
                    <LinkHover
                      to={{
                        pathname:
                          "https://github.com/bradwindy/MVVM-RxSwift-Sensor-App",
                      }}
                      target="_blank"
                    >
                      iOS
                    </LinkHover>{" "}
                    development. Alongside that I have also created several apps
                    in both{" "}
                    <LinkHover
                      to={{
                        pathname: "https://github.com/bradwindy/reminderplus",
                      }}
                      target="_blank"
                    >
                      {" "}
                      Flutter
                    </LinkHover>{" "}
                    and{" "}
                    <LinkHover
                      to={{
                        pathname: "https://github.com/bradwindy/rnimageproject",
                      }}
                      target="_blank"
                    >
                      React Native
                    </LinkHover>{" "}
                    and I am currently working on upskilling in native{" "}
                    <b style={highlight}> Android </b> development.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <FontAwesomeIcon icon="laptop" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Full Stack Experience</h4>
                  <p className="m-0 text-sm">
                    I have experience with, and developed in such frameworks,
                    platforms, and languages as:{" "}
                    <LinkHover
                      to={{
                        pathname:
                          "https://github.com/bradwindy/personal-landing-page",
                      }}
                      target="_blank"
                    >
                      React{" "}
                    </LinkHover>{" "}
                    and the{" "}
                    <LinkHover
                      to={{
                        pathname: "https://github.com/bradwindy/OneRoom",
                      }}
                      target="_blank"
                    >
                      MERN
                    </LinkHover>{" "}
                    stack,{" "}
                    <LinkHover
                      to={{
                        pathname:
                          "https://github.com/bradwindy/azure-multivm-webapp",
                      }}
                      target="_blank"
                    >
                      Cloud VMs
                    </LinkHover>
                    ,{" "}
                    <LinkHover
                      to={{
                        pathname:
                          "https://github.com/bradwindy/nzmsa-project-p2-api",
                      }}
                      target="_blank"
                    >
                      .NET
                    </LinkHover>
                    ,<b style={highlight}> Docker</b>,{" "}
                    <LinkHover
                      to={{
                        pathname:
                          "https://github.com/bradwindy/angular-course-proj",
                      }}
                      target="_blank"
                    >
                      Angular
                    </LinkHover>{" "}
                    and much, much more!
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <FontAwesomeIcon icon="code" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Other Development Experience</h4>
                  <p className="m-0 text-sm">
                    I am currently working on refreshing my{" "}
                    <LinkHover
                      to={{
                        pathname: "https://github.com/bradwindy/TFLearnings",
                      }}
                      target="_blank"
                    >
                      ML
                    </LinkHover>{" "}
                    knowledge, and creating my own operating system in{" "}
                    <LinkHover
                      to={{
                        pathname: "https://github.com/bradwindy/brad_os",
                      }}
                      target="_blank"
                    >
                      Rust
                    </LinkHover>
                    . Throughout university I also worked on several projects
                    using
                    <b style={highlight}> Python</b>,<b style={highlight}> R</b>
                    , and{" "}
                    <LinkHover
                      to={{
                        pathname:
                          "https://github.com/bradwindy/shoppingCartProject",
                      }}
                      target="_blank"
                    >
                      Java
                    </LinkHover>{" "}
                    and
                    <b style={highlight}> C </b> too.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <FontAwesomeIcon icon="sync-alt" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Agile Experience</h4>
                  <p className="m-0 text-sm">
                    I have experience with agile methodologies such as scrum and
                    kanban. I am also familiar with tools to manage these
                    processes such as Jira.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <FontAwesomeIcon icon="code-branch" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Version Control Experience</h4>
                  <p className="m-0 text-sm">
                    I use git for all my personal projects and have experiences
                    with methodologies such as git workflow. I also have
                    integrated git in many personal CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <FontAwesomeIcon icon="user" />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Other Interests</h4>
                  <p className="m-0 text-sm">
                    Outside of software development, I am really interested in
                    photography, design, vinyl, watches and tinkering with
                    computers of all kinds. I have also volunteered on Sprit of
                    New Zealand and in both my local Rotary Club and Hospice
                    Shop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
