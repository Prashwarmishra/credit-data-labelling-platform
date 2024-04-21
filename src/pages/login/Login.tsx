import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import Typography from "../../components/ui/Typography/Typography";
import Role from "../../constants/role";
import { TypographyVariantTypes } from "../../primitives/TypographyTypes";
import s from "./Login.module.scss";

const initValue = {
  value: "",
  error: "",
};

const Login = () => {
  // states
  const [email, setEmail] = useState({ ...initValue });
  const [password, setPassword] = useState({ ...initValue });
  const [selectedRole, setSelectedRole] = useState(Role.Labeler);

  const renderRoles = () => {
    return (
      <div className={s.rolesOptions}>
        {Object.keys(Role).map((role) => (
          <div className={s.role} onClick={() => setSelectedRole(role as Role)}>
            <FontAwesomeIcon
              icon={role === selectedRole ? faCircleCheck : faCircle}
              size="sm"
            />
            <Typography label={role} customStyle={{ padding: "4px 0" }} />
          </div>
        ))}
      </div>
    );
  };

  const handleLogin = () => {};

  return (
    <div className={s.root}>
      <div className={s.login}>
        <header className={s.header}>
          <img src="/credit.jpeg" />
          <Typography
            variant={TypographyVariantTypes.H1}
            label="Login to continue"
          />
        </header>

        <div className={s.form}>
          <Input
            placeholder="Email"
            value={email.value}
            onChange={(e) => setEmail({ ...email, value: e.target.value })}
            hasError={!!email.error}
            errorMessage={email.error}
          />

          <Input
            placeholder="Password"
            value={password.value}
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
            type="password"
            hasError={!!password.error}
            errorMessage={password.error}
          />

          <div className={s.roles}>
            <Typography
              label="Select a role"
              variant={TypographyVariantTypes.Big}
              customStyle={{ fontWeight: "bold" }}
            />

            {renderRoles()}
          </div>

          <Button label="Login" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
