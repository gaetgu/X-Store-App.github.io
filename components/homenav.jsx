import styled from '@emotion/styled'

const HomeNavChild = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: stretch;
  padding: 10px 5px;
  & > section {
    width: 50% !important;
  }
`

function HomeNav(props) {
  return (
    <HomeNavChild style={{backgroundImage: 'url(' + props.bgSrc + ')'}}>
      <section>
        {props.Left}
      </section>
      <section>
        {props.Right}
      </section>
    </HomeNavChild>
  )
}

export default HomeNav