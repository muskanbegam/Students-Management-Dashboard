import * as XLSX from "xlsx";
import type { Student } from "../types/student";

export const exportToExcel = (students: Student[], fileName = "students.xlsx") => {
  const worksheet = XLSX.utils.json_to_sheet(students);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
  XLSX.writeFile(workbook, fileName);
};