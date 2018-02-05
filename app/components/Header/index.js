import React, {Component} from 'react'
import logo from '../../assets/images/logo.png'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header className="site-header u-clearfix">
        <div className="contianer">
          <a href="/">
            <img className="logo" src={logo}/>
          </a>
          <div className="header-block">
            <nav className="header-nav">
              <ul id="" className="subnav-ul layoutSingleColumn layoutSingleColumn--wide">
                <li id="" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                  <a href="/">首页</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
                  <a href=""></a>
                  {/*<ul className="sub-menu">*/}

                  {/*<li id="" className="menu-item menu-item-type-taxonomy menu-item-object-category"*/}
                  {/*>*/}
                  {/*<a href=""></a>*/}
                  {/*</li>*/}
                  {/*</ul>*/}
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-block u-floatRight">
            <a className="header-action-item tougao" href="http://www.woshipm.com/#">投稿</a>
            <a href="" className="show-search"><span className="iconfont icon-search"></span></a>
            <a className="header-action-item" href="">注册/登录</a>
            <a href="" className="message--link u-marginRight10">
              <span className="svgIcon svgIcon--bell svgIcon--25px">
                <svg className="svgIcon-use" width="25" height="25" viewBox="-293 409 25 25">
                  <path
                    d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 0 0-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 0 0 1 1h3.49a3.079 3.079 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 0 1-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 0 1 4.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path>
                </svg>
              </span>
            </a>
            <div className="user-avatar">
              <a href="http://www.woshipm.com/u/288457">
                <img src="" alt="" height="30" width="30" className="avatar"/>
              </a>
              <div className="user-top-nav">
                <h4 className="user-name"></h4>
                <ul>
                  <li><a href="">我的文章</a></li>
                  <li><a href="">我的评论</a></li>
                  <li><a href="">我的收藏</a></li>
                  <li><a href="">我的订阅</a></li>
                  <li><a href="">我的主页</a></li>
                  <li><a href="">资料修改</a></li>
                </ul>
                <div className="user-logout">
                  <a href="">退出登录</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    )
  }
}

export default Header