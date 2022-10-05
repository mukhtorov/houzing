import styled from 'styled-components';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as cardHouse } from '../../assets/icons/cardHouse.svg';
import { ReactComponent as cardMaps } from '../../assets/icons/cardMaps.svg';

const Container = styled.div`
  height: 417px;
  background: #0d263b;

  display: flex;
  position: relative;
  /* align-items: center; */
  justify-content: space-around;

  margin: auto;
  width: 100%;
  margin-top: 96px;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

Content.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-right: 21px;
  width: 54px;
  height: 54px;
  & path {
    fill: white;
  }
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
  & path {
    fill: white;
  }
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;

export { Container, Content, Icon };
