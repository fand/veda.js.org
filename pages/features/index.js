import Article from '../../components/article';
import parse from '../parse';
import en from './index.md';
import ja from './index.ja.md';
import { withReduxSaga } from '../../store';

export default withReduxSaga(() => (
  <Article path="/features/image"
    article={{
      en: parse(en),
      ja: parse(ja),
    }}/>
));
