import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://login-api-incn.onrender.com/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setErro(err.response?.data?.message || 'Erro no login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <p>Não tem conta? <Link to="/register">Cadastre-se</Link></p>
    </div>
  );
}
