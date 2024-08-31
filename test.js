document.addEventListener('DOMContentLoaded', () => {
    const createAssessmentBtn = document.getElementById('createAssessmentBtn');
    const searchBar = document.getElementById('searchBar');
    const typeFilter = document.getElementById('typeFilter');
    const sortFilter = document.getElementById('sortFilter');
    const assessmentList = document.getElementById('assessmentList');
    const activityList = document.getElementById('activityList');
    const analytics = document.getElementById('analytics');

    const assessments = [
        { title: 'Math Quiz 1', type: 'quiz', date: '2024-08-20', popularity: 50, completion: 80 },
        { title: 'History Assignment', type: 'assignment', date: '2024-08-18', popularity: 30, completion: 60 },
        // Add more assessments as needed
    ];

    const activities = [
        { description: 'Student John Doe submitted Math Quiz 1', date: '2024-08-29' },
        { description: 'Feedback given for History Assignment', date: '2024-08-28' },
        // Add more activities as needed
    ];

    const updateAssessmentList = () => {
        assessmentList.innerHTML = '';
        const filteredAssessments = assessments
            .filter(a => typeFilter.value === '' || a.type === typeFilter.value)
            .sort((a, b) => {
                if (sortFilter.value === 'date') return new Date(b.date) - new Date(a.date);
                if (sortFilter.value === 'popularity') return b.popularity - a.popularity;
                if (sortFilter.value === 'completion') return b.completion - a.completion;
                return 0;
            });

        filteredAssessments.forEach(a => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${a.title}</strong>
                <p>Type: ${a.type}</p>
                <p>Date: ${a.date}</p>
                <p>Popularity: ${a.popularity}</p>
                <p>Completion Rate: ${a.completion}%</p>
                <button onclick="viewAnalytics('${a.title}')">View Analytics</button>
                <button onclick="editAssessment('${a.title}')">Edit</button>
                <button onclick="manageAssessment('${a.title}')">Manage</button>
            `;
            assessmentList.appendChild(li);
        });
    };

    const updateActivityList = () => {
        activityList.innerHTML = '';
        activities.forEach(a => {
            const li = document.createElement('li');
            li.innerHTML = `
                <p>${a.description}</p>
                <p><em>${a.date}</em></p>
            `;
            activityList.appendChild(li);
        });
    };

    const updateAnalyticsSummary = () => {
        analytics.innerHTML = `
            <p>Total Assessments: ${assessments.length}</p>
            <p>Average Completion Rate: ${assessments.reduce((sum, a) => sum + a.completion, 0) / assessments.length}%</p>
        `;
    };

    const viewAnalytics = (title) => {
        alert(`Viewing analytics for ${title}`);
    };

    const editAssessment = (title) => {
        alert(`Editing ${title}`);
    };

    const manageAssessment = (title) => {
        alert(`Managing ${title}`);
    };

    createAssessmentBtn.addEventListener('click', () => {
        window.location.href = 'create-assessment.html';
    });

    searchBar.addEventListener('input', () => {
        updateAssessmentList();
    });

    typeFilter.addEventListener('change', () => {
        updateAssessmentList();
    });

    sortFilter.addEventListener('change', () => {
        updateAssessmentList();
    });

    updateAssessmentList();
    updateActivityList();
    updateAnalyticsSummary();
});
