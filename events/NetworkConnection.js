const events = require("events")
const needle = require("needle")
const EventEmitter = events.EventEmitter;

class NetworkConnection extends EventEmitter 
{
    constructor(options){

        if(!options)
        {
            console.log("Options is missing")
        }
        if(!options.host)
        {
            console.log("Host is missing")
        }
        if(!options.port)
        {
            console.log("port is missing")
        }

        super()

        this.host = options.host
        this.port = options.port

        this.isOnline = undefined
        this.wasOnline = undefined
        this.test()
    }

    test ()
    {
        needle.get(`https://${this.host}:${this.port}/`, (err)=>{
            if(err)
            {
                this.wentOffline()
            }
            else
            {
                this.wentOnline()
            }

            setTimeout(()=>{
                this.test()
            }, 5 * 1000)
        })
    }

    wentOnline(){
        this.wasOnline = this.isOnline
        this.isOnline = true
        if(this.wasOnline !== this.isOnline)
        {
            this.emit("online")
        }
       
    }
    wentOffline()
    {
        this.wasOnline = this.isOnline
        this.isOnline = false
        if(this.wasOnline !== this.isOnline)
        {
            this.emit("offline")
        }
      
    }
}

module.exports = NetworkConnection