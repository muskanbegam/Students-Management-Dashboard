import axios from "axios";
import type { Student } from "../types/student";

const API_URL = "https://students-management-dashboard.onrender.com/students";

export const getStudents = () => axios.get<Student[]>(API_URL).then(res => res.data);

export const createStudent = (student: Partial<Student>) =>
  axios.post<Student>(API_URL, student).then(res => res.data);

export const updateStudent = (id: number, student: Partial<Student>) =>
  axios.put<Student>(`${API_URL}/${id}`, student).then(res => res.data);

export const deleteStudent = (id: number) =>
  axios.delete<void>(`${API_URL}/${id}`).then(res => res.data);