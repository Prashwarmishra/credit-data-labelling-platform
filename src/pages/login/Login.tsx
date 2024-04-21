import Button from "../../components/ui/Button/Button";
import Typography from "../../components/ui/Typography/Typography";
import {
  ButtonSizesType,
  ButtonVariantsType,
} from "../../primitives/ButtonTypes";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";

const Login = () => {
  return (
    <div>
      <Typography
        label="Login via Email and Password"
        variant={TypographyVariantTypes.H1}
      />
      <Button
        label="Login"
        variant={ButtonVariantsType.PrimaryOutline}
        size={ButtonSizesType.Big}
        isDisabled
      />
    </div>
  );
};

export default Login;
