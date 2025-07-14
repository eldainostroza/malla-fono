document.addEventListener('DOMContentLoaded', function() {
    // Datos de los cursos
    const coursesData = [
        // Nivel 1
        { id: 'fund-psico', name: 'FUNDAMENTOS DE PSICOLOGIA GENERAL Y NEUROPSICOLOGIA', level: 1, type: 'FB', credits: 8, prerequisites: [], semester: 'Anual' },
        { id: 'practica-1', name: 'PRACTICA CLINICA I', level: 1, type: 'DC', credits: 4, prerequisites: [], semester: 'Semestral (O)' },
        { id: 'fund-fono', name: 'FUNDAMENTOS DE FONOAUDIOLOGIA', level: 1, type: 'FD', credits: 5, prerequisites: [], semester: 'Semestral (O)' },
        { id: 'ling-app', name: 'LINGUISTICA APLICADA', level: 1, type: 'FB', credits: 4, prerequisites: [], semester: 'Semestral (O)' },
        { id: 'anatomia', name: 'ANATOMIA', level: 1, type: 'FB', credits: 6, prerequisites: [], semester: 'Semestral (O)' },
        { id: 'bio-cel', name: 'BIOLOGIA CELULAR', level: 1, type: 'FB', credits: 5, prerequisites: [], semester: 'Semestral (O)' },
        { id: 'com-oral-1', name: 'COMUNICACION ORAL Y ESCRITA I', level: 1, type: 'FF', credits: 2, prerequisites: [], semester: 'Semestral (O)' },

        // Nivel 2
        { id: 'practica-2', name: 'PRACTICA CLINICA II', level: 2, type: 'DC', credits: 5, prerequisites: ['practica-1'], semester: 'Semestral (P)' },
        { id: 'princ-interv', name: 'PRINCIPIOS DE INTERVENCION EN FONOAUDIOLOGIA', level: 2, type: 'FD', credits: 3, prerequisites: ['fund-fono'], semester: 'Semestral (P)' },
        { id: 'ling-app-2', name: 'LINGUISTICA APLICADA II', level: 2, type: 'FB', credits: 5, prerequisites: ['ling-app'], semester: 'Semestral (P)' },
        { id: 'fisiologia', name: 'FISIOLOGIA', level: 2, type: 'FB', credits: 6, prerequisites: ['bio-cel', 'anatomia'], semester: 'Semestral (P)' },
        { id: 'idioma-1', name: 'IDIOMA EXTRANJERO I', level: 2, type: 'FF', credits: 3, prerequisites: [], semester: 'Semestral (P)' },
        { id: 'com-oral-2', name: 'COMUNICACION ORAL Y ESCRITA II', level: 2, type: 'FF', credits: 4, prerequisites: ['com-oral-1'], semester: 'Semestral (P)' },

        // Nivel 3
        { id: 'practica-3', name: 'PRACTICA CLINICA III', level: 3, type: 'DC', credits: 5, prerequisites: ['practica-2'], semester: 'Semestral (P)' },
        { id: 'psico-neuro', name: 'PSICOLINGUISTICA Y NEUROLINGUISTICA', level: 3, type: 'FB', credits: 6, prerequisites: ['ling-app-2', 'fund-psico'], semester: 'Semestral (O)' },
        { id: 'fisiopatologia', name: 'FISIOPATOLOGIA', level: 3, type: 'FB', credits: 4, prerequisites: ['fisiologia'], semester: 'Semestral (O)' },
        { id: 'fisica-acust', name: 'FISICA ACUSTICA', level: 3, type: 'FB', credits: 4, prerequisites: ['ling-app-2'], semester: 'Semestral (O)' },
        { id: 'salud-publica', name: 'SALUD PUBLICA', level: 3, type: 'FB', credits: 2, prerequisites: ['princ-interv'], semester: 'Semestral (O)' },
        { id: 'idioma-2', name: 'IDIOMA EXTRANJERO II', level: 3, type: 'FF', credits: 3, prerequisites: ['idioma-1'], semester: 'Semestral (O)' },
        { id: 'autogestion', name: 'AUTOGESTIÓN DEL APRENDIZAJE', level: 3, type: 'FF', credits: 3, prerequisites: [], semester: 'Semestral (O)' },

        // Nivel 4
        { id: 'deporte-1', name: 'DEPORTE I', level: 4, type: 'FF', credits: 1, prerequisites: [], semester: 'Semestral' },
        { id: 'neuro-psiqu', name: 'NEUROLOGIA Y PSIQUIATRIA APLICADA', level: 4, type: 'FB', credits: 6, prerequisites: ['fisiopatologia', 'psico-neuro'], semester: 'Semestral (P)' },
        { id: 'des-com', name: 'DESARROLLO DE LA COMUNICACION', level: 4, type: 'FB', credits: 4, prerequisites: ['com-oral-2'], semester: 'Semestral (P)' },
        { id: 'motricidad', name: 'MOTRICIDAD OROFACIAL', level: 4, type: 'FB', credits: 6, prerequisites: ['fisiologia', 'anatomia'], semester: 'Semestral (P)' },
        { id: 'interv-audio-1', name: 'INTERVENCION AUDIOLOGICA I', level: 4, type: 'FD', credits: 4, prerequisites: ['fisica-acust', 'fisiologia', 'princ-interv'], semester: 'Semestral (P)' },
        { id: 'modulo-int-1', name: 'MODULO INTEGRADO I', level: 4, type: 'MI', credits: 4, prerequisites: ['interv-audio-1', 'motricidad', 'neuro-psiqu', 'practica-3'], semester: 'Semanas' },
        { id: 'epidemiologia', name: 'EPIDEMIOLOGIA', level: 4, type: 'FB', credits: 2, prerequisites: ['salud-publica'], semester: 'Semestral (P)' },
        { id: 'idioma-3', name: 'IDIOMA EXTRANJERO III', level: 4, type: 'FF', credits: 3, prerequisites: ['idioma-2'], semester: 'Semestral (P)' },
        { id: 'trabajo-equipo', name: 'TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES', level: 4, type: 'FF', credits: 3, prerequisites: ['autogestion'], semester: 'Semestral (P)' },

        // Nivel 5
        { id: 'interv-adultos-1', name: 'INTERVENCION EN LENGUAJE EN ADULTOS I', level: 5, type: 'FD', credits: 8, prerequisites: ['neuro-psiqu'], semester: 'Anual' },
        { id: 'interv-ninos-1', name: 'INTERVENCION EN LENGUAJE EN NIÑOS Y ADOLESCENTES I', level: 5, type: 'FD', credits: 8, prerequisites: ['des-com', 'princ-interv'], semester: 'Anual' },
        { id: 'interv-habla', name: 'INTERVENCION EN ALTERACIONES DEL HABLA', level: 5, type: 'FD', credits: 8, prerequisites: ['motricidad', 'princ-interv'], semester: 'Anual' },
        { id: 'interv-audio-2', name: 'INTERVENCION AUDIOLOGICA II', level: 5, type: 'FD', credits: 8, prerequisites: ['interv-audio-1'], semester: 'Anual' },
        { id: 'interv-voz-1', name: 'INTERVENCION EN VOZ I', level: 5, type: 'FD', credits: 8, prerequisites: ['motricidad', 'fisica-acust'], semester: 'Anual' },
        { id: 'practica-4', name: 'PRACTICA CLINICA IV', level: 5, type: 'DC', credits: 5, prerequisites: ['modulo-int-1'], semester: 'Semestral (O)' },
        { id: 'electivo-dis', name: 'ELECTIVO DISCIPLINAR', level: 5, type: 'FD', credits: 2, prerequisites: [], semester: 'Semestral (O)' },
        { id: 'comp-sociales', name: 'COMPRENSION DE CONTEXTOS SOCIALES', level: 5, type: 'FF', credits: 3, prerequisites: ['com-oral-2'], semester: 'Semestral (O)' },

        // Nivel 6
        { id: 'practica-5', name: 'PRACTICA CLINICA V', level: 6, type: 'DC', credits: 5, prerequisites: ['practica-4'], semester: 'Semestral (P)' },
        { id: 'bioestadistica', name: 'BIOESTADISTICA DESCRIPTIVA', level: 6, type: 'FB', credits: 2, prerequisites: ['epidemiologia'], semester: 'Semestral (P)' },
        { id: 'comp-culturales', name: 'COMPRENSIÓN DE CONTEXTOS CULTURALES', level: 6, type: 'FF', credits: 3, prerequisites: ['comp-sociales'], semester: 'Semestral (P)' },

        // Nivel 7
        { id: 'interv-adultos-2', name: 'INTERVENCION EN LENGUAJE EN ADULTOS II', level: 7, type: 'FD', credits: 6, prerequisites: ['interv-adultos-1'], semester: 'Anual' },
        { id: 'interv-ninos-2', name: 'INTERVENCION EN LENGUAJE EN NIÑOS Y ADOLESCENTES II', level: 7, type: 'FD', credits: 8, prerequisites: ['interv-ninos-1'], semester: 'Anual' },
        { id: 'interv-deglucion', name: 'INTERVENCION EN DEGLUCION Y DISFAGIA', level: 7, type: 'FD', credits: 8, prerequisites: ['motricidad', 'neuro-psiqu'], semester: 'Anual' },
        { id: 'practica-6', name: 'PRACTICA CLINICA VI', level: 7, type: 'DC', credits: 5, prerequisites: ['practica-5'], semester: 'Semestral (O)' },
        { id: 'interv-audio-3', name: 'INTERVENCION AUDIOLOGICA III', level: 7, type: 'FD', credits: 4, prerequisites: ['interv-audio-2'], semester: 'Semestral (O)' },
        { id: 'interv-voz-2', name: 'INTERVENCION EN VOZ II', level: 7, type: 'FD', credits: 4, prerequisites: ['interv-voz-1'], semester: 'Semestral (O)' },
        { id: 'bioest-metod', name: 'BIOESTADISTICA Y METODOS DE INVESTIGACION', level: 7, type: 'FD', credits: 4, prerequisites: ['bioestadistica'], semester: 'Semestral (O)' },
        { id: 'etica', name: 'ETICA Y RESPONSABILIDAD SOCIAL', level: 7, type: 'FF', credits: 3, prerequisites: ['comp-culturales', 'trabajo-equipo'], semester: 'Semestral (O)' },

        // Nivel 8
        { id: 'deporte-2', name: 'DEPORTE II', level: 8, type: 'FF', credits: 1, prerequisites: ['deporte-1'], semester: 'Semestral' },
        { id: 'gestion', name: 'GESTION', level: 8, type: 'FD', credits: 8, prerequisites: ['practica-6', 'trabajo-equipo'], semester: 'Semestral (P)' },
        { id: 'salud-comunitaria', name: 'SALUD COMUNITARIA', level: 8, type: 'FD', credits: 2, prerequisites: ['epidemiologia', 'salud-publica'], semester: 'Semestral (P)' },
        { id: 'resp-social', name: 'RESPONSABILIDAD SOCIAL', level: 8, type: 'FF', credits: 3, prerequisites: ['etica'], semester: 'Semestral (P)' },
        { id: 'modulo-int-2', name: 'MODULO INTEGRADO II', level: 8, type: 'MI', credits: 4, prerequisites: [
            'resp-social', 'salud-comunitaria', 'gestion', 'bioest-metod', 'interv-voz-2', 
            'interv-audio-3', 'practica-6', 'interv-deglucion', 'interv-ninos-2', 
            'interv-adultos-2', 'comp-culturales', 'electivo-dis', 'interv-habla', 'deporte-2'
        ], semester: 'Semanas' },

        // Nivel 9
        { id: 'internado-1', name: 'INTERNADO I', level: 9, type: 'MI', credits: 13, prerequisites: [], semester: 'Semestral (O)' },
        { id: 'internado-2', name: 'INTERNADO II', level: 9, type: 'MI', credits: 13, prerequisites: [], semester: 'Semestral (O)' },
        { id: 'diseno-proyecto', name: 'DISEÑO PROYECTO DE INVESTIGACION', level: 9, type: 'FD', credits: 4, prerequisites: [], semester: 'Semestral (O)' },

        // Nivel 10
        { id: 'internado-3', name: 'INTERNADO III', level: 10, type: 'DC', credits: 13, prerequisites: ['internado-2'], semester: 'Semestral (P)' },
        { id: 'internado-4', name: 'INTERNADO IV', level: 10, type: 'DC', credits: 13, prerequisites: ['internado-1'], semester: 'Semestral (P)' },
        { id: 'ejec-proyecto', name: 'EJECUCION PROYECTO DE INVESTIGACION', level: 10, type: 'DC', credits: 4, prerequisites: ['diseno-proyecto'], semester: 'Semestral (P)' }
    ];

    // Estado de la aplicación
    const state = {
        completedCourses: JSON.parse(localStorage.getItem('completedCourses')) || [],
        totalCredits: coursesData.reduce((sum, course) => sum + course.credits, 0),
        earnedCredits: 0
    };

    // Elementos del DOM
    const coursesGrid = document.getElementById('courses-grid');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const resetBtn = document.getElementById('reset-btn');
    const completeAllBtn = document.getElementById('complete-all-btn');

    // Inicializar la malla
    function initGrid() {
        coursesGrid.innerHTML = '';
        
        // Agrupar cursos por nivel
        const coursesByLevel = {};
        coursesData.forEach(course => {
            if (!coursesByLevel[course.level]) {
                coursesByLevel[course.level] = [];
            }
            coursesByLevel[course.level].push(course);
        });

        // Crear secciones por nivel
        for (const level in coursesByLevel) {
            const levelSection = document.createElement('div');
            levelSection.className = 'level-section';
            
            const levelTitle = document.createElement('h3');
            levelTitle.textContent = `Nivel ${level}`;
            levelSection.appendChild(levelTitle);
            
            const levelCourses = document.createElement('div');
            levelCourses.className = 'level-courses';
            
            coursesByLevel[level].forEach(course => {
                const courseElement = createCourseElement(course);
                levelCourses.appendChild(courseElement);
            });
            
            levelSection.appendChild(levelCourses);
            coursesGrid.appendChild(levelSection);
        }

        updateProgress();
    }

    // Crear elemento de curso
    function createCourseElement(course) {
        const courseElement = document.createElement('div');
        courseElement.className = `course ${course.type.toLowerCase()}`;
        courseElement.id = `course-${course.id}`;
        
        // Determinar si el curso está bloqueado
        const isLocked = course.prerequisites.length > 0 && 
                        !course.prerequisites.every(prereq => state.completedCourses.includes(prereq));
        
        if (isLocked) {
            courseElement.classList.add('locked');
        }
        
        if (state.completedCourses.includes(course.id)) {
            courseElement.classList.add('completed');
        }
        
        // Crear contenido del curso
        const levelSpan = document.createElement('span');
        levelSpan.className = 'course-level';
        levelSpan.textContent = `Nivel ${course.level}`;
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'course-title';
        titleDiv.textContent = course.name;
        
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'course-details';
        detailsDiv.innerHTML = `
            <div>Tipo: ${course.type}</div>
            <div>Semestre: ${course.semester}</div>
        `;
        
        const creditsDiv = document.createElement('div');
        creditsDiv.className = 'course-credits';
        creditsDiv.textContent = `${course.credits} créditos`;
        
        // Agregar prerrequisitos si existen
        if (course.prerequisites.length > 0) {
            const prereqsDiv = document.createElement('div');
            prereqsDiv.className = 'course-prerequisites';
            prereqsDiv.textContent = `Prerrequisitos: ${course.prerequisites.map(p => coursesData.find(c => c.id === p).name).join(', ')}`;
            detailsDiv.appendChild(prereqsDiv);
        }
        
        // Ensamblar el elemento
        courseElement.appendChild(levelSpan);
        courseElement.appendChild(titleDiv);
        courseElement.appendChild(detailsDiv);
        courseElement.appendChild(creditsDiv);
        
        // Agregar evento de clic
        if (!isLocked) {
            courseElement.addEventListener('click', () => toggleCourseCompletion(course.id));
        }
        
        return courseElement;
    }

    // Alternar estado de completado del curso
    function toggleCourseCompletion(courseId) {
        const index = state.completedCourses.indexOf(courseId);
        
        if (index === -1) {
            state.completedCourses.push(courseId);
        } else {
            state.completedCourses.splice(index, 1);
        }
        
        localStorage.setItem('completedCourses', JSON.stringify(state.completedCourses));
        initGrid(); // Reconstruir la malla para actualizar estados
    }

    // Actualizar barra de progreso
    function updateProgress() {
        state.earnedCredits = coursesData
            .filter(course => state.completedCourses.includes(course.id))
            .reduce((sum, course) => sum + course.credits, 0);
        
        const percentage = Math.round((state.earnedCredits / state.totalCredits) * 100);
        
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
        progressText.textContent = `${state.earnedCredits}/${state.totalCredits} créditos (${percentage}%)`;
    }

    // Reiniciar progreso
    resetBtn.addEventListener('click', () => {
        state.completedCourses = [];
        localStorage.setItem('completedCourses', JSON.stringify(state.completedCourses));
        initGrid();
    });

    // Completar todos los cursos
    completeAllBtn.addEventListener('click', () => {
        state.completedCourses = coursesData.map(course => course.id);
        localStorage.setItem('completedCourses', JSON.stringify(state.completedCourses));
        initGrid();
    });

    // Inicializar la aplicación
    initGrid();
});
