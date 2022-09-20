import React from 'react'
import styled from 'styled-components'

function Detail() {
    return(
        <Container>
            <Background>
                <img src="https://www.periodicoelgancho.com/wp-content/uploads/2018/06/bao-el-nuevo-corto-de-disney-pixar-2.jpg" alt="pixarfullpic" />
            </Background>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`