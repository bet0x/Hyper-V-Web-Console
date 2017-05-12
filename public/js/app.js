// Alertas de mierda, se deben migrar tambien a Bootstrap
// 
function start_vm(vmName) {
  if (window.confirm('Quieres iniciar la maquina virtual ' + vmName + '?')) {
    this.disabled=true;
    return true;
  } else {
    return false;
  }
}

function stop_vm(vmName) {
  if (window.confirm('Quieres detener la maquina virtual ' + vmName + '?')) {
    this.disabled=true;
    return true;
  } else {
    return false;
  }
}
function reboot_vm(vmName) {
  if (window.confirm('Quieres reiniciar la maquina virtual ' + vmName + '?')) {
    this.disabled=true;
    return true;
  } else {
    return false;
  }
}
