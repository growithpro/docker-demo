import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Fake data
let students = [
  { id: 1, name: 'Naveen', course: 'DevOps' },
  { id: 2, name: 'Rahul', course: 'Flutter' },
]

// Routes
app.get('/api/students', (req, res) => {
  res.json(students)
})

app.post('/api/students', (req, res) => {
  const student = { id: students.length + 1, ...req.body }
  students.push(student)
  res.status(201).json(student)
})

app.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe`)
})