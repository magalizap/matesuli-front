export const signupUser = async (client) => {
    const response = await fetch(`http://localhost:4000/api/sessions/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(client)
    })
    const user = await response.json()
    console.log(user)
    return user
}

export const dataCurrent = async () => {
    const response = fetch('http://localhost:4000/api/sessions/current', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    const profile = await response.json()
    console.log(profile)
    return profile
}