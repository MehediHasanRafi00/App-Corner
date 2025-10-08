export const loadInstalledData = () => {
    try{
        const data =localStorage.getItem('installed')
        return data? JSON.parse(data) : []
    } catch(err){
        console.log(err)
        return []
    }
}

export const updateInstalledData = (app) => {
    const loadData = loadInstalledData()
    try{
        const isDuplicate = loadData.some(a=>a.id === app.id)
        if(isDuplicate){
            return
        }
        const updateApps = [...loadData,app]
        localStorage.setItem('installed', JSON.stringify(updateApps))
    }catch(err){
        console.log(err)
        
    }
}

export const  removeInstalledData = (id) => {
    const loadData = loadInstalledData()

    try{
        const updateApps = loadData.filter(a=> a.id !== id)
        localStorage.setItem('installed', JSON.stringify(updateApps))
    }catch(err){
        console.log(err)
        
    }
}