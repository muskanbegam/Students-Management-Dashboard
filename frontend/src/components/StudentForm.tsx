import { useState, useEffect } from "react";
import type { Student } from "../types/student";
import styles from "./StudentForm.module.css";

interface Props {
  onSubmit: (student: Student) => void;
  editingStudent: Student | null;
  cancelEdit: () => void;
}

export const StudentForm = ({ onSubmit, editingStudent, cancelEdit }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | "">("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setAge(editingStudent.age);
    } else {
      setName("");
      setEmail("");
      setAge("");
    }
  }, [editingStudent]);

  const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !age) {
      alert("All fields are required!");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Invalid email!");
      return;
    }

    onSubmit({
      id: editingStudent?.id || 0,
      name,
      email,
      age: Number(age),
    });

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.valueAsNumber)}
        className={styles.input}
      />
      <div className={styles.buttonsWrapper}>
        <button type="submit" className={`${styles.button} ${styles.saveButton}`}>
          {editingStudent ? "Update" : "Save"}
        </button>
        {editingStudent && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles.cancelButton}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};