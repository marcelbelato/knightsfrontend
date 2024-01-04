import API from "./API";

const knights = {
    // Get all knights
    getAllKnights: () => API.get("/knights"),
    // Get one knight by id
    getKnightById: (id) => API.get(`/knights/${id}`),
    // Create a knight
    createKnight: (knight) => API.post("/knights", knight),
    // Update a knight
    updateKnight: (id, knight) => API.put(`/knights/${id}`, knight),
    // Delete a knight
    deleteKnight: (id) => API.delete(`/knights/${id}`),
    };

export default knights;