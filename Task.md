**¿En vivo desde el Streaming! "Batalla de Bigotes: Frontend && Backend"**


5 equipos, dos horas, un solo objetivo: crear la mejor aplicación web para diseñar bigotes, ¿usando Fabric.js y bajo la atenta mirada del jurado! ¿Que comience la batalla!

**Reglas del juego:**

1. **Equipos:**  5 equipos compuestos por un desarrollador frontend y un desarrollador backend se enfrentarán en este desafío {epico.
2. **Tiempo límite:** Tendrán 2 horas para diseñar, desarrollar y desplegar una aplicación web funcional que permita a los usuarios dibujar y guardar bigotes.
3. **Tecnología:**  Los equipos deberán utilizar Fabric.js para el editor de dibujo en el frontend.
4. **Jurado experto:**  Un jurado experto (Yo jiji) evaluará las aplicaciones al final del streaming, teniendo en cuenta criterios como la funcionalidad, el diseño, la usabilidad y la creatividad.
5. **Votación del público:**  La audiencia también podrá votar por su aplicación favorita a través de un sistema de votación en línea.
6. **Ganadores:**  El equipo que obtenga la mayor puntuación combinada del jurado y la audiencia será declarado ganador de la "Batalla de Bigotes".

**El desafío:**

* **Frontend:** Crear una interfaz intuitiva y atractiva con un editor de dibujo (usando Fabric.js) que permita al usuario diseñar bigotes con diferentes formas, colores y estilos.
* **Backend:** Desarrollar una API REST para guardar los bigotes creados por los usuarios, implementar un sistema de autenticación y asegurar la comunicación fluida con el frontend.


**¿Que comience la batalla y que gane el mejor equipo!**

**Use Cases:**

**1.  Dibujar un bigote:**

* **Actor:** Usuario.
* **Descripción:** El usuario puede dibujar un bigote en el canvas utilizando las herramientas de dibujo de Fabric.js.
* **Flujo:**
    1. El usuario accede a la aplicación web.
    2. El usuario selecciona una herramienta de dibujo (ej. lápiz, línea, círculo).
    3. El usuario dibuja el bigote en el canvas.
    4. El usuario puede deshacer/rehacer acciones, cambiar el color y el grosor del trazo.

**2. Guardar un bigote:**

* **Actor:** Usuario autenticado.
* **Descripción:** El usuario puede guardar el bigote que ha dibujado en el servidor.
* **Flujo:**
    1. El usuario dibuja un bigote.
    2. El usuario hace clic en el botón "Guardar".
    3. La aplicación envía los datos del bigote (en formato JSON) al backend.
    4. El backend guarda los datos del bigote asociados al usuario.
    5. El backend envía una respuesta al frontend confirmando que el bigote se ha guardado.

**3.  Autenticarse:**

* **Actor:** Usuario.
* **Descripción:** El usuario puede autenticarse en la aplicación para poder guardar sus bigotes.
* **Flujo:**
    1. El usuario accede a la aplicación.
    2. El usuario hace clic en el botón "Iniciar sesión" o "Registrarse".
    3. El usuario introduce sus credenciales (ej. nombre de usuario y contraseña).
    4. La aplicación envía las credenciales al backend.
    5. El backend verifica las credenciales.
    6. Si las credenciales son válidas, el backend genera un token JWT y lo envía al frontend.
    7. El frontend guarda el token y lo utiliza para autenticar las solicitudes al backend.