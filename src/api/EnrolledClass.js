export const getEnRolledClass = async email =>{
    const response = await fetch(`https://youngstar-sports-server.vercel.app/enrollclass?email=${email}`)
    const enRolledClass = await response.json()
    return enRolledClass
}