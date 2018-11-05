

### Cases tested on Mario Client

Case 1

```
{
    "destination":"",
    "body":""
}
```

Response: Error: input cannot be left blank
Handled: Yes

Case 2

```
{

    "body":""
}
```

Response: Error: input must be text
Handled: No, only passed body

```
{
    "destination":"",
}
```

Response: Error: input must be text
Handled: No, only passed destination

Case 3

```
{
    "destination":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "body":""
    "body":"asdasdasdad"
    "body":""
}
```

Response: Error: input must be text
Handled: No, must handle multiple bodies

Case 4

```
{
    "dasd":"aaaaaa",
    "body":"asd"
}
```

Response: Error: input must be text
Handled: No, destination is not dasd

Case 5

```
{
    "destination":"aaaaaaaaaaaaaaaaaamdmdmdmdmdmdmdmdmdmdmdmdmdmdmdmdaaaaaaaaaaaaaaaaaasdddddddddddddddmdmdmdmdmdmdmdmdmdmdaaaa",
    "body":"asd"
}
```

Response: Error: input must be shorter than 100 characters
Handled: Yes

Case 6

```
{
    "destination":" الْحُرُوف الْعَرَبِيَّ",
    "body":"asd"
}
```

Response: OK
Handled: Yes

Case 7

```
{
    "destination":"😀",
    "body":"😀😀😀😀😀😀😀😀😀"
}
```
Response: OK
Handled: Yes


Case 8

```
{
    "destination":"",
    "body":""
}
```

Response: OK
Handled: Yes

Case 9

```
{
    "destination":"😀",
    "body": "sd",
    "script": "asd.js"
}
```
Response: Error: Request failed with status code 500
Handled: NO

Case 10

```
{
    "destination":"😀",
    "body": "sd",

}
```
Response: 
Handled:

Case 10

```
{
    "destination": {"asd": "asd"},
    "body": "sd",
}
```
Response: SyntaxError: Unexpected token
Handled: No

Case 11

```
{
    "destination": "asd",
    "body": {"asd": "asd"},
}
```
Response: SyntaxError: Unexpected token
Handled: No

Case 12

```
{
    "destination": "aaa",
    "body": "{"asd": "asd"}"
}
```
Response: SyntaxError: Unexpected token a in JSON at position 43
Handled: No

Case 13

```
{
    "destination":"     sdsdsd     ",
    "body": "sd",

}
```
Response: 
Handled:

Case 10

```
{
    "destination":"😀",
    "body": "sd",

}
```
Response: 
Handled:

Case 10

```
{
    "destination":"😀",
    "body": "sd",

}
```
Response: 
Handled:

Case 10

```
{
    "destination":"😀",
    "body": "sd",

}
```
Response: 
Handled:

Case 10

```
{
    "destination":"😀",
    "body": "sd",

}
```
Response: 
Handled:

