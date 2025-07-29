import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('https://login-api-incn.onrender.com/register', { email, password });
      navigate('/');
    } catch (err) {
      setErro(err.response?.data?.message || 'Erro no cadastro');
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastro</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Cadastrar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <p>Já tem conta? <Link to="/">Faça login</Link></p>
    </div>
  );
}
