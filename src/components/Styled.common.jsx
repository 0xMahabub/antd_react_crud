import styled from 'styled-components';


export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${props => props.task ? '#ffffff' : '#fafbfc'};
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.025);
    border-radius: .35rem;
    width: 98%;
    max-width: ${props => props.tasks ? '1376px' : '900px'};
    margin: ${props => props.task ? '1rem auto' : '3rem auto'};
    padding: 3.5rem 1.5rem;
`;


export const P = styled.p`
    font-size: 1.25rem;
    color: #363636;
`;

export const MenuUL = styled.ul`
    display: inline-flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-decoration: underline;
`;