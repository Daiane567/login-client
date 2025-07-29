import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    axios
      .get('https://login-api-incn.onrender.com/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setEmail(res.data.email);
      })
      .catch(() => {
        localStorage.removeItem('token');
        navigate('/');
      });
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2>Bem-vindo, {email}</h2>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
