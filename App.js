import { useState } from 'react';
import { X, Plus, Search, Download, Trash2, Edit2 } from 'lucide-react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice.j@example.com', grade: 'A', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', grade: 'B+', status: 'Active' },
    { id: 3, name: 'Carol Davis', email: 'carol.d@example.com', grade: 'A-', status: 'Active' },
    { id: 4, name: 'David Wilson', email: 'david.w@example.com', grade: 'B', status: 'Inactive' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', grade: 'B', status: 'Active' });
  const [editingId, setEditingId] = useState(null);

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = () => {
    if (formData.name && formData.email) {
      if (editingId) {
        setStudents(students.map(s => s.id === editingId ? { ...formData, id: editingId } : s));
        setEditingId(null);
      } else {
        setStudents([...students, { ...formData, id: Date.now() }]);
      }
      setFormData({ name: '', email: '', grade: 'B', status: 'Active' });
      setShowForm(false);
    }
  };

  const handleEdit = (student) => {
    setFormData(student);
    setEditingId(student.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const handleExport = () => {
    const csv = ['Name,Email,Grade,Status', ...students.map(s => `"${s.name}","${s.email}",${s.grade},${s.status}`)].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'students.csv';
    a.click();
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Student Database</h1>
        <p>Manage and track student information</p>
      </div>

      <div className="controls">
        <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button
          onClick={() => { setShowForm(!showForm); setEditingId(null); setFormData({ name: '', email: '', grade: 'B', status: 'Active' }); }}
          className="btn btn-primary"
        >
          <Plus size={18} /> Add Student
        </button>
        <button
          onClick={handleExport}
          className="btn btn-secondary"
        >
          <Download size={18} /> Export
        </button>
      </div>

      {showForm && (
        <div className="form-panel">
          <div className="form-header">
            <h3>{editingId ? 'Edit Student' : 'Add New Student'}</h3>
            <button onClick={() => setShowForm(false)} className="close-btn">
              <X size={18} />
            </button>
          </div>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
            />
            <select
              value={formData.grade}
              onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              className="form-input"
            >
              <option>A+</option>
              <option>A</option>
              <option>A-</option>
              <option>B+</option>
              <option>B</option>
              <option>B-</option>
              <option>C</option>
            </select>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="form-input"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Graduated</option>
            </select>
          </div>
          <button
            onClick={handleAddStudent}
            className="btn btn-submit"
          >
            {editingId ? 'Update Student' : 'Add Student'}
          </button>
        </div>
      )}

      <div className="stats">
        <div className="stat-card">
          <p className="stat-label">Total students</p>
          <p className="stat-value">{students.length}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Active students</p>
          <p className="stat-value">{students.filter(s => s.status === 'Active').length}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Grade distribution</p>
          <p className="stat-value">A: {students.filter(s => s.grade.startsWith('A')).length}</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Grade</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="name-cell">{student.name}</td>
                <td className="email-cell">{student.email}</td>
                <td className="grade-cell">
                  <span className="badge badge-grade">{student.grade}</span>
                </td>
                <td className="status-cell">
                  <span className={`badge ${student.status === 'Active' ? 'badge-active' : 'badge-inactive'}`}>
                    {student.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <button
                    onClick={() => handleEdit(student)}
                    className="action-btn"
                    title="Edit student"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="action-btn delete-btn"
                    title="Delete student"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredStudents.length === 0 && (
        <div className="empty-state">
          <p>No students found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default App;
