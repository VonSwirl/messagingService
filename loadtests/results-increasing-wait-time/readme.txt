In here I tried adding 

const server = app.listen(process.env.PORT || 3000);
server.timeout(15000);

Thinking that I would increase the timeout time
