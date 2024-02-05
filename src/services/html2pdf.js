import html2pdf from 'html2pdf.js';

const customExportToPDF = async (elemRef, fileName, password) => {

  // Elemento que contiene el contenido que deseas imprimir
  const pdfContent = await elemRef;

  // Configuración de la exportación
  const opt = {
    margin: 0,
    filename: fileName,
    html2canvas: { 
      scale: 2
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      compress: true,
      encryption: {
        userPassword: password
      },
      precision: 100
    }
  }

  // Exportación en pdf
  await html2pdf().set(opt).from(pdfContent).save();
}

export {
  customExportToPDF
}