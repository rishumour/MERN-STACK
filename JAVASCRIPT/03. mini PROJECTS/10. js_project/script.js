function BankAccount (customerName, balance){
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance

    this.deposit = function(amount){
        this.balance += amount
    }

    this.withdraw = function(amount){
        this.balance -= amount
    }
}

const accounts = []
const accountForm = document.getElementById('accountForm')
const customerName = document.querySelector('#customerName')
const balance = document.querySelector('#balance')

const depositForm = document.getElementById('depositForm')
const accNum = document.querySelector('#accNum')
const amnt = document.querySelector('#amnt')

const withdrawForm = document.getElementById('withdrawForm')
const withdrawAccNum = document.querySelector('#withdrawAccNum')
const withdrawAmnt = document.querySelector('#withdrawAmnt')

const accountSearch = document.getElementById('accountSearch')

// Notification Helper
function showNotification(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '';
    if (type === 'success') {
        icon = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
        `;
    } else if (type === 'error') {
        icon = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
        `;
    } else {
        icon = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
        `;
    }

    toast.innerHTML = `
        ${icon}
        <span style="font-size: 0.9rem;">${escapeHTML(message)}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.4s ease-out forwards';
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 3500);
}

// XSS Prevention Helper
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

// Clipboard Copy Helper
window.copyAccountNumber = function(text, buttonEl) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = buttonEl.innerHTML;
        buttonEl.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            Copied!
        `;
        buttonEl.classList.add('copied');
        
        showNotification('Account number copied to clipboard', 'info');
        
        setTimeout(() => {
            buttonEl.innerHTML = originalHTML;
            buttonEl.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showNotification('Failed to copy account number', 'error');
    });
}

// Render Accounts
function updateAccountsList(filterText = '') {
    const container = document.getElementById('accountsContainer');
    if (!container) return;
    
    container.innerHTML = '';

    const filteredAccounts = accounts.filter(acc => 
        acc.customerName.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredAccounts.length === 0) {
        container.innerHTML = `
            <div class="no-accounts">
                ${filterText ? 'No matching accounts found.' : 'No active accounts registered yet. Use the form on the left to create one.'}
            </div>
        `;
        return;
    }

    filteredAccounts.forEach(acc => {
        const card = document.createElement('div');
        card.className = 'account-card';
        card.innerHTML = `
            <div class="account-details">
                <div class="holder-name">${escapeHTML(acc.customerName)}</div>
                <div class="account-number-wrapper">
                    <span>Acc: <strong>${acc.accountNumber}</strong></span>
                    <button class="copy-btn" onclick="copyAccountNumber('${acc.accountNumber}', this)">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        Copy
                    </button>
                </div>
            </div>
            <div class="account-balance-wrapper">
                <div class="balance-label">Current Balance</div>
                <div class="balance-amount">$${acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Create Account Submit
accountForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const nameVal = customerName.value.trim()
    const balVal = +balance.value
    
    if (!nameVal) {
        showNotification('Please enter a valid customer name', 'error')
        return
    }
    if (isNaN(balVal) || balVal < 0) {
        showNotification('Please enter a valid initial balance', 'error')
        return
    }

    const account = new BankAccount(nameVal, balVal)
    accounts.push(account)
    
    updateAccountsList(accountSearch ? accountSearch.value : '')
    showNotification(`Account successfully created for ${nameVal}!`, 'success')
    console.log(accounts)
    
    accountForm.reset()
})

// Deposit Submit
depositForm.addEventListener('submit', function(e){
    e.preventDefault()
    const accNumVal = +accNum.value.trim()
    const amountVal = +amnt.value
    
    if (isNaN(accNumVal)) {
        showNotification('Invalid account number format', 'error')
        return
    }
    if (isNaN(amountVal) || amountVal <= 0) {
        showNotification('Please enter a valid deposit amount', 'error')
        return
    }

    const account = accounts.find(acc => acc.accountNumber === accNumVal)
    if (account) {
        account.deposit(amountVal)
        updateAccountsList(accountSearch ? accountSearch.value : '')
        showNotification(`Successfully deposited $${amountVal} to account ${accNumVal}!`, 'success')
        console.log(accounts)
        depositForm.reset()
    } else {
        showNotification(`Account ${accNum.value} not found`, 'error')
        console.log('Account not found')
    }
})

// Withdraw Submit
withdrawForm.addEventListener('submit', function(e){
    e.preventDefault()
    const accNumVal = +withdrawAccNum.value.trim()
    const amountVal = +withdrawAmnt.value
    
    if (isNaN(accNumVal)) {
        showNotification('Invalid account number format', 'error')
        return
    }
    if (isNaN(amountVal) || amountVal <= 0) {
        showNotification('Please enter a valid withdrawal amount', 'error')
        return
    }

    const account = accounts.find(acc => acc.accountNumber === accNumVal)
    if (account) {
        if (account.balance < amountVal) {
            showNotification(`Insufficient balance in account ${accNumVal}. Current balance: $${account.balance}`, 'error')
            return
        }
        account.withdraw(amountVal)
        updateAccountsList(accountSearch ? accountSearch.value : '')
        showNotification(`Successfully withdrew $${amountVal} from account ${accNumVal}!`, 'success')
        console.log(accounts)
        withdrawForm.reset()
    } else {
        showNotification(`Account ${withdrawAccNum.value} not found`, 'error')
        console.log('Account not found')
    }
})

// Search Event
if (accountSearch) {
    accountSearch.addEventListener('input', function(e) {
        updateAccountsList(e.target.value)
    })
}