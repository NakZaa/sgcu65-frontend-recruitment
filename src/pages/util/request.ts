import http from "http";

export const request = (command: string) => {
    const data = JSON.stringify({
        command: command
    });
    const options = {
        hostname: "http://isd-test.cucheck.in/users",
        path: "/api/users",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": data.length,
            "Accept": "application/json"
        }
    }
    const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)
    
        res.on('data', d => {
          process.stdout.write(d)
        })
      })
    
      req.on('error', error => {
        return false
      })
    
      req.write(data)
      req.end()
    }   



