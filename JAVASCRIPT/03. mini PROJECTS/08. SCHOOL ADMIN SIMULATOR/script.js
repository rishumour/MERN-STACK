// Mock initial data if local storage is empty
const INITIAL_MEMBERS = [
    { id: "MEM-1001", name: "Sarah Jenkins", email: "sarah.j@school.edu", phone: "9876543210", role: "Teacher", dept: "Mathematics" },
    { id: "MEM-1002", name: "David Chen", email: "d.chen@school.edu", phone: "8765432109", role: "Student", dept: "Grade 11" },
    { id: "MEM-1003", name: "Elena Rostova", email: "e.rostova@school.edu", phone: "7654321098", role: "Staff", dept: "Admissions" }
];

// Initialize State
let members = [];
let nextId = 1004;

// Load data from LocalStorage
function loadState() {
    const savedMembers = localStorage.getItem('school_members');
    const savedNextId = localStorage.getItem('school_next_id');
    
    if (savedMembers) {
        members = JSON.parse(savedMembers);
    } else {
        members = [...INITIAL_MEMBERS];
        localStorage.setItem('school_members', JSON.stringify(members));
    }
    
    if (savedNextId) {
        nextId = parseInt(savedNextId);
    } else {
        nextId = 1004;
        localStorage.setItem('school_next_id', nextId);
    }
}

// Save data to LocalStorage
function saveState() {
    localStorage.setItem('school_members', JSON.stringify(members));
    localStorage.setItem('school_next_id', nextId);
}

// DOM Elements
const registrationForm = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const roleSelect = document.getElementById('role');
const deptInput = document.getElementById('dept');

const btnSubmit = document.getElementById('btnSubmit');
const btnText = btnSubmit.querySelector('.btn-text');
const spinner = btnSubmit.querySelector('.spinner');
const statusContainer = document.getElementById('statusContainer');
const statusMessage = document.getElementById('statusMessage');

const registryTableBody = document.getElementById('registryTableBody');
const noResults = document.getElementById('noResults');
const searchBar = document.getElementById('searchBar');

const statTotal = document.getElementById('statTotal');
const statStudents = document.getElementById('statStudents');
const statTeachers = document.getElementById('statTeachers');
const statStaff = document.getElementById('statStaff');

// Render Members Table
function renderMembers(filteredList = members) {
    registryTableBody.innerHTML = '';
    
    if (filteredList.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    filteredList.forEach(member => {
        const tr = document.createElement('tr');
        
        // Define role badge class
        const roleClass = member.role.toLowerCase();
        
        tr.innerHTML = `
            <td><span class="member-id">${member.id}</span></td>
            <td>
                <span class="member-name">${escapeHTML(member.name)}</span>
                <span class="member-email">${escapeHTML(member.email)}</span>
            </td>
            <td><span class="badge ${roleClass}">${member.role}</span></td>
            <td>${escapeHTML(member.dept)}</td>
            <td>${escapeHTML(member.phone)}</td>
            <td class="actions-cell">
                <button class="btn-delete" title="Delete Member" onclick="deleteMember('${member.id}')">
                    <svg class="delete-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
        `;
        
        registryTableBody.appendChild(tr);
    });
}

// Update Dashboard Statistics Cards
function updateStats() {
    const total = members.length;
    const students = members.filter(m => m.role === 'Student').length;
    const teachers = members.filter(m => m.role === 'Teacher').length;
    const staff = members.filter(m => m.role === 'Staff').length;
    
    // Animate stats change for premium feel
    animateCounter(statTotal, total);
    animateCounter(statStudents, students);
    animateCounter(statTeachers, teachers);
    animateCounter(statStaff, staff);
}

// Counter animation helper
function animateCounter(element, targetValue) {
    const startValue = parseInt(element.textContent) || 0;
    if (startValue === targetValue) {
        element.textContent = targetValue;
        return;
    }
    
    let current = startValue;
    const duration = 400; // ms
    const stepTime = Math.abs(Math.floor(duration / (targetValue - startValue || 1)));
    const increment = targetValue > startValue ? 1 : -1;
    
    // Ensure step time doesn't freeze the UI
    const safeStepTime = Math.max(stepTime, 20);
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === targetValue) {
            clearInterval(timer);
        }
    }, safeStepTime);
}

// Utility to Escape HTML (Prevents XSS)
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

// Input Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

function validateField(inputElement, validationFn) {
    const isValid = validationFn(inputElement.value.trim());
    if (!isValid) {
        inputElement.classList.add('invalid');
    } else {
        inputElement.classList.remove('invalid');
    }
    return isValid;
}

// Standard setup for instant input correction
function setupInstantValidation(inputElement, validationFn) {
    const listener = () => {
        if (inputElement.classList.contains('invalid')) {
            const isValid = validationFn(inputElement.value.trim());
            if (isValid) {
                inputElement.classList.remove('invalid');
            }
        }
    };
    inputElement.addEventListener('input', listener);
    if (inputElement.tagName === 'SELECT') {
        inputElement.addEventListener('change', listener);
    }
}

// Setup listeners for each input element
setupInstantValidation(fullNameInput, val => val.length >= 3);
setupInstantValidation(emailInput, val => validateEmail(val));
setupInstantValidation(phoneInput, val => validatePhone(val));
setupInstantValidation(roleSelect, val => val !== "");
setupInstantValidation(deptInput, val => val.length >= 1);

// Handle Registration Form Submission
registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Perform full validation check
    const isNameValid = validateField(fullNameInput, val => val.length >= 3);
    const isEmailValid = validateField(emailInput, val => validateEmail(val));
    const isPhoneValid = validateField(phoneInput, val => validatePhone(val));
    const isRoleValid = validateField(roleSelect, val => val !== "");
    const isDeptValid = validateField(deptInput, val => val.length >= 1);
    
    const isFormValid = isNameValid && isEmailValid && isPhoneValid && isRoleValid && isDeptValid;
    
    if (!isFormValid) {
        // Find the first invalid element and focus it for accessibility
        const firstInvalid = registrationForm.querySelector('.invalid');
        if (firstInvalid) {
            firstInvalid.focus();
        }
        return;
    }
    
    // If we're already loading, don't submit again
    if (btnSubmit.disabled) return;
    
    // Trigger Loading State
    btnSubmit.disabled = true;
    btnText.textContent = "Registering...";
    spinner.classList.remove('hidden');
    statusContainer.classList.add('hidden');
    
    // Create new member object
    const newMember = {
        id: `MEM-${nextId}`,
        name: fullNameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        role: roleSelect.value,
        dept: deptInput.value.trim()
    };
    
    // Simulate server/db timeout
    setTimeout(() => {
        // Add member to state & save
        members.push(newMember);
        nextId++;
        saveState();
        
        // Re-render and update stats
        renderMembers();
        updateStats();
        
        // Show status message below button
        statusContainer.classList.remove('hidden');
        
        // Restore button state
        btnSubmit.disabled = false;
        btnText.textContent = "Register Member";
        spinner.classList.add('hidden');
        
        // Reset Form Fields
        registrationForm.reset();
        
        // Ensure no validation classes remain after reset
        const allInputs = registrationForm.querySelectorAll('input, select');
        allInputs.forEach(input => input.classList.remove('invalid'));
        
        // Auto-hide the success message after 3.5 seconds
        setTimeout(() => {
            statusContainer.classList.add('hidden');
        }, 3500);
        
    }, 1500); // 1.5 second timeout as requested
});

// Delete Member Handler
window.deleteMember = function(id) {
    if (confirm(`Are you sure you want to remove school member ${id}?`)) {
        members = members.filter(member => member.id !== id);
        saveState();
        
        // Re-evaluate current search/filter state or just render full list
        const query = searchBar.value.trim().toLowerCase();
        if (query) {
            filterAndRender(query);
        } else {
            renderMembers();
        }
        updateStats();
    }
};

// Filter & Render helper
function filterAndRender(query) {
    const filtered = members.filter(member => 
        member.name.toLowerCase().includes(query) ||
        member.id.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.dept.toLowerCase().includes(query)
    );
    renderMembers(filtered);
}

// Search bar filter handler
searchBar.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    filterAndRender(query);
});

// Hide status message early if user interacts with the form again
registrationForm.addEventListener('input', () => {
    statusContainer.classList.add('hidden');
});

// Initialize Portal on Load
window.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderMembers();
    // Set initial text content for stats directly to avoid animation glitch from 0 to mock values
    const total = members.length;
    const students = members.filter(m => m.role === 'Student').length;
    const teachers = members.filter(m => m.role === 'Teacher').length;
    const staff = members.filter(m => m.role === 'Staff').length;
    
    statTotal.textContent = total;
    statStudents.textContent = students;
    statTeachers.textContent = teachers;
    statStaff.textContent = staff;
});
