import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { SlSpeech } from 'react-icons/sl';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BlackHr from '../common/BlackHr';
import Comment from './Comment';

const supabase = createClient('https://hosygkmrpmwxwrqoqlhq.supabase.co', import.meta.env.VITE_COMMENTS_SUPABASE_KEY);

const Comments = () => {
  const { detailId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    const { data, error } = await supabase.from('comments').select().eq('pageId', detailId);

    if (!error) {
      setComments(data);
    } else {
      console.log(error);
    }
  }

  return (
    <StWrapper>
      <StTitleWrapper>
        <StTitleImg />
        <StTitle>댓글</StTitle>
        <StCommentsNum>{comments.length}</StCommentsNum>
      </StTitleWrapper>
      <BlackHr />
      <StCommentsList>
        {comments.map((comment) => (
          <Comment
            key={comment.commentId}
            writer={comment.writer}
            content={comment.content}
            date={comment.date}
            like={comment.like}
          />
        ))}
      </StCommentsList>
    </StWrapper>
  );
};

export default Comments;

const StWrapper = styled.section``;

const StTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0 15px;
  gap: 3px;
`;

const StTitleImg = styled(SlSpeech)`
  padding-top: 2px;
  width: 20px;
`;

const StTitle = styled.span`
  font-size: 18px;
`;

const StCommentsNum = styled.span`
  font-size: 20px;
  color: blue;
`;

const StCommentsList = styled.ul``;
