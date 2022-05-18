export interface IRegisterUser {
  email: string;
  password: string;
	account_type: string; // selecao
	name: string;
	birthdate: string; // depend language en: YYYY-MM-DD br: DD-MM-YYYY
	gender: string; // masculino; feminino; Trans and onther
	sexual_orientation: string; // heterosexual; homosexual; bisexual
	target_gender: string; // homem; mulher e todos
	relationship_type: string; // nao perguntar default all types: sexo; amizade; namoro e todos
	target_account_type: string; // i do know
	profile_picture: Array<string>;
	automatic_location: boolean; // caso boolean mostrar campos para cadastro de localizacao cidade estado
	lat: number;
	lng: number;
	notification_message: boolean;// pergunta unica
	notification_match: boolean; // pergunta unica
	notification_like: boolean; // pergunta unica
	occupation: string; // decidir se mostrar no cadastro
	about: string;// decidir se mostrar no cadastro
	address_description: string;
	age_min: number; // no cadastro nao perguntar trazer por default 18
	age_max: number; // no cadastro nao perguntar trazer por default 50
	max_distance: number; // nao pergunta default 10km
	show_as_gender: string;
	tiic: boolean; // default
	show_me: boolean; // default
	prejudice: boolean;  // default
	show_age: boolean;  // default
	show_distance: boolean;  // default
	things_i_use: string;  // default
	illicit_drugs: string;  // default
}
export const INITIAL_STAT_REGISTER_USER: IRegisterUser = null
