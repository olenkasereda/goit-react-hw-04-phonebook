import styled from '@emotion/styled';

export const ItemContact = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
`;

export const ButtonDeleteContact = styled.button`
  max-width: 130px;
  max-height: 45px;
  line-height: 45px;
  border-radius: 45px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 400;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    background: #ea450f;
    box-shadow: 0 15px 20px rgba(165, 188, 179, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
