import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import Typography from "../../components/ui/Typography/Typography";
import {
  ButtonSizesType,
  ButtonVariantsType,
} from "../../primitives/ButtonTypes";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";

const Login = () => {
  const [value, setValue] = useState("");
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
      />
      <Input
        placeholder="Placeholder"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Login;
