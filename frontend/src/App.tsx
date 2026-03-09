import { useState } from "react";
import type { Student } from "./types/student";
import { StudentForm } from "./components/StudentForm";
import { StudentTable } from "./components/StudentTable";
import { useStudents } from "./hooks/useStudents";
import { createStudent, updateStudent, deleteStudent } from "./services/studentService";
import { exportToExcel } from "./utils/excel";

function App() {
  const { students, setStudents, loading, setLoading } = useStudents();
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleAddOrEdit = async (student: Student) => {
    setLoading(true);
    try {
      if (editingStudent) {
        const updated = await updateStudent(editingStudent.id, student);
        setStudents(students.map((s) => (s.id === updated.id ? updated : s)));
        setEditingStudent(null);
      } else {
        const created = await createStudent(student);
        setStudents([...students, created]);
      }
    } catch (err) {
      alert("Error saving student");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    setLoading(true);
    try {
      await deleteStudent(id);
      setStudents(students.filter((s) => s.id !== id));
    } catch (err) {
      alert("Error deleting student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-transparent">
<h1 className="appTitle">
  Students Table
</h1>
      <div className="w-full max-w-3xl bg-white/85 backdrop-blur-sm rounded-xl shadow-md p-6 flex flex-col gap-6">
        {/* Student Form */}
        <StudentForm
          onSubmit={handleAddOrEdit}
          editingStudent={editingStudent}
          cancelEdit={() => setEditingStudent(null)}
        />

        {/* Student Table */}
        {loading ? (
          <p className="text-center text-black/60">Loading...</p>
        ) : (
          <StudentTable
            students={students}
            onEdit={setEditingStudent}
            onDelete={handleDelete}
          />
        )}

        {/* Export Button */}
        {students.length > 0 && (
<button
  className="exportButton"
  onClick={() => exportToExcel(students)}
>
  Export to Excel
</button>
        )}
      </div>
    </div>
  );
}

export default App;