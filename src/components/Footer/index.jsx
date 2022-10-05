import { Container, Content, Icon } from './style';

export const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email /> Bunyodkor kochasi, Chilonzor 64-dom, 2-etaj, 1-hone,
          Webbrain Academy
        </Content.Item>
        <Content.Item>
          {' '}
          <Icon.Phone /> 998 33 576 2020
        </Content.Item>
        <Content.Item>
          <Icon.Email /> webbrainacademy@gmail.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>

        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> India</Content.Item>
        <Content.Item> UAE</Content.Item>
        <Content.Item> Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>

        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Mobile </Content.Item>
        <Content.Item>Flutter </Content.Item>
        <Content.Item>Android </Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>

        <Content.Item>t.me/webbrain_admin</Content.Item>
        <Content.Item>t.me/webbrain_ceo</Content.Item>
        <Content.Item>instagram.com/webbrain_admin</Content.Item>
        <Content.Item>instagram.com/smd_94</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;
