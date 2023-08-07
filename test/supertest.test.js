import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;

const requester = supertest("http://localhost:8080");

describe("Testing App Api Endpoints.", () => {
    describe("Testing Students Api", () => {
        it("Crear un estudiante exitosamente", async () => {
            const res = await requester.post("/api/students").send({
                name: "Prueba",
                lastName: "Prueba",
                email: "prueba@prueba.com",
                age: "20",
                password: "123",
                role: "user",
                courses: []
            });
            expect(res.status).to.equal(201);
            expect(res.body).to.be.an("object");
        });
        it("Debe devolver todos los estudiantes", async () => {
            const res = await requester.get("/api/students");
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
        });
    });
    describe("Testing Courses Api", () => {
        it("Crear un curso exitosamente", async () => {
            const res = await requester.post("/api/courses").send({
                title: "Test course",
                description: "Test description",
                teacherName: "Test teacher",
                students: []
            })
            expect(res.status).to.equal(201);
            expect(res.body).to.be.an("object");
        });
        it("Debe devolver todos los cursos", async () => {
            const res = await requester.get("/api/courses");
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
        });
    });
});