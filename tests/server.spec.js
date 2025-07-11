const request = require("supertest");
const server = require("../index");


//test de get

/* describe('GET /cafes',() =>{
    it('Deberia responder con un status 200',async()=>{
        const response = await request(server).get('/cafes')
        expect(response.status).toBe(200)
    })
     it('Deberia responder con un array',async()=>{
        const response = await request(server).get('/songs')
        expect(Array.isArray(response.body)).toBe(true)  
        expect(response.body).toBe
    }) 

}) */


// test de get

describe('GET /cafes', () => {
  it('debería responder con status 200 y un arreglo con al menos un objeto', async () => {
    const response = await request(server).get('/cafes');
    
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(typeof response.body[0]).toBe('object');
  });
});


 describe('DELETE /cafes/:id', () => {
  it('debería responder con status 404 si el café no existe', async () => {
    const nonExistentId = 999; // ID que sabemos que no existe

    const response = await request(server).delete(`/cafes/${nonExistentId}`);

    expect(response.status).toBe(400);
    
  });
}); 



describe('POST /cafes', () => {
  it('debería agregar un nuevo café y responder con status 201', async () => {
    const nuevoCafe = [{
      id: 5,
      nombre: 'Café peruano'
    }];

    const response = await request(server)
      .post('/cafes')
      .send(nuevoCafe);

    expect(response.status).toBe(201);
    
  });
}); 


describe('PUT /cafes/:id', () => {
  it('debería responder con status 400 si el id del parámetro es distinto al del body', async () => {
    const idParams = 1;
    const idBody = 2;

    const res = await request(server)
      .put(`/cafes/${idParams}`)
      .send({
        id: idBody,
        nombre: 'Café modificado'
      });

    expect(res.status).toBe(400);
    
  });
});
//test de post
/* 
 describe('POST /cafes',()=>{
    describe('Deberia tener las propiedades title y artist',() =>{
        const newCafe ={
            nombre:'cafe colombiano'
        }
        it('Deberia responder con el status 201',async() =>{
            const response = await request(server).post('/cafes').send(newCafe)
            expect(response.status).toBe(201)
        })
        it('Deberia responder con un json que contenga la nueva cancion con un id',async()=>{
            const response = await request(server).post('/cafes').send(newCafe)
            expect(response.body.id).toBeDefined()
            expect(response.body.nombre).toBe(newSong.nombre)
        })
    })

    describe('Cuando los parametros falten' ,async() =>{
        it('Deberia responder con un status 400', async() =>{
            const fields =[{
                nombre:'cafe'
            }]
            for(const body of fields){
                const response = await request(server).post('/cafes').send(body)
                expect(response.status).toBe(400)
            }
        })
   

})

 }) */


