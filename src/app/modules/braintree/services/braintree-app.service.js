
@Inject('$location')
export default class CoreService {
	constructor() {

	}

	routeTo(path){
		this.$location.url(path);
	}
}
