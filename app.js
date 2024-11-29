// app.js

import express from "express";
import { createReservation, getReservation } from "./database";

const app = express();
app.use(express.json()); // Permite manejar datos JSON en el body de las solicitudes

// Ruta para crear una reservación (Callback Error Handling)
app.post("/reservation", (req, res) => {
    const reservationData = req.body;

    createReservation(reservationData, (err, result) => {
        if (err) {
            console.error("Error al crear la reservación:", err.message);
            return res.status(500).json({ error: "No se pudo crear la reservación." });
        }
        res.status(201).json(result);
    });
});

// Ruta para obtener una reservación por ID (Promise Error Handling)
app.get("/reservation/:id", async (req, res) => {
    const reservationId = req.params.id;

    try {
        const reservation = await getReservation(reservationId);
        res.status(200).json(reservation);
    } catch (error) {
        console.error("Error al obtener la reservación:", error.message);
        res.status(500).json({ error: "No se pudo encontrar la reservación." });
    }
});

// Middleware para manejar errores globales
app.use((err, req, res, next) => {
    console.error("Error inesperado:", err.message);
    res.status(500).json({ error: "Ocurrió un error inesperado." });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log("El servidor está ejecutándose en http://localhost:3000");
});
