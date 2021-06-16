import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X06InsightsPageTablet from "./components/X06InsightsPageTablet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|06-insights-page-tablet)">
          <X06InsightsPageTablet {...x06InsightsPageTabletData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-1@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame144Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const button8Data = {
    children: "VIEW DETAILS",
};

const insightsCardData = {
    x1600I27322861202: "BBMP",
    text2: "Property Tax",
    button8Props: button8Data,
};

const button82Data = {
    children: "VIEW DETAILS",
};

const insightsCard2Data = {
    x1600I27322862202: "BWSSB",
    propertyTaxI27322: "Water Supply",
    button8Props: button82Data,
};

const button83Data = {
    children: "VIEW DETAILS",
};

const insightsCard3Data = {
    x1600I27322864202: "BESCOM",
    propertyTaxI27322: "Electricity Provider",
    button8Props: button83Data,
};

const button84Data = {
    children: "VIEW DETAILS",
};

const insightsCard4Data = {
    x1600I27322865202: "Procedure",
    propertyTaxI27322: "Steps taken for Construction",
    button8Props: button84Data,
};

const button85Data = {
    children: "VIEW DETAILS",
};

const insightsCard5Data = {
    x1600I27322867202: "Vaastu",
    propertyTaxI27322: "Boost positive energy in home",
    button8Props: button85Data,
};

const button86Data = {
    children: "VIEW DETAILS",
};

const insightsCard6Data = {
    x1600I27322868202: "Bye Laws",
    propertyTaxI27322: "Legal Documentation",
    button8Props: button86Data,
};

const button87Data = {
    children: "VIEW DETAILS",
};

const insightsCard7Data = {
    x1600I27322869202: "Tips & Ideas",
    propertyTaxI27322: "Construction Tips & Ideas",
    button8Props: button87Data,
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group872Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-154@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
    facebookAppSymbolProps: facebookAppSymbolData,
    twitterProps: twitterData,
};

const footer5Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-5@2x.svg",
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-20@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-21@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-14@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-15@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-16@2x.svg",
    text15: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text14: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    projects: "Projects",
    gallery: "Gallery",
    knowledgeTransfer: "Knowledge Transfer",
    blogs: "Blogs",
    faqs: "FAQ’s",
    group872Props: group872Data,
};

const x06InsightsPageTabletData = {
    insights: "Insights",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-1@1x.png",
    text149: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    frame144Props: frame144Data,
    insightsCardProps: insightsCardData,
    insightsCard2Props: insightsCard2Data,
    insightsCardProps2: insightsCard3Data,
    insightsCard2Props2: insightsCard4Data,
    insightsCardProps3: insightsCard5Data,
    insightsCard2Props3: insightsCard6Data,
    insightsCard7Props: insightsCard7Data,
    footer5Props: footer5Data,
};

