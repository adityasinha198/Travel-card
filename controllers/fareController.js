const moment = require('moment')


class fareController{

    async addFare(req){
        console.log(req.body)
        
      let weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday"]
      let weekend = ["Saturday","Sunday"]
      const time = moment().format("HH:mm")
      const current = moment(`${time}`,"HH:mm")
      const from = req.body.from
      const to = req.body.to

      const day = moment().format('dddd')

      if(weekdays.includes(day)){

       
        const start1 =  moment('07:30',"HH:mm")
        const end1 = moment('10:30',"HH:mm")
        const start2 = moment('17:00',"HH:mm")
        const end2 = moment('20:00',"HH:mm")

        if((current>start1 && current<end1) ||(current>start2 && current<end2)){

            if((from == "Zone1" && to == "Zone2") ||(from == "Zone2" && to == "Zone1")){

                return {
                    fare:35
                }
            }
            
            if(from == 'Zone1' && to == "Zone1"){

                return {
                    fare:30
                }
            }
            if(from == 'Zone2' && to == "Zone2"){

                return {
                    fare:25
                }
            }
        

        }
    }


        if(weekend.includes(day)){

        const start1 =  moment('09:00',"HH:mm")
        const end1 = moment('11:00',"HH:mm")
        const start2 = moment('18:00',"HH:mm")
        const end2 = moment('22:00',"HH:mm")

        if((current>start1 && current<end1) ||(current>start2 && current<end2)){
            
            if((from == "Zone1" && to == "Zone2") ||(from == "Zone2" && to == "Zone1")){

                return {
                    fare:35
                }
            }
            
            if(from == 'Zone1' && to == "Zone1"){

                return {
                    fare:30
                }
            }
            if(from == 'Zone2' && to == "Zone2"){

                return {
                    fare:25
                }
            }
        
            


        }




        }


            // Off peak hours

        if(weekdays.includes(day)){

       
            const start1 =  moment('07:30',"HH:mm")
            const end1 = moment('10:30',"HH:mm")
            const start2 = moment('17:00',"HH:mm")
            const end2 = moment('20:00',"HH:mm")
    
            if((current<start1 && current<end1) ||(current>start2 && current<end2)){
    
                if((from == "Zone1" && to == "Zone2") ||(from == "Zone2" && to == "Zone1")){
    
                    return {
                        fare:35
                    }
                }
                
                if(from == 'Zone1' && to == "Zone1"){
    
                    return {
                        fare:30
                    }
                }
                if(from == 'Zone2' && to == "Zone2"){
    
                    return {
                        fare:25
                    }
                }
            
    
            }
        }







        

      

    

        

        return {

            message:45
        }


    }


    async getfare(req){

        console.log(req.body)
    }
}

module.exports = new fareController()
