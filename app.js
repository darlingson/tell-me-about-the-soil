import Fastify from 'fastify'
const soilStructure = {
    blantyre: {
        soilType: "Sandy loam",
        suitableCrops: ["Maize", "Groundnuts", "Tobacco"]
    },
    lilongwe: {
        soilType: "Clay loam",
        suitableCrops: ["Maize", "Soybeans", "Tobacco"]
    },
    mzuzu: {
        soilType: "Sandy clay loam",
        suitableCrops: ["Tea", "Coffee", "Macadamia"]
    }
};
const fastify = Fastify({
    logger: true
})
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})
fastify.get('/location/:name',async()=>{
  //check if name is in soilStructure
  if(soilStructure[name]){
      return soilStructure[name]
  }
  else{
      return {
          soilType: "Unknown",
          suitableCrops: ["Unknown"]
      }
  }
})
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()