import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { Form, Input, Button, Card, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import "../../styles/auth.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const userData = await login(values.email, values.password);
      message.success("Вхід успішний!");
      console.log("Користувач увійшов:", userData);
      navigate("/dashboard");
    } catch (err) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Card title="Вхід в акаунт" className="auth-card">
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="email" rules={[{ required: true, type: "email", message: "Введіть коректну пошту!" }]}>
            <Input prefix={<MailOutlined />} placeholder="Електронна пошта" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Введіть пароль!" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Увійти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
