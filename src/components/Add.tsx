import { FormOutlined } from '@ant-design/icons';
import { Button, Input, PageHeader, message as messageDialog } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useRef } from 'react';
import Layout from './Layout';
import styles from './Add.module.css';
import TextAreaType from 'rc-textarea';
import { BookReqType } from '../types';

interface AddProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
  add: (book: BookReqType) => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout, add }) => {
  const titleRef = useRef<Input>(null);
  const messageRef = useRef<TextAreaType>(null);
  const authorRef = useRef<Input>(null);
  const urlRef = useRef<Input>(null);

  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <FormOutlined />
            Add Book
          </div>
        }
        subTitle="Add Your Book"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={logout}
            className={styles.button_logout}
          >
            Logout
          </Button>,
        ]}
      />
      <div className={styles.add}>
        <div className={styles.input_title}>
          Title
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder="Title" className={styles.input} ref={titleRef} />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea
            className={styles.input}
            rows={4}
            placeholder="Comment"
            ref={messageRef}
          />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}> *</span>
        </div>
        <div>
          <Input
            className={styles.input}
            placeholder="Author"
            ref={authorRef}
          />
        </div>
        <div className={styles.input_url}>
          URL
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder="URL" className={styles.input} ref={urlRef} />
        </div>
        <div className={styles.button_area}>
          <Button
            className={styles.button}
            size="large"
            loading={loading}
            onClick={click}
          >
            Add
          </Button>
        </div>
      </div>
    </Layout>
  );
  function click() {
    const title = titleRef.current!.state.value;
    const message = messageRef.current!.resizableTextArea.props.value as string;
    const author = authorRef.current!.state.value;
    const url = urlRef.current!.state.value;

    if (
      title === undefined ||
      message === undefined ||
      author === undefined ||
      url === undefined
    ) {
      messageDialog.error('Please fill out all input');
      return;
    }
    add({
      title,
      message,
      author,
      url,
    });
  }
};

export default Add;
