import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import Post from './Post';

import PostsStyles from './Posts.styles';
import { IOwnProps, IProps, IStyles } from './Posts.types';

export const Posts: React.FunctionComponent<IProps> = ({
  posts,
  styles,
}: IProps) => {
  return (
    <div className={styles.container}>
      {posts.edges.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(PostsStyles as any)(Posts);
