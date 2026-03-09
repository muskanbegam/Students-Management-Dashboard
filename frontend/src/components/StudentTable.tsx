import type { Student } from "../types/student";
import styles from "./StudentTable.module.css";

interface Props {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
}

export const StudentTable = ({ students, onEdit, onDelete }: Props) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td className={styles.actions}>
                <button
                  onClick={() => onEdit(student)}
                  className={styles.editButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};