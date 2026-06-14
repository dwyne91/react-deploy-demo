import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-container">
      <div className="project-card">
        <span className="badge">TUGAS PRAKTIKUM</span>
        <h1>React Deployment Demo</h1>
        <p className="description">
          Aplikasi React ini berhasil di-deploy menggunakan Docker, GitHub, dan Vercel.
        </p>

        <hr className="divider" />

        <div className="profile-section">
          <h3>Identitas Mahasiswa:</h3>
          <p><strong>Nama:</strong> Azis Prasetyo</p>
          <p><strong>NIM:</strong> 2403040090</p>
          <p><strong>Status Deploy:</strong> <span className="status-online">● Online (Vercel)</span></p>
        </div>

        <footer className="card-footer">
          Praktikum Deployment
        </footer>
      </div>
    </div>
  );
}

export default App;