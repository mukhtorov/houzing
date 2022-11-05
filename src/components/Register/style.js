import styled from "styled-components";

import { Tabs } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  background: #e6e9ec;
`;

const AntTabs = styled(Tabs)`
  width: 100%;
  max-width: 580px;
  margin: 64px;
`;

export { Container, AntTabs };
