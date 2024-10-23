// header

import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
position: fixed;
background-color: red;
`

const StyledButton = styled.button`
color: blue;
`
export default function Header() {
  return (
    <HeaderWrapper>
      <h1> Lamar AlSubhi's Resume </h1>
      <p> Boston, MA | <a href="mailto:lamarmaalsubhi@gmail.com"> Personal email </a> | <a
        href="mailto:lamarma@bu.edu">BU email </a> | <a href="mailto:lamar.alsubhi@kaust.edu"> KAUST email </a> | <a
          href="https://www.linkedin.com/in/lamaralsubhi"> LinkedIn Account </a>
      </p>
    </HeaderWrapper>
  )
}