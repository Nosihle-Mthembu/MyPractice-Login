const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

db.run(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT,
  priority TEXT
)`);

app.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      tasks: rows,
    });
  });
});



app.post('/tasks', (req, res) => {
  const { description, priority } = req.body;
  const sql = 'INSERT INTO tasks (description, priority) VALUES (?, ?)';
  const params = [description, priority];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      id: this.lastID,
      description,
      priority,
    });
  });
});

db.run(`CREATE TABLE IF NOT EXISTS register (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  lastname TEXT,
  username TEXT,
  password TEXT,
  cellphone TEXT
)`);

app.get('/register', (req, res) => {
  db.all('SELECT * FROM register', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      tasks: rows,
    });
  });
});

app.post('/register', (req, res) => {
  const { username, password, name, lastname, cellphone } = req.body;
  if (!username || !password || !name || !lastname || !cellphone) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  db.get('SELECT username FROM register WHERE username = ?', [username], (err, row) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Database error' });
      return;
    }
  
    if (row) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }
  
    const sql = 'INSERT INTO register (username, password, name, lastname, cellphone) VALUES (?, ?, ?, ?, ?)';
    const params = [username, password, name, lastname, cellphone];
  
    db.run(sql, params, function (err) {
      if (err) {
        res.status(500).json({ success: false, message: 'Database error' });
        return;
      }
      res.json({ success: true, message: 'Registration successful', id: this.lastID });
    });
  });

});


app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM tasks WHERE id = ?', id, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ deletedID: id });
  });
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { description, priority } = req.body;
  db.run(
    'UPDATE tasks SET description = ?, priority = ? WHERE id = ?',
    [description, priority, id],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ updatedID: id });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
