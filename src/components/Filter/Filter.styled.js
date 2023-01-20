import styled from '@emotion/styled';

export const FormInput = styled.input`
  display: flex;
  width: 300px;
  padding-left: 45px;
  margin: 10px auto;
  height: 40px;  
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470" width="40" height="40">\
  <path d="M496.131 435.698 374.855 332.551c-12.537-11.283-25.945-16.463-36.776-15.963C366.707 283.054 384 239.549 384 192 384 85.961 298.039 0 192 0S0 85.961 0 192s85.961 192 192 192c47.549 0 91.054-17.293 124.588-45.922-.5 10.831 4.68 24.239 15.963 36.776L435.698 496.13c17.661 19.623 46.511 21.277 64.11 3.678s15.946-46.449-3.677-64.11zM192 320c-70.692 0-128-57.308-128-128S121.308 64 192 64s128 57.308 128 128-57.307 128-128 128z"/>\
  </svg>');

  :hover {
  box-shadow: 0 1px 15px rgb(125, 141, 243),
    -23px 0 20px -23px rgba(104, 104, 249, 0.8),
    23px 0 20px -23px rgba(94, 127, 235, 0.8), 0 0 40px rgb(0 0 0 / 10%);
}
}
`;
