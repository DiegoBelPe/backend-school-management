const supertest = require("supertest");
const mongoose = require("mongoose");

const app = require("../../app");
const connectDB = require("../../config/database");
const Message = require("./message.model");

const request = supertest(app);

describe("Message Endpoints", () => {
  beforeAll(async () => {
    await connectDB();
  });

// Cleans up database between each test
afterAll(async () => {
  await Message();
  // Closes the Mongoose connection
  await mongoose.connection.close();
});

describe("Message Endpoints", () => {
  describe("GET /api/message", () => {
    test("should respond with a 201 status code", async () => {
      const res = await request.get("/api/message");
      expect(res.statusCode).toEqual(201);
    });

    test("should respond with an array of messages", async () => {
      const res = await request.get("/api/message");

      expect(res.body).toBeInstanceOf(Array);

      expect(res.body).toEqual(expect.arrayContaining([]));
    });

    describe("POST /api/message", () => {
      test("should respond with a 201 status code", async () => {
        const res = await request.post("/api/message").send({
          remitente: "Diego",
          asunto: "no puede hacer el test",
          mensaje: "le quedo grande",
        });
        expect(res.status).toEqual(201);
      });

      test("should respond with the create message", async () => {
        const res = await request.post("/api/message").send({
          remitente: "juan",
          asunto: "hola",
          mensaje: "hola",
        });
        expect(res.body).toHaveProperty("_id");
        expect(res.body).toHaveProperty("remitente");
        expect(res.body).toHaveProperty("asunto");
        expect(res.body).toHaveProperty("mensaje");
      });

      test("sholud respond whith the created message", async () => {
        //Arrange
        const message = {
          remitente: "juan",
          asunto: "hola",
          mensaje: "hola",
        };
        //Act
        const res = await request.post("/api/message").send(message);
        //Assert
        expect(res.body).toEqual(
          expect.objectContaining({
            remitente: "juan",
            asunto: "hola",
            mensaje: "hola",
          })
        );
      });

      test("should respond with a 500 status code", async () => {
        const res = await request.post("/api/message").send({
          remitente: "",
          asunto: "",
          mensaje: "",
        });
        expect(res.statusCode).toEqual(500);
      });

      test("should have a Content-type: application/json header", async () => {
        // Arrange
        const message = {
          remitente: "Diego",
          asunto: "Make it real camp",
          mensaje: "top-20",
        };
        // Act
        const res = await request.post("/api/message").send(message);
        // Assert
        expect(res.header["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
        expect(res.header["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });
    });
    //Buscar por id
    describe("GET /api/message/by-remitente", () => {
      test("should respond with a 200 status code", async () => {
        const res = await request.get("/api/message/by-remitente");
        expect(res.statusCode).toEqual(200);
      });

      test("should respond with a 404 when message is not found", async () => {
        const remitente = "juan";
        const res = await request.get(`/api/message/by-remitente/${remitente}`);
        expect(res.statusCode).toEqual(404);
      });
    });

    describe("PATCH /api/message/:id", () => {
      test("should respond with a 200 status code", async () => {
        const message = {
          remitente: "Diego",
        };
        const res = await request.get("/api/message");
        const searchId = res.body[0]._id;
        const respond = await request
          .patch(`/api/message/${searchId}`)
          .send(message);

        expect(respond.statusCode).toEqual(200);
      });

      test("should respond with a 404 the updated message when message is not found", async () => {
        const id = "62461f4e8fpoiu69";
        const res = await request.get(`/api/message/${id}`);
        expect(res.statusCode).toEqual(404);
      });
    });

    describe("DELETE /api/message/:id", () => {
      test("should respond with a 200 status code", async () => {
        const message = {
          remitente: "Diego",
        };
        const res = await request.post("/api/message").send(message);
        const searchId = res.body._id;
        const respond = await request.delete(`/api/message/${searchId}`);

        expect(respond.statusCode).toEqual(200);
      });

      test("should respond with a 404 status code if search for id DELETE/:id", async () => {
        const id = "62461f4e8fpoiu69";

        const res = await request.get(`/api/message/${id}`);

        expect(res.statusCode).toEqual(404);
      });
    });
  });
});
});
