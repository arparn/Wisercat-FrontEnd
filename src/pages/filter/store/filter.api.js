import { ApiBackendService } from "../../../api";

export const filterApi = {

	getPerson: () => ApiBackendService.get('/person', {})
}