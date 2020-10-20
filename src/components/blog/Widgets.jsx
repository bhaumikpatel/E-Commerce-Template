import React, { lazy } from "react";
const About = lazy(() => import("../../components/blog/About"));
const Follow = lazy(() => import("../../components/blog/Follow"));
const MostViewed = lazy(() => import("../../components/blog/MostViewed"));
const Tags = lazy(() => import("../../components/blog/Tags"));
const Archives = lazy(() => import("../../components/blog/Archives"));

const Widgets = (props) => {
  return (
    <React.Fragment>
      <About title="About Me" />
      <Follow title="Follow Me" />
      <MostViewed title="Most Viewed" />
      <Tags title="Tags" />
      <Archives title="Archives" />
    </React.Fragment>
  );
};

export default Widgets;
