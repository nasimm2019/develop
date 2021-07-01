import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Helmet from 'react-helmet';
import { GF_KEY, TITLE } from '../../constants/constants'
import ResizeObserver from "react-resize-observer";
import ReactGiphySearchbox from "react-giphy-searchbox";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <main className="container home">
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <h1>React Giphy Searchbox</h1>
      <div className="home__searchboxWrapper">
        <ReactGiphySearchbox
          apiKey={GF_KEY}
          onSelect={(item) => console.log(item)}
          masonryConfig={[
            { mq: width, columns: 3, imageWidth: width / 5, gutter: 1 }
          ]}
        />
      </div>
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </main>
  );
};

export default (withRouter(Home));
