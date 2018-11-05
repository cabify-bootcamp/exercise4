
### Client Interface

To test MessagingApp you may use the following code:

### Code

```
const ClientMessagingApp = require('./client')
const client = new ClientMessagingApp('localhost', 9001)

client.sendMessage('cabi', 'prueba # 1')
    .then(res => console.log(res))

``` 

### Client Guidelines: 

- Message Destination should be passed as the first argument and must be less than 20 characters and contain only alphanumeric characters.
- Message Body should be passed as the secong argument and must be less than 1000 characters.

### Error handler

- If the request does not comply with the client guidelines, the API will answer with an error 500 if client messaging options are breached.
- An error 429 will be raised if client exceeded the maximum amount of request per hour (500). However, this error is not exclusive to the ClientMessagingApp, it will cover any request from the consumer to the server.

## Error 400
    
- !regularExpression.test(destination) 
    
    'Destination must contain only alphanumeric chars'
    
- body.length === 0 
    
    `Message body must not be empty`
    
- typeof body !== 'string'
    
    'Body must be a string'   
        
- body.length >= 1000 
    
    `Message body must be less than 1000 characters, message char count = ${body.length}`
    
- destination.length === 0 
    
    `Message destination must not be empty`
    
- typeof destination !== 'string'
    
    'Destination must be a string' 
        
- destination.length >= 20 
    
    `Message destination must be less than 20 characters, destination char count = ${destination.length}`
