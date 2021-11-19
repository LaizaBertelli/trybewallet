// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = [
    {
      email: '',
      password: '',
    }
]
function userInfos(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SAVE_EMAIL':
      return [
        ...state,
        { email: action.value },
      ];
    default:
      return state;
  }
}

export default userInfos;