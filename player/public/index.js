const courseIframe = document.getElementById('course-iframe')

// Iniciar player con SCORM 1.2
window.API = new Scorm12API({ autocommit: true });

// Obtener el progreso guardado en el localhost
const usersCMI = localStorage.getItem("cmi")
if (usersCMI) window.API.loadFromJSON(JSON.parse(usersCMI).cmi);

// Escuchar todos los cambios del CMI.
window.API.on('LMSSetValue.cmi.*', function (CMIElement, value) {
    window.API.storeData(true);
    localStorage.setItem('cmi', JSON.stringify(API.renderCommitCMI(true)));
});

window.setTimeout(() => {
    // Agregar src para el primer HTML del curso al iframe
    courseIframe.src = courseIframe.dataset.src;
}, 1000)
