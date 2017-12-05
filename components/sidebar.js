import A from './a';
import styled from 'styled-components';
import Folder from './folder';
import Link from 'next/link';
import colors from './colors';
import { connect } from 'react-redux';
import { hideMenu } from '../actions';

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 10px 20px 100px;
  background: rgba(10, 10, 10, 0.6);
  border-right: 1px solid rgb(24,26,31);
  text-shadow: 0 2px 5px black;
  overflow: auto;
  * {
    font-weight: 400;
  }
  h4 {
    margin: 1em 0 0;
    font-weight: 700;
  }
  ul {
    padding-left: 0;
    margin: 0;
  }
  li {
    display: block;
    width: 100%;
    line-height: 2.5em;
    &.active {
      box-shadow: -200px 0 0 black, 200px 0 0 black;
      background: black;
      * {
        font-weight: 700;
      }
    }
  }
  li a {
    display: block;
    text-decoration: none;
    color: ${colors.syntaxFg};
    &:hover {
      color: ${colors.syntaxAccent};
      text-decoration: underline;
    }
    &:visited {
      color: ${colors.syntaxFg};
    }
  }
`;

const Header = styled.div`
  margin-bottom: 30px;
  .logo {
    width: 100%;
    padding: 5px 10px;
    margin-left: -10px;
    a {
      display: block;
    }
  }
  .banners {
    width: 180px;
    margin: 20px auto;
    transform: translateX(-5px);
    display: flex;
    justify-content: space-between;
    img {
      height: 20px;
    }
  }
`;

const isActive = (path, to) => {
  const [_, pathname, query, hash] = (to || '').match(/^([^#\?]*)\??([^#]*)#?(.*)$/);
  return path === pathname;
}

const Li = connect(s => s)(({ children, to, path, dispatch, lang }) => (
  <div onClick={() => dispatch(hideMenu())}>
    {isActive(path, to) ? (
      <li className="active">
        {children}
      </li>
    ) : (
      <li>
        <Link href={to}><a>{children}</a></Link>
      </li>
    )}
  </div>
));

const Sidebar = ({ path, lang }) => (
  <Nav>
    <Header>
      <Link href={lang === 'en' ? '/' : `/?lang=${lang}`}>
        <a>
          <img className="logo"  src="/static/images/logo_header.png"/>
        </a>
      </Link>
      <div className="banners">
        <a className="github" target="\_blank" href="https://github.com/fand/atom-veda">
          <img alt="GitHub Stars" src="https://img.shields.io/github/stars/fand/atom-veda.svg?style=social"/>
        </a>
        <a className="twitter" target="\_blank" href="https://twitter.com/search?f=tweets&q=%23vedajs&src=typd">
          <img alt="hashtag #vedajs" src="/static/images/hashtag.png"/>
        </a>
      </div>
    </Header>

    <li>VEDA for Atom</li>
    {lang === 'en' &&
      <ul style={{ textIndent: '20px' }}>
        <Li path={path} to="/install">
          Install
        </Li>
        <Li path={path} to="/usage">
          Usage
        </Li>
        <Li path={path} to="/settings">
          Settings
        </Li>
        <Li path={path} to="/features">
          Features
        </Li>
        <ul style={{ textIndent: '40px' }}>
          <Li path={path} to="/features/image">Images & Videos</Li>
          <Li path={path} to="/features/audio">Audio</Li>
          <Li path={path} to="/features/midi">MIDI</Li>
          <Li path={path} to="/features/osc">OSC</Li>
          <Li path={path} to="/features/webcam">WebCam</Li>
          <Li path={path} to="/features/keyboard">Keyboard</Li>
          <Li path={path} to="/features/gamepad">Gamepad</Li>
        </ul>
      </ul>
    }
    {lang === 'ja' &&
      <ul style={{ textIndent: '20px' }}>
        <Li path={path} to="/install?lang=ja">
          インストール
        </Li>
        <Li path={path} to="/usage?lang=ja">
          操作方法
        </Li>
        <Li path={path} to="/settings?lang=ja">
          設定
        </Li>
        <Li path={path} to="/features?lang=ja">
          機能一覧
        </Li>
        <ul style={{ textIndent: '40px' }}>
          <Li path={path} to="/features/image?lang=ja">画像/動画</Li>
          <Li path={path} to="/features/audio?lang=ja">音声入力</Li>
          <Li path={path} to="/features/midi?lang=ja">MIDI入力</Li>
          <Li path={path} to="/features/osc?lang=ja">OSC</Li>
          <Li path={path} to="/features/webcam?lang=ja">Webカメラ</Li>
          <Li path={path} to="/features/keyboard?lang=ja">キーボード</Li>
          <Li path={path} to="/features/gamepad?lang=ja">ゲームパッド</Li>
        </ul>
      </ul>
    }
    <Li path={path} to="/vedajs">VEDA.js</Li>
    <Li path={path} to="/faq">FAQ</Li>
    <Li path={path} to="/contributing">CONTRIBUTING</Li>
  </Nav>
);

export default connect(s => s)(Sidebar);
