const xml2js = require('xml2js')

// Esta función devuelve el html de entrada para reproducir el curso, a partir
// del nombre del curso.
const getCourseUrl = async (courseName) => {
    const response = await fetch(`http://127.0.0.1:3001/courses/${courseName}/imsmanifest.xml`)
    const data = await response.text();
    const parser = new xml2js.Parser();
    const xmlDocument = await parser.parseStringPromise(data);
    const indexFilePath = xmlDocument.manifest.resources[0].resource[0].$.href;
    const coursePath = `http://127.0.0.1:3001/courses/${courseName}/${indexFilePath}`;
    return coursePath;
};

module.exports = {
    getCourseUrl
}
