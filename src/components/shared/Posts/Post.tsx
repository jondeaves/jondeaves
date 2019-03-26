import Img from 'gatsby-image';
import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';
import Link from '../Link';

import PostStyles from './Post.styles';
import { IOwnProps, IProps, IStyles } from './Post.types';

// tslint:disable-next-line:no-var-requires
const config = require('../../../config');

export const Post: React.FunctionComponent<IProps> = ({ post, styles }) => {
  return (
    <article className={styles.container}>
      {post.node.cover && (
        <Img fluid={post.node.cover.fluid} title={post.node.cover.title} />
      )}

      <div className={styles.sectionWrapper}>
        <section className={styles.section}>
          <header>
            <h2 className={styles.heading}>{post.node.title}</h2>
          </header>

          {post.node.tags.length && <p>{post.node.tags[0]}</p>}

          <footer className={styles.footer}>
            <Link
              to={`${config.postPathPrefix}${post.node.slug}`}
              label={'Learn more'}
              className={styles.link}
            />
          </footer>
        </section>
      </div>
    </article>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(PostStyles)(Post);
