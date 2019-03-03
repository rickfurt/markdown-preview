import React from 'react';
import { MarkdownPreview } from 'react-marked-markdown';

const post = {
    content:'test'
}

 
const Post = ({ post }) => (
  <div>
    <MarkdownPreview value={ post.content }/>
  </div>
);
 
export default Post;
 