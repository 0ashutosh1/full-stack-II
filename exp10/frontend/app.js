const output = document.getElementById('output')
const apiBaseInput = document.getElementById('apiBase')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

let authToken = ''

function print(data) {
  output.textContent = typeof data === 'string' ? data : JSON.stringify(data, null, 2)
}

async function request(path, options = {}) {
  const base = apiBaseInput.value.trim() || 'http://localhost:5000'
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) }

  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
  }

  const response = await fetch(`${base}${path}`, {
    ...options,
    headers,
  })

  const data = await response.json().catch(() => ({ message: 'No JSON response' }))
  if (!response.ok) {
    throw new Error(JSON.stringify(data))
  }
  return data
}

document.getElementById('loginBtn').addEventListener('click', async () => {
  try {
    const data = await request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameInput.value.trim(),
        password: passwordInput.value,
      }),
    })

    authToken = data.token
    print({ message: 'Login successful', user: data.username, role: data.role })
  } catch (error) {
    print(`Login failed: ${error.message}`)
  }
})

document.getElementById('profileBtn').addEventListener('click', async () => {
  try {
    const data = await request('/api/auth/profile')
    print(data)
  } catch (error) {
    print(`Profile failed: ${error.message}`)
  }
})

document.querySelectorAll('.callBtn').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      const data = await request(button.dataset.endpoint)
      print(data)
    } catch (error) {
      print(`Request failed: ${error.message}`)
    }
  })
})

document.querySelectorAll('.cred').forEach((button) => {
  button.addEventListener('click', () => {
    usernameInput.value = button.dataset.user
    passwordInput.value = button.dataset.pass
  })
})
