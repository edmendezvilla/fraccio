// Función constructora para User
function User(name, age, star) {
    this.name = name;
    this.age = age;
    this.star = star;
}

// Función constructora para Message
function Message(sender, content) {
    this.sender = sender;
    this.content = content;
}

// Función constructora para Theory con información sobre fracciones matemáticas
function Theory(title, text, url, fractionMathInfo) {
    this.title = title;
    this.text = text;
    this.url = url;
    this.fractionMathInfo = fractionMathInfo;
}

// Función constructora para Exam
function Exam(description, grades) {
    this.description = description;
    this.grades = grades;
}

// Ejemplo de uso
const miUsuario = new User("Juan", 25, 4.5);
alert("Nombre del Usuario:", miUsuario.name);
alert("Edad del Usuario:", miUsuario.age);
alert("Estrellas del Usuario:", miUsuario.star);

const miMensaje = new Message("Juan", "Hola, ¿cómo estás?");
alert("\nRemitente del Mensaje:", miMensaje.sender);
alert("Contenido del Mensaje:", miMensaje.content);

const teoriaFraccionesMatematicas = new Theory(
    "Teoría de Fracciones Matemáticas",
    "En matemáticas, una fracción representa la división de dos números. Por ejemplo, 1/2 representa la mitad de un todo.",
    "http://www.teoriamatematicasfracciones.com",
    "Para sumar fracciones: a/b + c/d = (ad + bc) / bd"
);

alert("\nTítulo de la Teoría:", teoriaFraccionesMatematicas.title);
alert("Texto de la Teoría:", teoriaFraccionesMatematicas.text);
alert("URL de la Teoría:", teoriaFraccionesMatematicas.url);
alert("Información sobre fracciones matemáticas:", teoriaFraccionesMatematicas.fractionMathInfo);

const miExamen = new Exam("Examen de JavaScript", 95);
alert("\nDescripción del Examen:", miExamen.description);
alert("Calificación del Examen:", miExamen.grades);
