import { ApiBackendService } from "../../../api";

export const peopleApi = {

	getPeople: (filter) => ApiBackendService.get('/people/filter', { params: filter })
}