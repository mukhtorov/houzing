import { Select } from "antd";
import styled from "styled-components";
import { ReactComponent as del } from "../../assets/icons/delete.svg";
const Wrapper = styled.div`
  padding: var(--padding);
  max-width: 1440px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: ${({ gap }) => (gap ? "space-around" : "start")};
  gap: 20px;
  margin-bottom: 20px;
`;

const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100%;
  max-width: 200px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

const IconDelete = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;
export { Wrapper, MenuWrapper, Section, SelectAnt, IconDelete };
