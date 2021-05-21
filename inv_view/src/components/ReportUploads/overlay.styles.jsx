import styled from 'styled-components';
import LoadingOverlay from 'react-loading-overlay'
 
const StyledLoader = styled(LoadingOverlay)`
    position:absolute;
    margin-right:20%;
  .MyLoader_overlay {
    background: rgba(0, 0, 0, 0.5);
  }

`
 
export default function MyLoader({ active, children }) {
  return (
    <StyledLoader
      active={active}
      classNamePrefix='MyLoader_'
    >
      {children}
    </StyledLoader>
  )
}
