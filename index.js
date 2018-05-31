import React, { PureComponent } from 'react';
import styles from './index.less';

import closeBtn from '../../assets/closeBtn.png';

/**
 * html 手机预览
 *
 * @Usage example:
 *
 *  render() {
 *   return (<HtmlMobilePreview title='我的预览' html='<h1>ABC</h1><img src="../../a.png"></img>'/>);
 * }
 *
 */
export default class HtmlMobilePreview extends PureComponent {

  state = {
    displayPreview: false
  };

  static defaultProps = {
    onClose: () => {
    },
    title: '',
    html: '',
  };

  /**
   * 展示预览
   * @param open
   */
  displayPreview(open = true) {
    this.setState({
      displayPreview: open,
    });
  }

  render() {
    const {title, html} = this.props;
    console.log(html);
    const {displayPreview} = this.state;
    return (
      <div>
        <a onClick={() => this.displayPreview(true)}>手机预览</a>
        {displayPreview && html && <div className={styles.phonePreview}>
          <div className={styles.phonePreviewMain}>
            <div className={styles.rightView}>
              <div className={styles.previewTitle}>{title}</div>
              <div className={styles.previewBody}>
                <iframe srcDoc={html} className={styles.previewFrame}/>
              </div>
            </div>
            <a onClick={() => this.displayPreview(false)} className={styles.closeBtn}><img src={closeBtn}/></a>
          </div>
        </div>
        }
      </div>
    );
  }

}
