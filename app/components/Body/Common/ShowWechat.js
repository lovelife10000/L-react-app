import React, {Component} from 'react'

class ShowWechat extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <aside id="widget_notice-2" className="widget widget_widget_notice">
        <h3 className="widget-title">关注微信公众号</h3>
        <div className="widget-site-info">
          <div className="join-info">
            <dl className="code-dl">
              <dd>
                <img src="/public/upload/image/pm-erweima.jpg"/>
              </dd>
              <dt>关注微信公众号</dt>
            </dl>
            <ul className="code-ul">
              <li>微信公众号：</li>
              <li>ViralnovaWang</li>
            </ul>
          </div>

        </div>
      </aside>
    )
  }
}
export default ShowWechat