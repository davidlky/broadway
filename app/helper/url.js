import config from '../config.json';

export default function(url){
	if(url.indexOf("/") === 0){
		url = url.substring(1);
	}
	return config.url + url;
}
