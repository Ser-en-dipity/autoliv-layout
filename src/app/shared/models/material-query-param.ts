import { MATERIALSHAPE, RAW } from 'src/openapi';


export interface MaterialQueryParam {
	codeOrSpecSearch: string;
	shape?: MATERIALSHAPE;
	raw?: RAW;
}
