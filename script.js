
const botonesOpciones = document.querySelectorAll('.btn-opcion');
const pantallaCodigo = document.getElementById('pantalla-codigo');
const btnCopiar = document.getElementById('btn-copy');

botonesOpciones.forEach(boton => {
  boton.addEventListener('click', () => {
    const codigoExtraido = boton.getAttribute('data-code');
    
    if (codigoExtraido) {
      pantallaCodigo.textContent = codigoExtraido;
    }
  });
});

btnCopiar.addEventListener('click', async () => {
  const textoACopiar = pantallaCodigo.textContent || '';
  
  try {
    await navigator.clipboard.writeText(textoACopiar);
    const textoOriginal = btnCopiar.textContent;
    btnCopiar.textContent = '¡Copiado!';
    
    setTimeout(() => {
      btnCopiar.textContent = textoOriginal;
    }, 2000);
  } catch (error) {
    console.error('Error al copiar:', error);
  }
});