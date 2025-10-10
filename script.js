document.addEventListener('DOMContentLoaded', () => {
    // Data objects (questions, personalityTypes) are unchanged...
    const questions = [ { question: "At a social party, you are more likely to:", options: [ { text: "Introduce yourself and chat with many different people.", trait: "E" }, { text: "Stick to a small group of people you already know well.", trait: "I" }] }, { question: "When learning something new, you prefer:", options: [ { text: "Practical, hands-on experience and real-world examples.", trait: "S" }, { text: "Theoretical concepts and exploring underlying patterns.", trait: "N" }] }, { question: "When a friend is upset about a situation, you first:", options: [ { text: "Analyze their problem and offer a logical solution.", trait: "T" }, { text: "Provide emotional support and show you understand their feelings.", trait: "F" }] }, { question: "How do you prefer to approach your weekend?", options: [ { text: "Schedule most of your activities in advance.", trait: "J" }, { text: "Keep your options open and decide as you go.", trait: "P" }] }, { question: "In a group project, you contribute best by:", options: [ { text: "Brainstorming and discussing ideas with the team frequently.", trait: "E" }, { text: "Taking your assigned part and working on it independently.", trait: "I" }] }, { question: "You tend to trust:", options: [ { text: "Your direct experiences and what you can observe.", trait: "S" }, { text: "Your intuition and the possibilities you envision.", trait: "N" }] }, { question: "You believe it is more important to be:", options: [ { text: "Just and impartial, even if it causes conflict.", trait: "T" }, { text: "Harmonious and compassionate, even if it means bending rules.", trait: "F" }] }, { question: "Your typical work style is:", options: [ { text: "Methodical, finishing one task before starting another.", trait: "J" }, { text: "Flexible, juggling multiple projects and adapting as needed.", trait: "P" }] } ];
    const personalityTypes = { intj: { name: "The Architect", strengths: ["Highly Strategic & Logical", "Independent & Decisive", "Knowledge-Seeking", "Confident in Their Vision"], weaknesses: ["Can Be Arrogant or Critical", "Dismissive of Emotions", "Overly Analytical", "Loathe Highly Structured Rules"], careerPaths: ["Scientist", "Engineer", "Corporate Strategist", "Lawyer", "Judge", "Systems Analyst"] }, intp: { name: "The Logician", strengths: ["Analytical & Abstract Thinker", "Imaginative & Original", "Open-Minded & Curious", "Objective"], weaknesses: ["Private & Withdrawn", "Insensitive or Oblivious to Feelings", "Prone to Analysis Paralysis", "Dislike Practical Matters"], careerPaths: ["Philosopher", "Professor", "Computer Programmer", "Photographer", "Technical Writer", "Data Analyst"] }, entj: { name: "The Commander", strengths: ["Highly Efficient & Energetic", "Confident & Strong-Willed", "Strategic & Long-Range Planners", "Natural Leaders"], weaknesses: ["Impatient & Domineering", "Intolerant of Inefficiency", "Can Be Insensitive or Abrasive", "Struggle to Handle Their Own Emotions"], careerPaths: ["CEO", "Executive", "Entrepreneur", "Business Administrator", "Military Officer", "Politician", "Manager"] }, entp: { name: "The Debater", strengths: ["Quick-Witted & Knowledgeable", "Excellent Brainstormer", "Charismatic & Energetic", "Enjoy Intellectual Challenges"], weaknesses: ["Can Be Argumentative & Insensitive", "Intolerant of Practical Details", "Dislike Routine and Long-Term Focus", "May Struggle to Finish Projects"], careerPaths: ["Lawyer", "Psychologist", "Entrepreneur", "Sales Representative", "Systems Analyst", "Consultant"] }, infj: { name: "The Advocate", strengths: ["Creative & Insightful", "Principled & Passionate", "Altruistic & Inspiring", "Determined"], weaknesses: ["Highly Sensitive to Criticism", "Reluctant to Open Up", "Perfectionistic", "Prone to Burnout"], careerPaths: ["Counselor", "Therapist", "Teacher", "Social Worker", "Writer", "HR Manager"] }, infp: { name: "The Mediator", strengths: ["Idealistic & Empathetic", "Open-Minded & Creative", "Passionate & Dedicated", "Value Harmony"], weaknesses: ["Overly Idealistic & Impractical", "Too Self-Critical", "Can Be Difficult to Get to Know", "Dislike Dealing with Data"], careerPaths: ["Artist", "Writer", "Poet", "Graphic Designer", "Psychologist", "Librarian"] }, enfj: { name: "The Protagonist", strengths: ["Charismatic & Inspiring", "Empathetic & Altruistic", "Natural Leader", "Excellent Communicator"], weaknesses: ["Overly Idealistic", "Too Selfless, Neglecting Own Needs", "Can Be Patronizing", "Struggle with Making Tough, Impersonal Decisions"], careerPaths: ["Teacher", "Diplomat", "Politician", "Sales Manager", "PR Specialist", "Life Coach"] }, enfp: { name: "The Campaigner", strengths: ["Curious & Enthusiastic", "Excellent Communicator", "Know How to Relax and Have Fun", "Highly Creative"], weaknesses: ["Easily Stressed", "Overthinks Things", "Can Be Disorganized", "Struggle with Follow-Through"], careerPaths: ["Journalist", "Actor", "Travel Agent", "Creative Director", "Event Planner", "Musician"] }, istj: { name: "The Logistician", strengths: ["Honest & Direct", "Strong-willed & Dutiful", "Very Responsible & Reliable", "Calm & Practical"], weaknesses: ["Stubborn & Inflexible", "Insensitive to Others' Feelings", "Always 'By the Book'", "Tendency to Blame Themselves"], careerPaths: ["Accountant", "Auditor", "Military Officer", "Database Manager", "Civil Engineer", "Technician"] }, isfj: { name: "The Defender", strengths: ["Supportive & Reliable", "Patient & Observant", "Hardworking & Loyal", "Excellent Practical Skills"], weaknesses: ["Too Humble & Shy", "Takes Things Too Personally", "Represses Their Feelings", "Averse to Change"], careerPaths: ["Nurse", "Teacher", "Social Worker", "Interior Designer", "Personal Assistant", "Administrator"] }, estj: { name: "The Executive", strengths: ["Dedicated & Strong-Willed", "Direct & Honest", "Excellent Organizer", "Loyal & Reliable"], weaknesses: ["Inflexible & Stubborn", "Uncomfortable with Unconventional Situations", "Can Be Judgmental", "Struggle to Express Emotion"], careerPaths: ["Judge", "Financial Officer", "Hotel Manager", "Real Estate Agent", "School Administrator", "Manager"] }, esfj: { name: "The Consul", strengths: ["Strong Practical Skills", "Strong Sense of Duty", "Very Loyal & Sociable", "Good at Connecting with Others"], weaknesses: ["Worried about Social Status", "Inflexible & Averse to Criticism", "Can Be Needy for Approval", "Often Too Selfless"], careerPaths: ["Event Coordinator", "Nursing Administrator", "Receptionist", "Social Worker", "Team Supervisor", "Physician"] }, istp: { name: "The Virtuoso", strengths: ["Optimistic & Energetic", "Creative & Practical", "Spontaneous & Rational", "Excellent in a Crisis"], weaknesses: ["Stubborn & Insensitive", "Private & Reserved", "Easily Bored", "Dislike Commitment"], careerPaths: ["Mechanic", "Engineer", "Forensic Scientist", "Pilot", "Paramedic", "Technician"] }, isfp: { name: "The Adventurer", strengths: ["Charming & Sensitive", "Imaginative & Passionate", "Curious & Artistic", "Flexible"], weaknesses: ["Fiercely Independent", "Unpredictable & Easily Stressed", "Overly Competitive", "Dislike Long-Term Planning"], careerPaths: ["Artist", "Musician", "Fashion Designer", "Chef", "Forest Ranger", "Veterinarian"] }, estp: { name: "The Entrepreneur", strengths: ["Bold & Action-Oriented", "Original & Perceptive", "Direct & Sociable", "Thrive in the Moment"], weaknesses: ["Insensitive & Impatient", "Prone to Unnecessary Risk", "Can Be Unstructured", "Dislike Abstract Theory"], careerPaths: ["Detective", "Paramedic", "Firefighter", "Financial Advisor", "Sales Manager", "Consultant"] }, esfp: { name: "The Entertainer", strengths: ["Bold & Original", "Excellent People Skills", "Aesthetic & Showmanlike", "Practical & Observant"], weaknesses: ["Sensitive & Conflict-Averse", "Easily Bored", "Poor Long-Term Planners", "Can Be Unfocused"], careerPaths: ["Actor", "Event Planner", "Tour Guide", "Flight Attendant", "Comedian", "Musician"] }, enigma: { name: "The Enigma", strengths: ["Highly Adaptable & Versatile", "See things from multiple perspectives", "Open-minded to different approaches", "Can fit into many different roles"], weaknesses: ["Can seem inconsistent or unpredictable", "May struggle with a clear, single identity", "Decision-making can be difficult", "Prone to being misunderstood"], careerPaths: ["Consultant", "Freelancer", "Artist", "Entrepreneur", "Any field requiring high adaptability"] } };

    // --- STATE MANAGEMENT & DOM ELEMENTS ---
    let currentQuestionIndex = 0, answers = [], currentUser = '', isQuizActive = false;
    const screens = document.querySelectorAll('.screen');
    const nameInput = document.getElementById('name-input');
    const startBtn = document.getElementById('start-btn');
    const menuGreeting = document.getElementById('menu-greeting');
    const questionText = document.getElementById('question-text');
    const answerBtns = document.querySelectorAll('.answer-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // --- NAVIGATION ---
    const showScreen = (screenId) => { screens.forEach(screen => screen.classList.remove('active')); document.getElementById(screenId).classList.add('active'); };
    document.querySelectorAll('[data-target]').forEach(button => { button.addEventListener('click', () => { const targetScreen = button.getAttribute('data-target'); if (targetScreen === 'test-screen') startTest(); else if (targetScreen === 'history-screen') { renderHistory(); showScreen('history-screen'); } else if (targetScreen === 'types-screen') { renderAllTypes(); showScreen('types-screen'); } else showScreen(targetScreen); }); });

    // --- WELCOME & QUIZ LOGIC ---
    const handleStart = () => { const name = nameInput.value.trim(); if (name) { currentUser = name; const hour = new Date().getHours(); let greeting = (hour < 12) ? "Good morning" : (hour < 18) ? "Good afternoon" : "Good evening"; menuGreeting.textContent = `${greeting}, ${currentUser}!`; showScreen('menu-screen'); } else alert('Please enter your name.'); };
    startBtn.addEventListener('click', handleStart);
    nameInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') handleStart(); });
    const startTest = () => { currentQuestionIndex = 0; answers = []; isQuizActive = true; renderQuestion(); showScreen('test-screen'); };
    const renderQuestion = () => { if (currentQuestionIndex < questions.length) { const question = questions[currentQuestionIndex]; questionText.textContent = question.question; answerBtns[0].textContent = question.options[0].text; answerBtns[1].textContent = question.options[1].text; progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`; progressText.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`; } else { if (isQuizActive) showResults(); } };
    answerBtns.forEach(button => { button.addEventListener('click', (e) => { if (!isQuizActive) return; const optionIndex = parseInt(e.target.getAttribute('data-option')); const trait = questions[currentQuestionIndex].options[optionIndex].trait; answers.push(trait); e.target.classList.add('selected'); setTimeout(() => { e.target.classList.remove('selected'); currentQuestionIndex++; renderQuestion(); }, 350); }); });

    // --- RESULTS LOGIC (Image display removed) ---
    const showResults = () => {
        isQuizActive = false;
        const resultData = determinePersonality();
        const type = resultData.type;
        const typeInfo = personalityTypes[type.toLowerCase()];

        if (!typeInfo) { console.error(`Could not find personality info for type: ${type}`); alert("An error occurred."); showScreen('menu-screen'); return; }

        document.getElementById('personality-type').textContent = type.toUpperCase();
        document.getElementById('personality-name').textContent = typeInfo.name;
        
        const detailsContainer = document.getElementById('result-details-container');
        const createSection = (title, items, sectionName) => { const listItems = items.map(item => `<li>${item}</li>`).join(''); return `<div class="info-section" data-section="${sectionName}"><h3>${title}</h3><ul>${listItems}</ul></div>`; };
        let detailsHtml = '';
        detailsHtml += createSection('Strengths', typeInfo.strengths, 'strengths');
        detailsHtml += createSection('Weaknesses', typeInfo.weaknesses, 'weaknesses');
        detailsHtml += createSection('Ideal Career Paths', typeInfo.careerPaths, 'careers');
        detailsContainer.innerHTML = detailsHtml;
        
        saveHistory(type.toUpperCase());
        showScreen('results-screen');
    };

    // --- Scoring logic for Enigma case ---
    const determinePersonality = () => {
        const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        answers.forEach(answer => { if (scores[answer] !== undefined) scores[answer]++; });

        let tieCount = 0;
        if (scores.E === scores.I) tieCount++;
        if (scores.S === scores.N) tieCount++;
        if (scores.T === scores.F) tieCount++;
        if (scores.J === scores.P) tieCount++;

        if (tieCount >= 2) {
            return { type: 'Enigma', isMixed: true };
        }

        let result = '';
        result += scores.E >= scores.I ? 'E' : 'I';
        result += scores.S >= scores.N ? 'S' : 'N';
        result += scores.T >= scores.F ? 'T' : 'F';
        result += scores.J >= scores.P ? 'J' : 'P';
        return { type: result, isMixed: false };
    };
    
    // --- HISTORY & ALL TYPES LOGIC ---
    const getHistory = () => JSON.parse(localStorage.getItem('mbtiHistory')) || [];
    const saveHistory = (type) => { const history = getHistory(); const newEntry = { name: currentUser, type: type, date: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }) }; history.unshift(newEntry); localStorage.setItem('mbtiHistory', JSON.stringify(history.slice(0, 20))); };
    const renderHistory = () => { const history = getHistory(); const container = document.getElementById('history-container'); if (history.length === 0) { container.innerHTML = '<p class="subtitle">No history yet.</p>'; document.getElementById('clear-history-btn').style.display = 'none'; } else { container.innerHTML = history.map(entry => `<div class="history-card"><div class="history-card-header"><span class="history-type">${entry.type}</span><span class="history-date">${entry.date}</span></div><p class="history-name">Test taken by: ${entry.name}</p></div>`).join(''); document.getElementById('clear-history-btn').style.display = 'block'; } };
    document.getElementById('clear-history-btn').addEventListener('click', () => { if (confirm('Are you sure you want to clear all history?')) { localStorage.removeItem('mbtiHistory'); renderHistory(); } });
    const renderAllTypes = () => { const container = document.getElementById('all-types-container'); container.innerHTML = Object.keys(personalityTypes).filter(type => type !== 'enigma').map(type => { const info = personalityTypes[type]; return `<div class="type-card"><h3>${type.toUpperCase()} - ${info.name}</h3><div class="info-section" data-section="strengths"><h4>Strengths</h4><ul>${info.strengths.map(i => `<li>${i}</li>`).join('')}</ul></div></div>`; }).join(''); };
    
    showScreen('welcome-screen');
});