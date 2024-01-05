import api from "./api";

const service = {
    // Get all knights
    async getAllKnights(filter = "") {
        if(filter === "All") {
            filter = "";
        }

        const response = await api.get(`/knights?filter=${filter}`);

        if(response.status === 200) {
            return response;
        }
        else if(response.status === 204) {
            return "No knights found for this filter";
        } 
        else {
            return "Error getting knights";
        }
    },
    // Get one knight by id
    async getKnightById(id) {
        const response = await api.get(`/knights/${id}`);
        return response;
    },
    // Create a knight
    async createKnight(knight) {
        const response = await api.post("/knights", knight);
        return response;
    },
    // Update a knight
    async updateKnight(id, knight) {
        const response = await api.put(`/knights/${id}`, knight);
        return response;
    },
    // Delete a knight
    async deleteKnight(id) {
        const response = await api.delete(`/knights/${id}`);
        return response;
    },
};

export default service;