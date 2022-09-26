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
    z-index: 1;
    max-height: 10.6667rem;
    overflow-y: scroll;
    transform: translate(0px, 0%);
  }
  .xd-body-center {
    bottom: 50%;
    transform: translate(0px, 50%);
  }
  .xd-body-top {
    top: 0;
    transform: translate(0px, 0);
  }
`

const Popup: React.FC<{
  visible: boolean
  onMaskClick?: () => void
  children: React.ReactNode
  position?: 'center' | 'top'
}> = ({ visible, onMaskClick, children, position }) => {
  return (
    <Wrap>
      {visible && (
        <div className="xd-popup">
          <div className="xd-mask" onClick={onMaskClick}></div>
          <div className={position ? `xd-body xd-body-${position}` : 'xd-body'}>{children}</div>
        </div>
      )}
    </Wrap>
  )
}

export default Popup
