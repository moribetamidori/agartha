import styled from 'styled-components';

const Banner = styled.div`
    position: fixed;
    z-index: 100;
`;

const Body = styled.div`
position: fixed
z-index: 0;
`;

const Container = styled.div`
position: fixed;
width: 50%;
height: 50%;
z-index: -1;
`;

export  {Banner, Container, Body};