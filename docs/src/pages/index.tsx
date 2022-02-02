import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('header', styles.header)}>
      <img src="img/logo.png" alt="DJSeed" />
      <h1>DJSeed</h1>
      <h2>Complicated concepts but like easier?</h2>
      <div className={clsx('buttons', styles.buttons)}>
        <Link
            className="button button--primary button--lg"
            to="/docs/starting">
            Get Started
          </Link>
        <Link
            className="button button--secondary button--lg"
            to="/docs/starting">
            Learn More
          </Link>
      </div>
      <div className={clsx('content', styles.content)}>
        <div className={clsx('itemm', styles.itemm)}>
          <h3>😀 Simple Setup</h3>
          <p>Next to no boilerplate or project scaffolding needed!</p>
        </div>
        <div className={clsx('itemm', styles.itemm)}>
          <h3>🛠️ Rich Features</h3>
          <p>Yeahhhh... this ones definitely a work in progress :)</p>
        </div>
        <div className={clsx('itemm', styles.itemm)}>
          <h3>📦 Lightweight</h3>
          <p>Compiled and pre-bundled ready for production!</p>
        </div>
        <div className={clsx('itemm', styles.itemm)}>
          <h3>🔑 Strictly Typed API</h3>
          <p>Complete statically typed APIs with Typescript.</p>
        </div>
        <div className={clsx('itemm', styles.itemm)}>
          <h3>🔓 Open Source</h3>
          <p>Entirely open source project, licensed under <a href="https://opensource.org/licenses/MIT">MIT</a></p>
        </div>
      </div>
    </div>
    // <header className={clsx('hero', styles.heroBanner)}>
    //   <div className={clsx('container', styles.container)}>
    //   </div>
    // </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Docs`}
      description="an advanced Minecraft Bedrock edition gametest wrapper.">
      <HomepageHeader />
    </Layout>
  );
}
