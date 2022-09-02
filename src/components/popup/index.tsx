import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  .xd-popup {
    position: fixed;
    z-index: 1000;
  }
  .xd-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.55);
    opacity: 1;
  }
  .xd-body {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 1;
    transform: translate(0px, 0%);
  }
`

const Popup: React.FC<{ visible: boolean; onMaskClick?: () => void }> = ({ visible, onMaskClick }) => {
  return (
    <Wrap>
      <div className="xd-popup">
        <div className="xd-mask"></div>
        <div className="xd-body"></div>
      </div>
    </Wrap>
  )
}

export default Popup
