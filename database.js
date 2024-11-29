// Simula la creación de una reservación (usando callback)
export function createReservation(data, callback) {
    setTimeout(() => {
        const isError = Math.random() < 0.5; // 50% de probabilidad de error

        if (isError) {
            callback(new Error("Error: No se pudo crear la reservación."), null);
        } else {
            callback(null, { message: "Reservación creada con éxito.", reservation: data });
        }
    }, 1000); // Simula un retraso de 1 segundo
}

// Simula la obtención de una reservación por ID (usando promesas)
export function getReservation(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isError = Math.random() < 0.5; // 50% de probabilidad de error

            if (isError) {
                reject(new Error(`Error: No se pudo encontrar la reservación con ID ${id}.`));
            } else {
                resolve({ id, message: "Reservación encontrada con éxito.", time: "7:00 PM" });
            }
        }, 1000); // Simula un retraso de 1 segundo
    });
}
