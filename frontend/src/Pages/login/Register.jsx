import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import { Form, Input, Button, Card, message } from "antd";
import { LockOutlined, MailOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import "../../styles/auth.css";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    try { 
      if (values.password !== values.confirmPassword) {
        message.error("Паролі не збігаються!");
        setLoading(false);
        return;
      }

      const userData = {
        first_name: values.firstName,
        last_name: values.lastName,
        phone_number: values.phoneNumber,
        email: values.email,
        password: values.password,
        address: values.address || "", // Якщо адреси немає, передаємо порожній рядок
      };

      const response = await register(userData);
      if (response?.status === 201) {
        message.success("Реєстрація успішна!");
        navigate("/login");
      } else {
        message.error("Помилка реєстрації. Спробуйте ще раз.");
      }
    } catch (err) {
      if (err.response?.status === 422) {
        const errors = err.response.data.errors;
        for (let key in errors) {
          message.error(errors[key][0]); // Виводимо першу помилку для кожного поля
        }
      } else {
        message.error("Помилка сервера!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Card title="Реєстрація" className="auth-card">
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="firstName" rules={[{ required: true, message: "Введіть ім'я!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Ім'я" />
          </Form.Item>

          <Form.Item name="lastName" rules={[{ required: true, message: "Введіть прізвище!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Прізвище" />
          </Form.Item>

          <Form.Item name="phoneNumber" rules={[{ required: true, message: "Введіть телефон!" }]}>
            <Input prefix={<PhoneOutlined />} placeholder="Телефон" />
          </Form.Item>

          <Form.Item name="email" rules={[{ required: true, type: "email", message: "Введіть коректну пошту!" }]}>
            <Input prefix={<MailOutlined />} placeholder="Електронна пошта" />
          </Form.Item>

          <Form.Item name="address">
            <Input prefix={<LockOutlined />} placeholder="Адреса (необов'язково)" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Введіть пароль!" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
          </Form.Item>

          <Form.Item name="confirmPassword" rules={[{ required: true, message: "Підтвердіть пароль!" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Підтвердити пароль" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Зареєструватися
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
