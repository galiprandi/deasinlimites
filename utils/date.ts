/**
 * Formatea una fecha en formato legible en español
 * @param dateString - Fecha en formato ISO (YYYY-MM-DD)
 * @returns Fecha formateada (ej: "23 de Marzo de 2025")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return date.toLocaleDateString('es-ES', options);
}
