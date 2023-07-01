import './index.css'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

const PopupReact = () => (
  <div className="popup">
    <Popup
      modal
      trigger={
        <div className="pop-button">
          <button type="button" className="showPopup">
            Rules
          </button>
        </div>
      }
    >
      {close => (
        <div className="popup-image">
          <div className="popupButton">
            <button type="button" onClick={() => close()}>
              <RiCloseLine />
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="imagePopup"
          />
        </div>
      )}
    </Popup>
  </div>
)
export default PopupReact
