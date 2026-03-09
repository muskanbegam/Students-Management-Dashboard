import { useState, useEffect } from "react";
import type { Student } from "../types/student";
import { getStudents } from "../services/studentService";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudents()
      .then(data => setStudents(data))
      .finally(() => setLoading(false));
  }, []);

  return { students, setStudents, loading, setLoading };
};