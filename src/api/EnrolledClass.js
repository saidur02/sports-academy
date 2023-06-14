export const getEnRolledClass = async email =>{
    const response = await fetch(`http://localhost:5000/dashboard/enrollclass?email=${email}`)
    const enRolledClass = await response.json()
    return enRolledClass
}