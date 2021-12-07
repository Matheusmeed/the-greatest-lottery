import { HeaderDiv } from './style';
import { HeaderTitleDiv } from './style';

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitleDiv>
        <h1>TGL</h1>
      </HeaderTitleDiv>

      <div>
        <h3>Account</h3>
        <h3>Sair</h3>
      </div>
    </HeaderDiv>
  );
};

export default Header;
