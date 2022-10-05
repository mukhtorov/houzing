import { Container, Content, Wrapper, Icon } from './style';

export const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className='title'>Why Choose Us</h1>
        <div className='info'>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Wrapper>
        <Content>
          <Icon.Email />
          <div className='subTitle'>Trusted By Thousands</div>
          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icon.House />
          <div className='subTitle'>Wide Renge Of Properties</div>

          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icon.Calculator />
          <div className='subTitle'>Financing Made Easy</div>

          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icon.Maps />
          <div className='subTitle'>See Neighborhoods</div>

          <div className='info'>
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Why;
