import React, {Component} from 'react'

class Nav extends Component {
  constructor() {
    super()
  }

  render() {
    return (

      <div className="header-block">
        <nav className="header-nav">
          <ul id="" className="subnav-ul layoutSingleColumn layoutSingleColumn--wide">
            <li id="" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
              <a href="/">首页</a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home">
              <a href="">666</a>
              <span className="fa fa-angle-down"></span>
              <ul className="sub-menu">

                <li id="" className="menu-item menu-item-type-taxonomy menu-item-object-category">

                  <a href="">777</a>

                </li>
                <li id="" className="menu-item menu-item-type-taxonomy menu-item-object-category">


                  <a href="">888</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

    )
  }
}

export default Nav