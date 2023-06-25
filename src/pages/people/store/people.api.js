import { ApiBackendService } from "../../../api";
import {FILTER_TYPE} from "../../../../constants";

export const peopleApi = {

	getPeople: (filter) => ApiBackendService.get('/people/filter', { params: filter }),
	getPeopleFilters: () => ApiBackendService.get(`/filter/${FILTER_TYPE.PERSON}`, {}),
	saveFilter: (filter) => ApiBackendService.post('/filter/save', filter, {}),
	deleteFilter: (id) => ApiBackendService.delete(`/filter/delete/${id}`, {}, {})
}