export const transform_field = (field) => {
	switch(field) {
		case "num_teams":
			return "Number of Teams"
		case "num_adj":
			return "Number of Adjudicators"
		case "num_obs":
			return "Number of Observers"
		case "registration_code":
			return "Registration Code"
		default:
			return `${field.charAt(0).toUpperCase() + field.substr(1)} Name`
	}
}