import React from 'react'
import Cookies from './node_modules/js-cookie/dist/js.cookie.mjs'
import './PromoBar.scss'

import PillButton from './PromoBarParts/PillButton'
import CloseButton from './PromoBarParts/CloseButton'
import Expires from './PromoBarParts/Expires'

class PromoBar extends React.Component {
    state = {
      isOpen: false,
      timeLeft: null
    };
    handleClose = () => {
      Cookies.set("sPromoBar")
      this.setState({
        isOpen: false
      });
    };
    componentDidMount() {
      if (!Cookies.get("sPromoBar")) {
        this.setState({
          isOpen: true
        });
        const end = new Date(this.props.endTime).getTime();
        setInterval(() => {
          const now = new Date().getTime();
          this.setState({
            timeLeft: end - now
          });
        }, 1000);
      }
    }
    render() {
      return this.state.isOpen && (this.state.timeLeft > 0) ? (
        <div className="promoWrap">
          <div className="promo container-fluid">
            <a href={this.props.link}>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col-sm-auto promoText">
                      <span className="msg">{this.props.message}</span>
                      <Expires expires={this.state.timeLeft} />
                    </div>
                    <PillButton cta={this.props.btnLabel} />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <CloseButton close={this.handleClose} />
        </div>
      ) : null;
    }
  }

export default PromoBar
